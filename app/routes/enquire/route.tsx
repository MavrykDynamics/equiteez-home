import {
  json,
  type ActionFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";

import { createEnquiryItem, isMondayConfigured } from "~/lib/apis/monday";

import { RAssetEnquiryPage } from "./components/RAssetEnquiryPage";
import {
  enquirySchema,
  type EnquiryFieldErrors,
} from "./components/RAssetEnquiryPage/enquiry.schema";

export const meta: MetaFunction = () => {
  return [
    { title: "Enquire | Equiteez" },
    {
      name: "description",
      content:
        "Tell us about your asset. Submit an enquiry for real-world asset tokenization with Equiteez.",
    },
  ];
};

export type EnquiryActionData =
  | { ok: true; itemId: string | null }
  | { ok: false; error?: string; fieldErrors?: EnquiryFieldErrors };

function formatSubmissionDate(timestamp: number): string {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    month: "short",
    timeZone: "UTC",
    timeZoneName: "short",
    year: "numeric",
  }).format(new Date(timestamp));
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const raw = Object.fromEntries(formData) as Record<string, string>;

  // Server-side validation — never trust the client.
  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: EnquiryFieldErrors = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof EnquiryFieldErrors;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return json<EnquiryActionData>({ ok: false, fieldErrors }, { status: 400 });
  }

  const submissionTimestamp = Date.now();
  const submittedAt = formatSubmissionDate(submissionTimestamp);
  const enquiryPayload = { ...parsed.data, submittedAt };

  // SCAFFOLD: until the Monday board is wired (env vars + COLUMN_IDS in
  // monday.server.ts), let the flow complete in dev so the UI is testable.
  // Remove this branch once Monday is configured.
  if (!isMondayConfigured()) {
    if (process.env.NODE_ENV === "development") {
      // Don't log the submission payload — it contains PII (name, email, phone).
      // eslint-disable-next-line no-console
      console.info(
        "[enquiry] Monday not configured — simulating success (dev)."
      );
      return json<EnquiryActionData>({ ok: true, itemId: null });
    }
    return json<EnquiryActionData>(
      { ok: false, error: "not_configured" },
      { status: 503 }
    );
  }

  try {
    const itemId = await createEnquiryItem(enquiryPayload);
    return json<EnquiryActionData>({ ok: true, itemId });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("[enquiry] Monday submission failed:", error);
    return json<EnquiryActionData>(
      { ok: false, error: "submission_failed" },
      { status: 502 }
    );
  }
};

export default function Enquire() {
  return <RAssetEnquiryPage />;
}
