import type { MetaFunction } from "@remix-run/node";

import { RAboutPage } from "./components/RAboutPage";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Equiteez" },
    {
      name: "description",
      content:
        "Learn about Equiteez, the institutional standard for tokenized real-world asset infrastructure, liquidity, and compliant global market access.",
    },
  ];
};

export default function About() {
  return <RAboutPage />;
}
