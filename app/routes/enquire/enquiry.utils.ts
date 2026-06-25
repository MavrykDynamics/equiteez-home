export function formatSubmissionDate(timestamp: number): string {
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

export function getSubmittedAt(): string {
  return formatSubmissionDate(Date.now());
}
