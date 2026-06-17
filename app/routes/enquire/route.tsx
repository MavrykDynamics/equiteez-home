import type { MetaFunction } from "@remix-run/node";

import { RMondavPage } from "./components/RMondavPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Enquire | Equiteez" },
    {
      name: "description",
      content:
        "Submit the Equiteez Mondav form for real-world asset tokenization inquiries.",
    },
  ];
};

export default function Mondav() {
  return <RMondavPage />;
}
