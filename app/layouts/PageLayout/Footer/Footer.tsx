import clsx from "clsx";
import { Link } from "@remix-run/react";

import styles from "./footer.module.css";

import LogoIcon from "app/icons/logo.svg?react";
import { Socials } from "~/a11y/Socials/Socials";

export const Footer = () => {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.footerInner}>
        <div className="max-w-[420px] flex flex-col items-start">
          <Link to="/" className="flex items-center gap-x-[10px] w-auto">
            <LogoIcon className="text-white stroke-current" />
            <span className="text-white text-[26px] font-semibold leading-6">
              EQUITEEZ
            </span>
          </Link>
          <p className="text-body text-white mt-[26px] mb-8">
            The future of real estate ownership is digital. Start with just $50
            to invest in fractionalized, fully compliant, income producing
            assets worldwide.
          </p>
          <div className="text-white">
            <Socials />
          </div>
        </div>
        <div className="flex gap-x-[88px] pr-[63px]">
          {/* {FOOTER_LINKS.map(({ id, links, title }) => (
            <div key={id} className="flex flex-col items-start gap-y-6">
              <h3 className="text-white text-card-headline">{title}</h3>
              {links.map((link, idx) => (
                <Link
                  key={link.label.concat(idx.toString())}
                  to={link.url}
                  className="text-white text-body-xs"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))} */}
        </div>
      </div>
      {/* <div className="bg-green-main h-10 mt-[72px] w-full" /> */}
    </footer>
  );
};
