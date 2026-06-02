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
  variant?: "transparent" | "light";
};

const defaultNavItems: RHeaderNavItem[] = [
  { href: "#solutions", label: "Solutions" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function RHeader({
  docsHref = "https://docs.equiteez.com/",
  launchAppTo = "/marketplace",
  navItems = defaultNavItems,
  variant = "transparent",
}: RHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { elementRef: headerRef, isScrolledPastElement } =
    useIsScrolledPastElement<HTMLElement>({
      isEnabled: variant === "transparent",
    });
  const hasDarkSurface = variant === "transparent";
  const hasScrolledSurface =
    variant === "transparent" && isScrolledPastElement;
  const hasMenuSurface = variant === "transparent" && isMenuOpen;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={clsx(
        styles.header,
        hasDarkSurface ? styles.dark : styles.light,
        hasScrolledSurface && styles.scrolled,
        hasScrolledSurface && "r-header--scrolled",
        hasMenuSurface && styles.menuOpen
      )}
      data-scrolled={hasScrolledSurface ? "true" : "false"}
      ref={headerRef}
    >
      <div className={styles.inner}>
        <RLogo
          className={styles.desktopLogo}
          tone={hasDarkSurface ? "white" : "black"}
        />
        <RLogo
          className={styles.compactLogo}
          size="compact"
          tone={hasDarkSurface ? "white" : "black"}
        />

        <nav aria-label="Primary navigation" className={styles.nav}>
          {navItems.map((item) => (
            <a className={styles.navLink} href={item.href} key={item.href}>
              {item.label}
            </a>
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
            size="medium"
            to={launchAppTo}
            tone={hasDarkSurface ? "white" : "black"}
            variant="secondary"
          >
            Launch App
          </RButton>
        </div>

        <div className={styles.mobileActions}>
          <RButton
            as="link"
            size="small"
            to={launchAppTo}
            tone={hasDarkSurface ? "white" : "black"}
            variant="secondary"
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
        <Link className={styles.mobileLink} onClick={closeMenu} to={launchAppTo}>
          Launch App
        </Link>
      </div>
    </header>
  );
}
