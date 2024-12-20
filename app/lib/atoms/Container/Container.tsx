import clsx from "clsx";
import { FC } from "react";

import styles from "./container.module.css";

type ContainerProps = {
  maxWidth?: number;
  className?: string;
} & PropsWithChildren;

export const Container: FC<ContainerProps> = ({
  maxWidth = 1440,
  children,
  className,
}) => {
  return (
    <div style={{ maxWidth }} className={clsx("mx-auto", className)}>
      {children}
    </div>
  );
};

export const PaddingContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.paddingContainer}>{children}</div>;
};
