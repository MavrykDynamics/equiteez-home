/**
 * Monday.com API client — SERVER ONLY.
 *
 * Do not import this from client/component code: it reads the API token and
 * must only run inside the Remix `action` (Cloudflare Worker). It pushes
 * asset-tokenization enquiries into the board the WorkForm previously fed.
 *
 * Docs: https://developer.monday.com/api-reference/
 */

const MONDAY_API_URL = "https://api.monday.com/v2";
const MONDAY_API_VERSION = "2024-01";

/**
 * Reads Monday config from `process.env` — consistent with the rest of the app.
 * Locally these come from `.env.local`; in production from `.env.production`
 * and/or the Cloudflare Pages dashboard env vars. Loaded into `process.env`
 * by `vite.config.ts` (loadEnv → define).
 */
function getMondayConfig() {
  return {
    token: process.env.MONDAY_API_TOKEN,
    boardId: process.env.MONDAY_BOARD_ID,
  };
}

/** The shape the action hands to Monday (validated form + server metadata). */
export type EnquiryItemInput = {
  registrationType: string;
  fullName: string;
  jobTitle: string;
  workEmail: string;
  personalLinkedin: string;
  phoneCountryCode: string;
  phoneCountryIso2: string;
  phoneNumber: string;
  companyName: string;
  companyWebsite?: string;
  companyLinkedin?: string;
  countryOfIncorporation: string;
  assetClass: string;
  estimatedValue: string;
  projectTimeline: string;
  briefDescription: string;
  privacyConsent: boolean;
  submittedAt: string;
};

/** Real column ids from the target Monday board. */
const COLUMN_IDS = {
  registrationType: "single_selects7lquwc", // Status
  jobTitle: "short_textj2o2sofz", // Text
  workEmail: "emailf85q1y48", // Email
  personalLinkedin: "link_mm4k4sp7", // Link
  phone: "phonex7ttzdsi", // Phone
  companyName: "short_text7zptpiqe", // Text
  companyWebsite: "linkbja9xu5q", // Link
  companyLinkedin: "link_mm4kqdc1", // Link
  countryOfIncorporation: "countryoegx1g3k", // Country
  assetClass: "single_selecty4jrm5h", // Status
  estimatedValue: "single_selectdy9507d", // Status
  projectTimeline: "single_selectanlup71", // Status
  briefDescription: "long_textkf6is3av", // Long Text
  privacyConsent: "booleaneprox1t6", // Checkbox
} as const;

// ISO-3166-1 alpha-2 codes for the Country column, keyed by the option labels in
// `enquiry.const.ts` (COUNTRIES). "Other" intentionally has no code.
const COUNTRY_ISO2: Record<string, string> = {
  "United States": "US",
  "United Kingdom": "GB",
  "United Arab Emirates": "AE",
  Switzerland: "CH",
  Singapore: "SG",
  Germany: "DE",
  France: "FR",
  Netherlands: "NL",
  Luxembourg: "LU",
  Ireland: "IE",
  "Cayman Islands": "KY",
  "British Virgin Islands": "VG",
  "Hong Kong": "HK",
  Japan: "JP",
  Australia: "AU",
  Canada: "CA",
};

/**
 * Maps form values to Monday `column_values`. Value SHAPE matches each column's
 * type:
 *   text / long_text -> "plain string"
 *   email            -> { email, text }
 *   phone            -> { phone, countryShortName }   // ISO-2, e.g. "US"
 *   link             -> { url, text }
 *   status           -> { label }                     // single-select
 *   country          -> { countryCode, countryName }  // ISO-2 + display name
 * Status labels are created on the fly via `create_labels_if_missing` in the
 * mutation, so the option labels in `enquiry.const.ts` need not pre-exist.
 */
