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

/** The shape the action hands to the client (mirrors the validated form). */
export type EnquiryItemInput = {
  registrationType: string;
  fullName: string;
  jobTitle: string;
  workEmail: string;
  phoneCountryCode: string;
  phoneNumber: string;
  companyName: string;
  companyWebsite?: string;
  countryOfIncorporation: string;
  assetClass: string;
  estimatedValue: string;
  projectTimeline: string;
  briefDescription: string;
};

/**
 * TODO(monday): replace each placeholder with the real column id from the
 * target board. Discover them by calling `fetchBoardColumns(env)` once
 * MONDAY_API_TOKEN + MONDAY_BOARD_ID are set (see helper at the bottom), then
 * paste the ids here.
 */
const COLUMN_IDS = {
  registrationType: "TODO_status_column_id",
  jobTitle: "TODO_text_column_id",
  workEmail: "TODO_email_column_id",
  phone: "TODO_phone_column_id",
  companyName: "TODO_text_column_id",
  companyWebsite: "TODO_link_column_id",
  countryOfIncorporation: "TODO_dropdown_column_id",
  assetClass: "TODO_dropdown_column_id",
  estimatedValue: "TODO_dropdown_column_id",
  projectTimeline: "TODO_dropdown_column_id",
  briefDescription: "TODO_long_text_column_id",
} as const;

/**
 * Maps form values to Monday `column_values`.
 *
 * TODO(monday): the value SHAPE must match each column's `type` (from
 * `fetchBoardColumns`). Common shapes:
 *   text / long_text -> "plain string"
 *   email            -> { email, text }
 *   phone            -> { phone, countryShortName }   // ISO-2, e.g. "US"
 *   link             -> { url, text }
 *   status           -> { label } | { index }
 *   dropdown         -> { labels: ["..."] }
 * The dropdown/status LABELS must already exist on the column, so reconcile the
 * select options in `enquiry.const.ts` with the board's column labels.
 */
function buildColumnValues(input: EnquiryItemInput): Record<string, unknown> {
  // Built as entries (not an object literal) so the placeholder column ids can
  // safely repeat until the real, unique ids are filled into COLUMN_IDS.
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
      COLUMN_IDS.phone,
      {
        phone: `${input.phoneCountryCode}${input.phoneNumber}`.replace(
          /\s/g,
          ""
        ),
        countryShortName: "US",
      },
    ],
    [COLUMN_IDS.companyName, input.companyName],
    [
      COLUMN_IDS.companyWebsite,
      input.companyWebsite
        ? { url: input.companyWebsite, text: input.companyWebsite }
        : "",
    ],
    [COLUMN_IDS.countryOfIncorporation, { labels: [input.countryOfIncorporation] }],
    [COLUMN_IDS.assetClass, { labels: [input.assetClass] }],
    [COLUMN_IDS.estimatedValue, { labels: [input.estimatedValue] }],
    [COLUMN_IDS.projectTimeline, { labels: [input.projectTimeline] }],
    [COLUMN_IDS.briefDescription, input.briefDescription],
  ];

  return Object.fromEntries(entries);
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
