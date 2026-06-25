// Option lists for the asset-tokenization enquiry form.
//
// Status-column option values double as the Monday.com labels; the server sends
// them with `create_labels_if_missing: true`, so they don't need to pre-exist on
// the board (see `app/lib/apis/monday/monday.server.ts`).

export type SelectOption = {
  label: string;
  value: string;
};

export const REGISTRATION_TYPES = [
  { value: "company", label: "Yes, a company or institution" },
  { value: "individual", label: "Individual / Independent" },
] as const;

export type RegistrationType = (typeof REGISTRATION_TYPES)[number]["value"];

export const FULL_NAME_MAX_LENGTH = 100;
export const COMPANY_NAME_MAX_LENGTH = 120;
export const BRIEF_DESCRIPTION_MIN_LENGTH = 20;

export const COUNTRIES: SelectOption[] = [
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Switzerland",
  "Singapore",
  "Germany",
  "France",
  "Netherlands",
  "Luxembourg",
  "Ireland",
  "Cayman Islands",
  "British Virgin Islands",
  "Hong Kong",
  "Japan",
  "Australia",
  "Canada",
  "Other",
].map((name) => ({ label: name, value: name }));

export const ASSET_CLASSES: SelectOption[] = [
  "Real Estate",
  "Private Equity",
  "Private Credit / Debt",
  "Commodities",
  "Infrastructure",
  "Funds",
  "Art & Collectibles",
  "Other",
].map((name) => ({ label: name, value: name }));

// Values mirror the labels so they map straight onto the Monday Status column
// labels (auto-created via `create_labels_if_missing` if absent on the board).
export const TOKENIZATION_VALUE_RANGES: SelectOption[] = [
  "Under $1M",
  "$1M – $10M",
  "$10M – $50M",
  "$50M – $250M",
  "$250M+",
].map((name) => ({ label: name, value: name }));

export const PROJECT_TIMELINES: SelectOption[] = [
  "Immediately",
  "Within 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "Exploratory / No set timeline",
].map((name) => ({ label: name, value: name }));
