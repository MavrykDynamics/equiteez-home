import type { HTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./RCard.module.css";

export type RCardTone = "dark" | "green" | "light";

export type RCardProps = HTMLAttributes<HTMLDivElement> & {
  hasShadow?: boolean;
  tone?: RCardTone;
};

export function RCard({
  children,
  className,
  hasShadow = false,
  tone = "light",
  ...props
}: RCardProps) {
  return (
    <div
      className={clsx(
        styles.card,
        styles[tone],
        hasShadow && styles.shadow,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
