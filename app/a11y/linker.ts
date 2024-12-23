export const linker = (path: string, baseUrl = process.env.EXPLORE_APP_URL) => {
  if (!baseUrl) return path;

  return baseUrl.concat(path);
};

export function openInNewTab(href: string) {
  Object.assign(document.createElement("a"), {
    target: "_blank",
    rel: "noopener noreferrer",
    href: href,
  }).click();
}
