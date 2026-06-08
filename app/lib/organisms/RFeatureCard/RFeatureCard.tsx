import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import { RCard } from "~/lib/atoms/RCard";

import styles from "./RFeatureCard.module.css";

export type RFeatureCardPadding = "medium" | "large";

export type RFeatureCardProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "title"
> & {
  description: ReactNode;
  iconAlt?: string;
  iconSrc: string;
  padding?: RFeatureCardPadding;
  title: ReactNode;
};

export function RFeatureCard({
  className,
  description,
  iconAlt = "",
  iconSrc,
  padding = "medium",
  title,
  ...props
}: RFeatureCardProps) {
  return (
    <RCard
      className={clsx(styles.card, styles[padding], className)}
      tone="light"
      {...props}
    >
      <span className={styles.iconBox}>
        <img
          alt={iconAlt}
          aria-hidden={iconAlt ? undefined : true}
          className={styles.icon}
          decoding="async"
          src={iconSrc}
        />
      </span>
      <div className={styles.copy}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </RCard>
  );
}