function buildColumnValues(input: EnquiryItemInput): Record<string, unknown> {
  const iso2 = COUNTRY_ISO2[input.countryOfIncorporation];

  const entries: Array<[string, unknown]> = [
    [
      COLUMN_IDS.registrationType,
      {
        label:
          input.registrationType === "company"
            ? "Company / Institution"
            : "Individual",
      },
    ],
    [COLUMN_IDS.jobTitle, input.jobTitle],
    [COLUMN_IDS.workEmail, { email: input.workEmail, text: input.workEmail }],
    [
      COLUMN_IDS.personalLinkedin,
      { url: input.personalLinkedin, text: input.personalLinkedin },
    ],
    [
      COLUMN_IDS.phone,
      {
        phone: `${input.phoneCountryCode}${input.phoneNumber}`.replace(
          /\s/g,
          ""
        ),
        countryShortName: input.phoneCountryIso2,
      },
    ],
    [COLUMN_IDS.companyName, input.companyName],
    [
      COLUMN_IDS.companyWebsite,
      input.companyWebsite
        ? { url: input.companyWebsite, text: input.companyWebsite }
        : "",
    ],
    [
      COLUMN_IDS.companyLinkedin,
      input.companyLinkedin
        ? { url: input.companyLinkedin, text: input.companyLinkedin }
        : "",
    ],
    [
      COLUMN_IDS.countryOfIncorporation,
      iso2 ? { countryCode: iso2, countryName: input.countryOfIncorporation } : "",
    ],
    [COLUMN_IDS.assetClass, { label: input.assetClass }],
    [COLUMN_IDS.estimatedValue, { label: input.estimatedValue }],
    [COLUMN_IDS.projectTimeline, { label: input.projectTimeline }],
    [
      COLUMN_IDS.briefDescription,
      `Submission date: ${input.submittedAt}\n\n${input.briefDescription}`,
    ],
    [COLUMN_IDS.privacyConsent, { checked: input.privacyConsent ? "true" : "false" }],
  ];

  // Drop empty optional columns so we don't send blank values to the board.
  return Object.fromEntries(entries.filter(([, value]) => value !== ""));
}

export function isMondayConfigured(): boolean {
  const { token, boardId } = getMondayConfig();
  return Boolean(token && boardId);
}

async function mondayRequest<T>(
  token: string,
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const res = await fetch(MONDAY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
      "API-Version": MONDAY_API_VERSION,
    },
    body: JSON.stringify({ query, variables }),
  });

  const body = (await res.json()) as {
    data?: T;
    errors?: Array<{ message: string }>;
  };

  if (!res.ok || body.errors?.length) {
    const message =
      body.errors?.map((e) => e.message).join("; ") ?? `HTTP ${res.status}`;
    throw new Error(`Monday API error: ${message}`);
  }
  if (!body.data) throw new Error("Monday API returned no data.");
  return body.data;
}

const CREATE_ITEM = /* GraphQL */ `
  mutation CreateEnquiryItem(
    $boardId: ID!
    $itemName: String!
    $columnValues: JSON!
  ) {
    create_item(
      board_id: $boardId
      item_name: $itemName
      column_values: $columnValues
      create_labels_if_missing: true
    ) {
      id
    }
  }
`;

/** Create an item on the configured board. Returns the new item id. */
export async function createEnquiryItem(
  input: EnquiryItemInput
): Promise<string> {
  const { token, boardId } = getMondayConfig();
  if (!token || !boardId) {
    throw new Error(
      "Monday API not configured (MONDAY_API_TOKEN / MONDAY_BOARD_ID)."
    );
  }

  const data = await mondayRequest<{ create_item: { id: string } }>(
    token,
    CREATE_ITEM,
    {
      boardId,
      itemName: input.companyName || input.fullName || "Website enquiry",
      columnValues: JSON.stringify(buildColumnValues(input)),
    }
  );

  return data.create_item.id;
}

const BOARD_COLUMNS = /* GraphQL */ `
  query BoardColumns($boardId: [ID!]) {
    boards(ids: $boardId) {
      id
      name
      columns {
        id
        title
        type
      }
    }
  }
`;

/**
 * One-shot discovery helper. Once the token + board id are set, call this from
 * a temporary loader/script to print column ids & types, paste them into
 * COLUMN_IDS above, then remove the temporary call.
 */
export async function fetchBoardColumns() {
  const { token, boardId } = getMondayConfig();
  if (!token || !boardId) throw new Error("Monday API not configured.");
  return mondayRequest(token, BOARD_COLUMNS, { boardId: [boardId] });
}
