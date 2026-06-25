import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import clsx from "clsx";

import { FieldShell } from "./FieldShell";
import styles from "./RFormControls.module.css";

export type RTextControlProps = {
  className?: string;
  counter?: string;
  error?: string;
  helper?: ReactNode;
  label: string;
  valid?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "className">;

export const RTextControl = forwardRef<HTMLInputElement, RTextControlProps>(
  ({ className, counter, error, helper, id, label, valid, ...rest }, ref) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;

    return (
      <FieldShell
        className={className}
        counter={counter}
        error={error}
        helper={helper}
        htmlFor={fieldId}
        label={label}
      >
        <input
          ref={ref}
          id={fieldId}
          className={clsx(
            styles.input,
            error && styles.invalid,
            !error && valid && styles.valid
          )}
          aria-invalid={error ? true : undefined}
          {...rest}
        />
      </FieldShell>
    );
  }
);
RTextControl.displayName = "RTextControl";
