import { Link } from "@remix-run/react";
import type { AnchorHTMLAttributes } from "react";

import {
  EQUITEEZ_APP_URL,
  EQUITEEZ_CONTACT_PATH,
  EQUITEEZ_DOCS_URL,
  EQUITEEZ_MARKETPLACE_URL,
  EXTERNAL_LINK_REL,
  NEW_TAB_TARGET,
} from "~/consts/links";
import { RLogo } from "~/lib/atoms/RLogo";

import mavrykLogoSrc from "app/icons/maven-logo.svg";

import styles from "./RFooter.module.css";

export type RFooterLink = {
  href: string;
  label: string;
  rel?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
};

export type RFooterGroup = {
  links: RFooterLink[];
  title: string;
};

export type RFooterProps = {
  groups?: RFooterGroup[];
};

const defaultFooterGroups: RFooterGroup[] = [
  {
    title: "Platform",
    links: [
      { href: "#contact", label: "For Companies" },
      {
        href: EQUITEEZ_MARKETPLACE_URL,
        label: "Marketplace",
        rel: EXTERNAL_LINK_REL,
        target: NEW_TAB_TARGET,
      },
      {
        href: EQUITEEZ_APP_URL,
        label: "Launch App",
        rel: EXTERNAL_LINK_REL,
        target: NEW_TAB_TARGET,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      {
        href: EQUITEEZ_CONTACT_PATH,
        label: "Contact",
        rel: EXTERNAL_LINK_REL,
        target: NEW_TAB_TARGET,
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        href: EQUITEEZ_DOCS_URL,
        label: "Terms & Conditions",
        rel: EXTERNAL_LINK_REL,
        target: NEW_TAB_TARGET,
      },
      {
        href: EQUITEEZ_DOCS_URL,
        label: "Privacy Policy",
        rel: EXTERNAL_LINK_REL,
        target: NEW_TAB_TARGET,
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        href: "https://www.linkedin.com/company/equiteez/",
        label: "LinkedIn",
        rel: EXTERNAL_LINK_REL,
        target: NEW_TAB_TARGET,
      },
      {
        href: "https://x.com/equiteezdotcom",
        label: "X",
        rel: EXTERNAL_LINK_REL,
        target: NEW_TAB_TARGET,
      },
    ],
  },
];

function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function isExternalHref(href: string) {
  return /^https?:\/\//u.test(href);
}

function RFooterLinkItem({ href, label, rel, target }: RFooterLink) {
  const isExternalLink = isExternalHref(href);
  const resolvedTarget = target ?? (isExternalLink ? NEW_TAB_TARGET : undefined);
  const resolvedRel =
    rel ?? (resolvedTarget === NEW_TAB_TARGET ? EXTERNAL_LINK_REL : undefined);

  if (isInternalRoute(href) && resolvedTarget !== NEW_TAB_TARGET) {
    return (
      <Link
        className={styles.link}
        rel={resolvedRel}
        target={resolvedTarget}
        to={href}
      >
        {label}
      </Link>
    );
  }

  return (
    <a
      className={styles.link}
      href={href}
      rel={resolvedRel}
      target={resolvedTarget}
    >
      {label}
    </a>
  );
}

export function RFooter({ groups = defaultFooterGroups }: RFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <RLogo className={styles.logo} tone="black" />
            <p className={styles.description}>
              Institutional-grade real-world asset tokenization infrastructure,
              powered by Mavryk Network.
            </p>
          </div>

          <nav aria-label="Footer navigation" className={styles.groups}>
            {groups.map((group) => (
              <div className={styles.group} key={group.title}>
                <p className={styles.groupTitle}>{group.title}</p>
                <div className={styles.groupLinks}>
                  {group.links.map((link) => (
                    <RFooterLinkItem
                      href={link.href}
                      key={`${group.title}-${link.label}`}
                      label={link.label}
                      rel={link.rel}
                      target={link.target}
                    />
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Equiteez. All rights reserved.
          </p>
          <a
            className={styles.builtOn}
            href="https://mavryk.org"
            rel={EXTERNAL_LINK_REL}
            target={NEW_TAB_TARGET}
          >
            <span>Built on</span>
            <img
              alt="MAVRYK"
              className={styles.mavrykLogo}
              src={mavrykLogoSrc}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
