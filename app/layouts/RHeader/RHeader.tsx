import { Link } from "@remix-run/react";
import clsx from "clsx";
import { useState } from "react";

import { useIsScrolledPastElement } from "~/hooks/useIsScrolledPastElement";
import { RButton } from "~/lib/atoms/RButton";
import { RIcon } from "~/lib/atoms/RIcon";
import { RLogo } from "~/lib/atoms/RLogo";

import styles from "./RHeader.module.css";

export type RHeaderNavItem = {
  href: string;
  label: string;
};

export type RHeaderProps = {
  docsHref?: string;
  launchAppTo?: string;
  navItems?: RHeaderNavItem[];
  variant?: "landing" | "light" | "solutions" | "transparent";
};

const defaultNavItems: RHeaderNavItem[] = [
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function RHeader({
  docsHref = "https://docs.equiteez.com/",
  launchAppTo = "/marketplace",
  navItems = defaultNavItems,
  variant = "landing",
}: RHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resolvedVariant =
    variant === "transparent"
      ? "landing"
      : variant === "light"
        ? "solutions"
        : variant;
  const { elementRef: headerRef, isScrolledPastElement } =
    useIsScrolledPastElement<HTMLElement>({
      isEnabled: true,
    });
  const hasLandingSurface = resolvedVariant === "landing";
  const hasSolutionsSurface = resolvedVariant === "solutions";
  const hasDarkSurface = hasLandingSurface;
  const hasScrolledSurface = isScrolledPastElement;
  const hasMenuSurface = hasLandingSurface && isMenuOpen;
  const launchButtonTone = hasLandingSurface ? "white" : "black";
  const launchButtonVariant = hasSolutionsSurface ? "primary" : "secondary";
  const logoTone =
    hasDarkSurface && !hasScrolledSurface && !hasMenuSurface
      ? "white"
      : "black";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={clsx(
        styles.header,
        styles[resolvedVariant],
        hasScrolledSurface && styles.scrolled,
        hasScrolledSurface && "r-header--scrolled",
        hasMenuSurface && styles.menuOpen
      )}
      data-scrolled={hasScrolledSurface ? "true" : "false"}
      data-variant={resolvedVariant}
      ref={headerRef}
    >
      <div className={styles.inner}>
        <RLogo className={styles.desktopLogo} tone={logoTone} />
        <RLogo className={styles.compactLogo} size="compact" tone={logoTone} />

        <nav aria-label="Primary navigation" className={styles.nav}>
          {navItems.map((item) => (
            <Link className={styles.navLink} to={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            className={styles.docsLink}
            href={docsHref}
            rel="noreferrer"
            target="_blank"
          >
            Docs
          </a>
          <RButton
            as="link"
            className={styles.launchButton}
            size="medium"
            to={launchAppTo}
            tone={launchButtonTone}
            variant={launchButtonVariant}
          >
            Launch App
          </RButton>
        </div>

        <div className={styles.mobileActions}>
          <RButton
            as="link"
            className={styles.launchButton}
            size="small"
            to={launchAppTo}
            tone={launchButtonTone}
            variant={launchButtonVariant}
          >
            Launch App
          </RButton>
          <button
            aria-controls="r-header-mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            <RIcon aria-hidden name="burger-menu" size="medium" />
          </button>
        </div>
      </div>

      <div
        className={styles.mobileMenu}
        hidden={!isMenuOpen}
        id="r-header-mobile-menu"
      >
        {navItems.map((item) => (
          <a
            className={styles.mobileLink}
            href={item.href}
            key={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a
          className={styles.mobileLink}
          href={docsHref}
          onClick={closeMenu}
          rel="noreferrer"
          target="_blank"
        >
          Docs
        </a>
        <Link
          className={styles.mobileLink}
          onClick={closeMenu}
          to={launchAppTo}
        >
          Launch App
        </Link>
      </div>
    </header>
  );
}
