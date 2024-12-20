import { Link } from "@remix-run/react";
import { Logo } from "../../Logo";
import { Button } from "~/lib/atoms/Button";

import styles from "./header.module.css";
import { Hamburger } from "~/lib/atoms/Hamburger/Hamburger";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.headerWrapper}>
      <div className={styles.headerInnerWrapper}>
        <Logo />
        <HeaderLinksBlock />
        <Hamburger checked={open} setChecked={setOpen} />
      </div>
    </section>
  );
};

const HeaderLinksBlock = () => {
  return (
    <header className={styles.linksBlock}>
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
