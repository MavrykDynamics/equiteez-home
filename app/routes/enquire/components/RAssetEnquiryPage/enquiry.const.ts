// Option lists for the asset-tokenization enquiry form.
//
// NOTE: the select option *values* below must eventually be reconciled with the
// label set of the corresponding Monday.com board columns (status / dropdown
// columns accept only their predefined labels). Treat these as the working set
// until the board column definitions are confirmed. See route `action` TODO.

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

// A compact, commonly-needed dialling-code set. Extend to the full ITU list when
// the Monday phone column format is confirmed.
export const PHONE_COUNTRY_CODES: SelectOption[] = [
  { label: "🇺🇸 +1", value: "+1" },
  { label: "🇬🇧 +44", value: "+44" },
  { label: "🇪🇺 +33", value: "+33" },
  { label: "🇩🇪 +49", value: "+49" },
  { label: "🇨🇭 +41", value: "+41" },
  { label: "🇦🇪 +971", value: "+971" },
  { label: "🇸🇬 +65", value: "+65" },
  { label: "🇭🇰 +852", value: "+852" },
  { label: "🇯🇵 +81", value: "+81" },
  { label: "🇦🇺 +61", value: "+61" },
];

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

export const TOKENIZATION_VALUE_RANGES: SelectOption[] = [
  { label: "Under $1M", value: "<1m" },
  { label: "$1M – $10M", value: "1m-10m" },
  { label: "$10M – $50M", value: "10m-50m" },
  { label: "$50M – $250M", value: "50m-250m" },
  { label: "$250M+", value: "250m+" },
];

export const PROJECT_TIMELINES: SelectOption[] = [
  { label: "Immediately", value: "immediately" },
  { label: "Within 3 months", value: "3m" },
  { label: "3 – 6 months", value: "3-6m" },
  { label: "6 – 12 months", value: "6-12m" },
  { label: "Exploratory / No set timeline", value: "exploratory" },
];
