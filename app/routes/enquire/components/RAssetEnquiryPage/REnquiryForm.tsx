import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useFetcher } from "@remix-run/react";
import clsx from "clsx";

import { RButton } from "~/lib/atoms/RButton";
import { RIcon } from "~/lib/atoms/RIcon";

import {
  RPhoneControl,
  RSelectControl,
  RTextControl,
  RTextareaControl,
} from "~/lib/molecules/RFormControls";
import {
  ASSET_CLASSES,
  COUNTRIES,
  FULL_NAME_MAX_LENGTH,
  PHONE_COUNTRY_CODES,
  PROJECT_TIMELINES,
  REGISTRATION_TYPES,
  TOKENIZATION_VALUE_RANGES,
} from "./enquiry.const";
import {
  enquirySchema,
  initialEnquiryValues,
  type EnquiryFieldErrors,
  type EnquiryFormValues,
} from "./enquiry.schema";
import type { action } from "../../route";
import styles from "./REnquiryForm.module.css";

export function REnquiryForm() {
  const fetcher = useFetcher<typeof action>();
  const [values, setValues] = useState<EnquiryFormValues>(initialEnquiryValues);
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});

  const isSubmitting = fetcher.state !== "idle";
  const succeeded = fetcher.data?.ok === true;
  const serverFailed =
    fetcher.data?.ok === false && Boolean(fetcher.data.error);

  // Surface server-side field errors (e.g. if client validation is bypassed).
  useEffect(() => {
    if (fetcher.data && fetcher.data.ok === false && fetcher.data.fieldErrors) {
      setErrors(fetcher.data.fieldErrors);
    }
  }, [fetcher.data]);

  const setField =
    (field: keyof EnquiryFormValues) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { value } = event.target;
      setValues((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => {
        if (!prev[field]) return prev;
        const next = { ...prev };
        delete next[field];
        return next;
      });
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = enquirySchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: EnquiryFieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof EnquiryFormValues;
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    fetcher.submit(result.data as Record<string, string>, { method: "post" });
  };

  if (succeeded) {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>
          <RIcon aria-hidden name="check" size="medium" />
        </span>
        <h2 className={styles.successTitle}>Enquiry received</h2>
        <p className={styles.successText}>
          Thanks for reaching out. Our team reviews submissions within two
          business days and will be in touch at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit}>
      {/* Registration type */}
      <fieldset className={styles.toggleFieldset}>
        <legend className={styles.label}>
          Are you registering on behalf of a company or institution?
        </legend>
        <div className={styles.toggleGroup}>
          {REGISTRATION_TYPES.map((option) => {
            const active = values.registrationType === option.value;
            return (
              <label
                key={option.value}
                className={clsx(
                  styles.toggleOption,
                  active && styles.toggleOptionActive
                )}
              >
                <input
                  className={styles.toggleInput}
                  type="radio"
                  name="registrationType"
                  value={option.value}
                  checked={active}
                  onChange={setField("registrationType")}
                />
                <span aria-hidden className={styles.radioDot} />
                <span className={styles.toggleText}>{option.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {/* Your details */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Your details</p>
        <div className={styles.grid}>
          <RTextControl
            label="Full Name"
            name="fullName"
            placeholder="Enter Name"
            value={values.fullName}
            onChange={setField("fullName")}
            maxLength={FULL_NAME_MAX_LENGTH}
            counter={`${values.fullName.length}/${FULL_NAME_MAX_LENGTH}`}
            error={errors.fullName}
            autoComplete="name"
          />
          <RTextControl
            label="Job Title / Role"
            name="jobTitle"
            placeholder="e.g., CEO, Product Manager, Intern"
            value={values.jobTitle}
            onChange={setField("jobTitle")}
            helper="Please specify your professional title."
            error={errors.jobTitle}
            autoComplete="organization-title"
          />
          <RTextControl
            className={styles.span2}
            label="Work Email Address"
            name="workEmail"
            type="email"
            placeholder="email@yourcompany.com"
            value={values.workEmail}
            onChange={setField("workEmail")}
            helper="Please provide a valid work email. Avoid using generic domains like Gmail or Yahoo."
            error={errors.workEmail}
            autoComplete="email"
          />

          <RPhoneControl
            className={styles.span2}
            label="Phone Number"
            codeOptions={PHONE_COUNTRY_CODES}
            codeValue={values.phoneCountryCode}
            onCodeChange={setField("phoneCountryCode")}
            numberName="phoneNumber"
            numberValue={values.phoneNumber}
            onNumberChange={setField("phoneNumber")}
            error={errors.phoneNumber}
          />
        </div>
      </section>

      {/* Company */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Company</p>
        <div className={styles.grid}>
          <RTextControl
            label="Company Name"
            name="companyName"
            placeholder="Enter Company Name"
            value={values.companyName}
            onChange={setField("companyName")}
            error={errors.companyName}
            autoComplete="organization"
          />
          <RTextControl
            label="Company Website"
            name="companyWebsite"
            type="url"
            placeholder="https://company.com"
            value={values.companyWebsite}
            onChange={setField("companyWebsite")}
            helper="Recommended for verification purposes."
            error={errors.companyWebsite}
            autoComplete="url"
          />
          <RSelectControl
            className={styles.span2}
            label="Country of Incorporation"
            name="countryOfIncorporation"
            placeholder="Select a country..."
            options={COUNTRIES}
            value={values.countryOfIncorporation}
            onChange={setField("countryOfIncorporation")}
            error={errors.countryOfIncorporation}
          />
          <RSelectControl
            className={styles.span2}
            label="Asset Class / Type"
            name="assetClass"
            placeholder="Select an asset class..."
            options={ASSET_CLASSES}
            value={values.assetClass}
            onChange={setField("assetClass")}
            error={errors.assetClass}
          />
          <RSelectControl
            label="Estimated Tokenization Value (USD)"
            name="estimatedValue"
            placeholder="Select a range..."
            options={TOKENIZATION_VALUE_RANGES}
            value={values.estimatedValue}
            onChange={setField("estimatedValue")}
            error={errors.estimatedValue}
          />
          <RSelectControl
            label="Project Timeline"
            name="projectTimeline"
            placeholder="Select a timeline..."
            options={PROJECT_TIMELINES}
            value={values.projectTimeline}
            onChange={setField("projectTimeline")}
            error={errors.projectTimeline}
          />
          <RTextareaControl
            className={styles.span2}
            label="Brief Project Description"
            name="briefDescription"
            placeholder="Please describe the assets you wish to tokenize and your main objectives..."
            value={values.briefDescription}
            onChange={setField("briefDescription")}
            error={errors.briefDescription}
          />
        </div>
      </section>

      {serverFailed ? (
        <p className={styles.formError} role="alert">
          Something went wrong submitting your enquiry. Please try again.
        </p>
      ) : null}

      <div className={styles.actions}>
        <RButton
          className={styles.submit}
          type="submit"
          variant="primary"
          tone="black"
          size="large"
          isLoading={isSubmitting}
          iconRight={<RIcon aria-hidden name="arrow-long-right" />}
        >
          Submit Application
        </RButton>
      </div>
    </form>
  );
}
