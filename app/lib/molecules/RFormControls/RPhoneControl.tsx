import { useId, type ChangeEvent, type ReactNode } from "react";
import clsx from "clsx";

import { RCountryCodeSelect } from "./RCountryCodeSelect";
import type { PhoneCountry } from "./countryDialCodes";
import styles from "./RFormControls.module.css";

export type RPhoneControlProps = {
  className?: string;
  countries?: PhoneCountry[];
  codeValue: string;
  error?: string;
  helper?: ReactNode;
  label: string;
  numberName?: string;
  numberValue: string;
  onCodeChange: (dial: string, iso2: string) => void;
  onNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onNumberBlur?: () => void;
  placeholder?: string;
  valid?: boolean;
};

/** Searchable country dialling-code combobox + phone number input. */
export function RPhoneControl({
  className,
  countries,
  codeValue,
  error,
  helper,
  label,
  numberName,
  numberValue,
  onCodeChange,
  onNumberChange,
  onNumberBlur,
  placeholder = "000 000 000",
  valid,
}: RPhoneControlProps) {
  const labelId = useId();
  const message = error ?? helper;

  return (
    <div className={clsx(styles.field, className)}>
      <span className={styles.label} id={labelId}>
        {label}
      </span>
      <div className={styles.phoneRow} role="group" aria-labelledby={labelId}>
        <RCountryCodeSelect
          countries={countries}
          value={codeValue}
          onChange={(dial, country) => onCodeChange(dial, country.iso2)}
          invalid={Boolean(error)}
        />
        <input
          aria-label="Phone number"
          className={clsx(
            styles.input,
            error && styles.invalid,
            !error && valid && styles.valid
          )}
          name={numberName}
          inputMode="tel"
          autoComplete="tel-national"
          placeholder={placeholder}
          value={numberValue}
          onChange={onNumberChange}
          onBlur={onNumberBlur}
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
