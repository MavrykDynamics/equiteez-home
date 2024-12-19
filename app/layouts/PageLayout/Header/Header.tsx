import { Link } from "@remix-run/react";
import { Logo } from "../../Logo";
import { Button } from "~/lib/atoms/Button";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <section className={styles.headerWrapper}>
      <div className="px-11 flex items-center justify-between h-[60px] w-container bg-background">
        <Logo />
        <HeaderLinksBlock />
      </div>
    </section>
  );
};

const HeaderLinksBlock = () => {
  return (
    <header className="flex gap-x-9 items-center h-full">
      {/* <Link to="/" className="text-body-xs text-content">
        New Listings
      </Link> */}
      <Link
        to="/properties"
        className="text-body-xs text-content font-semibold"
      >
        Marketplace
      </Link>
      <Link to="/exchange" className="text-body-xs text-content font-semibold">
        Exchange
      </Link>
      <Link
        to="#"
        className="text-body-xs text-content font-semibold opacity-50"
        aria-disabled
      >
        RWA Loans
      </Link>
      <Link
        to="#"
        className="text-body-xs text-content font-semibold opacity-50"
        aria-disabled
      >
        Staking
      </Link>

      {/* <ConnectWallet /> */}
      <Link
        to="https://equiteez.com"
        target="_black"
        referrerPolicy="no-referrer"
      >
        <Button className="py-[10px]">Launch App</Button>
      </Link>
    </header>
  );
};
