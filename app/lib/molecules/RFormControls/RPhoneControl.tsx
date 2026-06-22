import { useId, type ChangeEvent, type ReactNode } from "react";
import clsx from "clsx";

import { RIcon } from "~/lib/atoms/RIcon";

import type { RSelectOption } from "./RSelectControl";
import styles from "./RFormControls.module.css";

export type RPhoneControlProps = {
  className?: string;
  codeOptions: RSelectOption[];
  codeValue: string;
  error?: string;
  helper?: ReactNode;
  label: string;
  numberName?: string;
  numberValue: string;
  onCodeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

/** Country dialling-code select + phone number input sharing a single label. */
export function RPhoneControl({
  className,
  codeOptions,
  codeValue,
  error,
  helper,
  label,
  numberName,
  numberValue,
  onCodeChange,
  onNumberChange,
  placeholder = "000 000 000",
}: RPhoneControlProps) {
  const labelId = useId();
  const message = error ?? helper;

  return (
    <div className={clsx(styles.field, className)}>
      <span className={styles.label} id={labelId}>
        {label}
      </span>
      <div className={styles.phoneRow} role="group" aria-labelledby={labelId}>
        <div className={styles.control}>
          <select
            aria-label="Country dialling code"
            className={clsx(styles.select, styles.phoneCode)}
            value={codeValue}
            onChange={onCodeChange}
          >
            {codeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <RIcon
            aria-hidden
            className={styles.chevron}
            name="arrow-short-down"
            size="small"
          />
        </div>
        <input
          aria-label="Phone number"
          className={clsx(styles.input, error && styles.invalid)}
          name={numberName}
          inputMode="tel"
          autoComplete="tel-national"
          placeholder={placeholder}
          value={numberValue}
          onChange={onNumberChange}
          aria-invalid={error ? true : undefined}
        />
      </div>
      {message ? (
        <div className={styles.meta}>
          <span className={clsx(styles.helper, error && styles.helperError)}>
            {message}
          </span>
        </div>
      ) : null}
    </div>
  );
}
