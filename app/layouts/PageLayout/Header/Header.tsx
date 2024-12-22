import { useEffect, useState } from "react";
import { Link } from "@remix-run/react";
import { Logo } from "../../Logo";
import { Button } from "~/lib/atoms/Button";

import { Hamburger } from "~/lib/atoms/Hamburger/Hamburger";
import clsx from "clsx";

// styles
import styles from "./header.module.css";
import { MobileList } from "./components/MobileList";
import { links } from "./header.consts";

export const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else if (!open) {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);

  return (
    <section className={styles.headerWrapper}>
      <div className={styles.headerInnerWrapper}>
        <Logo />
        <HeaderLinksBlock />
        <div className={styles.hamburger}>
          <Hamburger checked={open} setChecked={setOpen} />
        </div>
      </div>

      <div className={clsx(styles.popupWrapper, open && styles.active)}>
        <MobileList links={links} />
        <Link
          to="https://equiteez.com"
          target="_black"
          referrerPolicy="no-referrer"
        >
          <Button className="mb-6 mx-auto min-w-[247px]">Launch App</Button>
        </Link>
      </div>
    </section>
  );
};

const HeaderLinksBlock = () => {
  return (
    <header className={styles.linksBlock}>
      {links.map(({ to, text }) => (
        <Link
          key={text}
          to={to}
          className="text-body-xs text-content font-semibold opacity-50"
          aria-disabled="true"
        >
          {text}
        </Link>
      ))}

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
