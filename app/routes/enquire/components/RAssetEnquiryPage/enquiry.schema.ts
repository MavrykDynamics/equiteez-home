import { z } from "zod";

import {
  BRIEF_DESCRIPTION_MIN_LENGTH,
  COMPANY_NAME_MAX_LENGTH,
  FULL_NAME_MAX_LENGTH,
} from "./enquiry.const";

// Generic free / personal email providers are discouraged for work-email fields.
const GENERIC_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
];

// A "real name": at least two letter-led parts (first + last). Allows accented
// letters, hyphens, apostrophes and periods (e.g. "Jean-Luc O'Brien Jr.").
const FULL_NAME_RE = /^\p{L}[\p{L}'.-]*(?:\s+\p{L}[\p{L}'.-]*)+$/u;

// LinkedIn URL shapes — personal profiles live under /in/, company pages under
// /company/. Accept optional www / trailing path, http or https.
const LINKEDIN_PROFILE_RE =
  /^https?:\/\/(?:[a-z]{2,3}\.)?linkedin\.com\/in\/[\w%-]+\/?.*$/i;
const LINKEDIN_COMPANY_RE =
  /^https?:\/\/(?:[a-z]{2,3}\.)?linkedin\.com\/company\/[\w%-]+\/?.*$/i;

// Require an http(s) scheme — `z.string().url()` alone accepts javascript:/data:
// URLs, which we don't want forwarded to the Monday board's link column.
const HTTP_URL_RE = /^https?:\/\/[^\s]+$/i;

// Count the digits in a phone number, ignoring spaces / punctuation.
const digitCount = (value: string) => value.replace(/\D/g, "").length;

export const enquirySchema = z
  .object({
    registrationType: z.enum(["company", "individual"]),

    fullName: z
      .string()
      .trim()
      .min(1, "Please enter your full name.")
      .max(FULL_NAME_MAX_LENGTH, `Keep this under ${FULL_NAME_MAX_LENGTH} characters.`)
      .regex(FULL_NAME_RE, "Enter your full name (first and last)."),

    jobTitle: z
      .string()
      .trim()
      .min(2, "Please specify your role.")
      .regex(/\p{L}{2,}/u, "Enter a valid job title."),

    workEmail: z
      .string()
      .trim()
      .min(1, "Please enter your work email.")
      .email("Enter a valid email address.")
      .refine(
        (email) => !GENERIC_EMAIL_DOMAINS.includes(email.split("@")[1]?.toLowerCase() ?? ""),
        "Please use a work email, not a generic provider."
      ),

    personalLinkedin: z
      .string()
      .trim()
      .min(1, "Please add your LinkedIn profile.")
      .regex(LINKEDIN_PROFILE_RE, "Enter a valid LinkedIn profile URL (linkedin.com/in/…)."),

    phoneCountryCode: z.string().min(1, "Select a code."),
    // ISO-3166-1 alpha-2 of the chosen dialling code (e.g. "AE"). Tracked
    // alongside the dial code because several countries share a code (+1, +44…),
    // so the dial code alone can't identify the country for the Monday phone column.
    phoneCountryIso2: z.string().min(1, "Select a country."),
    phoneNumber: z
      .string()
      .trim()
      .min(1, "Please enter a phone number.")
      .regex(/^[0-9\s()+-]+$/, "Numbers only.")
      .refine(
        (value) => digitCount(value) >= 7 && digitCount(value) <= 15,
        "Enter a valid phone number."
      ),

    // Company fields are stored as plain strings (default ""); their
    // required-ness depends on registrationType and is enforced in superRefine.
    companyName: z
      .string()
      .trim()
      .max(COMPANY_NAME_MAX_LENGTH, `Keep this under ${COMPANY_NAME_MAX_LENGTH} characters.`),
    companyWebsite: z.string().trim(),
    companyLinkedin: z.string().trim(),
    countryOfIncorporation: z.string(),

    assetClass: z.string().min(1, "Please select an asset class."),
    estimatedValue: z.string().min(1, "Please select a range."),
    projectTimeline: z.string().min(1, "Please select a timeline."),

    briefDescription: z
      .string()
      .trim()
      .min(
        BRIEF_DESCRIPTION_MIN_LENGTH,
        `Please add a bit more detail (at least ${BRIEF_DESCRIPTION_MIN_LENGTH} characters).`
      ),
    submittedAt: z.string().trim().optional(),

    // Checkbox: arrives as a boolean from the client and as "true"/"on" from the
    // server's parsed form data, so coerce before requiring it to be true.
    privacyConsent: z
      .preprocess(
        (value) => value === true || value === "true" || value === "on",
        z.boolean()
      )
      .refine((value) => value, "Please accept the Privacy Policy to continue."),
  })
  .superRefine((values, ctx) => {
    const isCompany = values.registrationType === "company";

    // Company / institution registrants must identify their organisation.
    if (isCompany) {
      if (!values.companyName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["companyName"],
          message: "Please enter the company name.",
        });
      }
      if (!values.countryOfIncorporation) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["countryOfIncorporation"],
          message: "Please select a country.",
        });
      }
      if (!values.companyLinkedin) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["companyLinkedin"],
          message: "Please add the company LinkedIn page.",
        });
      }

      // Company URL fields are only present (and only matter) for company
      // registrants — validate format here so an individual isn't blocked by an
      // error on a field they can no longer see.
      if (values.companyWebsite && !HTTP_URL_RE.test(values.companyWebsite)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["companyWebsite"],
          message: "Enter a valid URL (https://…).",
        });
      }
      if (values.companyLinkedin && !LINKEDIN_COMPANY_RE.test(values.companyLinkedin)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["companyLinkedin"],
          message: "Enter a valid LinkedIn company URL (linkedin.com/company/…).",
        });
      }
    }
  });

export type EnquiryFormValues = z.infer<typeof enquirySchema>;

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryFormValues, string>>;

export const initialEnquiryValues: EnquiryFormValues = {
  registrationType: "company",
  fullName: "",
  jobTitle: "",
  workEmail: "",
  personalLinkedin: "",
  phoneCountryCode: "+971",
  phoneCountryIso2: "AE",
  phoneNumber: "",
  companyName: "",
  companyWebsite: "",
  companyLinkedin: "",
  countryOfIncorporation: "",
  assetClass: "",
  estimatedValue: "",
  projectTimeline: "",
  briefDescription: "",
  privacyConsent: false,
};
