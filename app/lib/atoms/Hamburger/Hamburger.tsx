import { FC } from "react";

import styles from "./hamburger.module.css";
import clsx from "clsx";

type HamburgerProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

export const Hamburger: FC<HamburgerProps> = ({ checked, setChecked }) => {
  const handleClick = () => {
    setChecked(!checked);
  };

  return (
    <div
      role="presentation"
      aria-label="Burger Menu"
      onClick={handleClick}
      className={clsx(styles["menu-icon"], checked && styles.active)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
