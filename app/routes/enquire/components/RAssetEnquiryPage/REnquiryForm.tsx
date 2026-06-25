import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useFetcher } from "@remix-run/react";
import clsx from "clsx";

import { RButton } from "~/lib/atoms/RButton";
import { RIcon } from "~/lib/atoms/RIcon";
import {
  EQUITEEZ_DOCS_URL,
  EXTERNAL_LINK_REL,
  NEW_TAB_TARGET,
} from "~/consts/links";

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
import { getSubmittedAt } from "../../enquiry.utils";
import type { action } from "../../route";
import styles from "./REnquiryForm.module.css";

export function REnquiryForm() {
  const fetcher = useFetcher<typeof action>();
  const [values, setValues] = useState<EnquiryFormValues>(initialEnquiryValues);
  const [errors, setErrors] = useState<EnquiryFieldErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof EnquiryFormValues, boolean>>
  >({});

  const isSubmitting = fetcher.state !== "idle";
  const isCompany = values.registrationType === "company";
  const succeeded = fetcher.data?.ok === true;
  const serverFailed =
    fetcher.data?.ok === false && Boolean(fetcher.data.error);

  // Surface server-side field errors (e.g. if client validation is bypassed).
  useEffect(() => {
    if (fetcher.data && fetcher.data.ok === false && fetcher.data.fieldErrors) {
      setErrors(fetcher.data.fieldErrors);
    }
  }, [fetcher.data]);

  // Run the schema once and collapse issues into a per-field message map.
  const validate = (vals: EnquiryFormValues): EnquiryFieldErrors => {
    const result = enquirySchema.safeParse(vals);
    if (result.success) return {};
    const fieldErrors: EnquiryFieldErrors = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0] as keyof EnquiryFormValues;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return fieldErrors;
  };

  // Show errors only for fields the user has already interacted with.
  const showErrorsFor = (
    vals: EnquiryFormValues,
    touchedMap: Partial<Record<keyof EnquiryFormValues, boolean>>
  ) => {
    const all = validate(vals);
    const visible: EnquiryFieldErrors = {};
    (Object.keys(touchedMap) as Array<keyof EnquiryFormValues>).forEach((key) => {
      if (touchedMap[key] && all[key]) visible[key] = all[key];
    });
    setErrors(visible);
  };

  const updateField = (field: keyof EnquiryFormValues, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    showErrorsFor(next, touched);
  };

  const setField =
    (field: keyof EnquiryFormValues) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      updateField(field, event.target.value);
    };

  // Phone dialling-code change: store both the dial code and the ISO-2 of the
  // chosen country (the dial code alone is ambiguous for shared codes like +1).
  const setPhoneCode = (dial: string, iso2: string) => {
    setValues((prev) => ({
      ...prev,
      phoneCountryCode: dial,
      phoneCountryIso2: iso2,
    }));
  };

  const handleBlur = (field: keyof EnquiryFormValues) => () => {
    const nextTouched = { ...touched, [field]: true };
    setTouched(nextTouched);
    showErrorsFor(values, nextTouched);
  };

  const setConsent = (checked: boolean) => {
    const next = { ...values, privacyConsent: checked };
    setValues(next);
    const nextTouched = { ...touched, privacyConsent: true };
    setTouched(nextTouched);
    showErrorsFor(next, nextTouched);
  };

  // A field shows the green "valid" border once it has been touched, holds a
  // (non-empty string) value, and passes validation. Boolean fields like the
  // consent checkbox don't use this — they have no green state.
  const isValid = (field: keyof EnquiryFormValues) => {
    const value = values[field];
    return (
      typeof value === "string" &&
      Boolean(touched[field]) &&
      !errors[field] &&
      value.trim().length > 0
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Touch every field so both error and valid states surface on submit.
    const allTouched = Object.fromEntries(
      (Object.keys(values) as Array<keyof EnquiryFormValues>).map((key) => [
        key,
        true,
      ])
    ) as Partial<Record<keyof EnquiryFormValues, boolean>>;
    setTouched(allTouched);

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
    // Serialise every value to a string for the multipart submission.
    const payload: Record<string, string> = {};
    for (const [key, value] of Object.entries(result.data)) {
      payload[key] = typeof value === "boolean" ? String(value) : String(value ?? "");
    }
    payload.submittedAt = getSubmittedAt();
    fetcher.submit(payload, { method: "post" });
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
            valid={isValid("fullName")}
            onBlur={handleBlur("fullName")}
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
            valid={isValid("jobTitle")}
            onBlur={handleBlur("jobTitle")}
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
            valid={isValid("workEmail")}
            onBlur={handleBlur("workEmail")}
            autoComplete="email"
          />

          <RPhoneControl
            className={styles.span2}
            label="Phone Number"
            codeValue={values.phoneCountryCode}
            onCodeChange={setPhoneCode}
            numberName="phoneNumber"
            numberValue={values.phoneNumber}
            onNumberChange={setField("phoneNumber")}
            onNumberBlur={handleBlur("phoneNumber")}
            error={errors.phoneNumber}
            valid={isValid("phoneNumber")}
          />

          <RTextControl
            className={styles.span2}
            label="LinkedIn Profile"
            name="personalLinkedin"
            type="url"
            placeholder="https://linkedin.com/in/your-profile"
            value={values.personalLinkedin}
            onChange={setField("personalLinkedin")}
            helper="Link to your personal LinkedIn profile."
            error={errors.personalLinkedin}
            valid={isValid("personalLinkedin")}
            onBlur={handleBlur("personalLinkedin")}
            autoComplete="url"
          />
        </div>
      </section>

      {/* Company — only relevant when registering on behalf of an organisation */}
      {isCompany ? (
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
              valid={isValid("companyName")}
              onBlur={handleBlur("companyName")}
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
              valid={isValid("companyWebsite")}
              onBlur={handleBlur("companyWebsite")}
              autoComplete="url"
            />
            <RTextControl
              className={styles.span2}
              label="Company LinkedIn"
              name="companyLinkedin"
              type="url"
              placeholder="https://linkedin.com/company/your-company"
              value={values.companyLinkedin}
              onChange={setField("companyLinkedin")}
              helper="Link to the company's LinkedIn page."
              error={errors.companyLinkedin}
              valid={isValid("companyLinkedin")}
              onBlur={handleBlur("companyLinkedin")}
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
              valid={isValid("countryOfIncorporation")}
              onBlur={handleBlur("countryOfIncorporation")}
            />
          </div>
        </section>
      ) : null}

      {/* Asset details */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Asset details</p>
        <div className={styles.grid}>
          <RSelectControl
            className={styles.span2}
            label="Asset Class / Type"
            name="assetClass"
            placeholder="Select an asset class..."
            options={ASSET_CLASSES}
            value={values.assetClass}
            onChange={setField("assetClass")}
            error={errors.assetClass}
            valid={isValid("assetClass")}
            onBlur={handleBlur("assetClass")}
          />
          <RSelectControl
            label="Estimated Tokenization Value (USD)"
            name="estimatedValue"
            placeholder="Select a range..."
            options={TOKENIZATION_VALUE_RANGES}
            value={values.estimatedValue}
            onChange={setField("estimatedValue")}
            error={errors.estimatedValue}
            valid={isValid("estimatedValue")}
            onBlur={handleBlur("estimatedValue")}
          />
          <RSelectControl
            label="Project Timeline"
            name="projectTimeline"
            placeholder="Select a timeline..."
            options={PROJECT_TIMELINES}
            value={values.projectTimeline}
            onChange={setField("projectTimeline")}
            error={errors.projectTimeline}
            valid={isValid("projectTimeline")}
            onBlur={handleBlur("projectTimeline")}
          />
          <RTextareaControl
            className={styles.span2}
            label="Brief Project Description"
            name="briefDescription"
            placeholder="Please describe the assets you wish to tokenize and your main objectives..."
            value={values.briefDescription}
            onChange={setField("briefDescription")}
            error={errors.briefDescription}
            valid={isValid("briefDescription")}
            onBlur={handleBlur("briefDescription")}
          />
        </div>
      </section>

      {/* Privacy Policy consent */}
      <div className={styles.consent}>
        <label className={styles.consentLabel}>
          <input
            type="checkbox"
            className={styles.consentCheckbox}
            checked={values.privacyConsent}
            onChange={(event) => setConsent(event.target.checked)}
            aria-invalid={errors.privacyConsent ? true : undefined}
          />
          <span>
            I have read and agree to the{" "}
            <a
              className={styles.consentLink}
              href={EQUITEEZ_DOCS_URL}
              target={NEW_TAB_TARGET}
              rel={EXTERNAL_LINK_REL}
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.privacyConsent ? (
          <span className={styles.consentError} role="alert">
            {errors.privacyConsent}
          </span>
        ) : null}
      </div>

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
