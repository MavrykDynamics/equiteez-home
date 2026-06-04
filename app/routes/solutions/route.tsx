import type { MetaFunction } from "@remix-run/node";

import { RSolutionsPage } from "./components/RSolutionsPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Solutions | Equiteez" },
    {
      name: "description",
      content:
        "Deploy Equiteez tokenization, trading, lending, and settlement infrastructure for real-world asset issuers and investors.",
    },
  ];
};

export default function Solutions() {
  return <RSolutionsPage />;
}
