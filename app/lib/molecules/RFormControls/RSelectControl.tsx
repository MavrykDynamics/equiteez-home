import {
  forwardRef,
  useId,
  type ReactNode,
  type SelectHTMLAttributes,
} from "react";
import clsx from "clsx";

import { RIcon } from "~/lib/atoms/RIcon";

import { FieldShell } from "./FieldShell";
import styles from "./RFormControls.module.css";

export type RSelectOption = {
  label: string;
  value: string;
};

export type RSelectControlProps = {
  className?: string;
  error?: string;
  helper?: ReactNode;
  label: string;
  options: RSelectOption[];
  placeholder: string;
  valid?: boolean;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "className">;

export const RSelectControl = forwardRef<HTMLSelectElement, RSelectControlProps>(
  (
    {
      className,
      error,
      helper,
      id,
      label,
      options,
      placeholder,
      valid,
      value,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;

    return (
      <FieldShell
        className={className}
        error={error}
        helper={helper}
        htmlFor={fieldId}
        label={label}
      >
        <div className={styles.control}>
          <select
            ref={ref}
            id={fieldId}
            value={value}
            data-empty={value === "" || value == null ? "true" : undefined}
            className={clsx(
              styles.select,
              error && styles.invalid,
              !error && valid && styles.valid
            )}
            aria-invalid={error ? true : undefined}
            {...rest}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
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
      </FieldShell>
    );
  }
);
RSelectControl.displayName = "RSelectControl";
