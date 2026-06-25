import type { ReactNode } from "react";
import clsx from "clsx";

import styles from "./RFormControls.module.css";

export type FieldShellProps = {
  children: ReactNode;
  className?: string;
  counter?: string;
  error?: string;
  helper?: ReactNode;
  htmlFor: string;
  label: string;
};

/** Shared layout for R form controls: label, control slot, helper/error/counter. */
export function FieldShell({
  children,
  className,
  counter,
  error,
  helper,
  htmlFor,
  label,
}: FieldShellProps) {
  const message = error ?? helper;
  const showMeta = Boolean(message || counter);

  return (
    <div className={clsx(styles.field, className)}>
      <label className={styles.label} htmlFor={htmlFor}>
        {label}
      </label>
      {children}
      {showMeta ? (
        <div className={styles.meta}>
          {message ? (
            <span className={clsx(styles.helper, error && styles.helperError)}>
              {message}
            </span>
          ) : null}
          {counter ? <span className={styles.counter}>{counter}</span> : null}
        </div>
      ) : null}
    </div>
  );
}
