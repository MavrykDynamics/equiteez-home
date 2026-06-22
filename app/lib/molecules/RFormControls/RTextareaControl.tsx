import {
  forwardRef,
  useId,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";
import clsx from "clsx";

import { FieldShell } from "./FieldShell";
import styles from "./RFormControls.module.css";

export type RTextareaControlProps = {
  className?: string;
  error?: string;
  helper?: ReactNode;
  label: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className">;

export const RTextareaControl = forwardRef<
  HTMLTextAreaElement,
  RTextareaControlProps
>(({ className, error, helper, id, label, ...rest }, ref) => {
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
      <textarea
        ref={ref}
        id={fieldId}
        className={clsx(styles.textarea, error && styles.invalid)}
        aria-invalid={error ? true : undefined}
        {...rest}
      />
    </FieldShell>
  );
});
RTextareaControl.displayName = "RTextareaControl";
