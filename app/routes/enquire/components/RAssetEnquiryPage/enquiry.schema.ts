import { z } from "zod";

import { FULL_NAME_MAX_LENGTH } from "./enquiry.const";

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

export const enquirySchema = z.object({
  registrationType: z.enum(["company", "individual"]),

  fullName: z
    .string()
    .trim()
    .min(1, "Please enter your full name.")
    .max(FULL_NAME_MAX_LENGTH, `Keep this under ${FULL_NAME_MAX_LENGTH} characters.`),

  jobTitle: z.string().trim().min(1, "Please specify your role."),

  workEmail: z
    .string()
    .trim()
    .min(1, "Please enter your work email.")
    .email("Enter a valid email address.")
    .refine(
      (email) => !GENERIC_EMAIL_DOMAINS.includes(email.split("@")[1]?.toLowerCase() ?? ""),
      "Please use a work email, not a generic provider."
    ),

  phoneCountryCode: z.string().min(1, "Select a code."),
  phoneNumber: z
    .string()
    .trim()
    .min(1, "Please enter a phone number.")
    .regex(/^[0-9\s-]+$/, "Numbers only."),

  companyName: z.string().trim().min(1, "Please enter the company name."),

  companyWebsite: z
    .string()
    .trim()
    .url("Enter a valid URL (https://…).")
    .optional()
    .or(z.literal("")),

  countryOfIncorporation: z.string().min(1, "Please select a country."),
  assetClass: z.string().min(1, "Please select an asset class."),
  estimatedValue: z.string().min(1, "Please select a range."),
  projectTimeline: z.string().min(1, "Please select a timeline."),

  briefDescription: z.string().trim().min(1, "Please add a short description."),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryFormValues, string>>;

export const initialEnquiryValues: EnquiryFormValues = {
  registrationType: "company",
  fullName: "",
  jobTitle: "",
  workEmail: "",
  phoneCountryCode: "+1",
  phoneNumber: "",
  companyName: "",
  companyWebsite: "",
  countryOfIncorporation: "",
  assetClass: "",
  estimatedValue: "",
  projectTimeline: "",
  briefDescription: "",
};
