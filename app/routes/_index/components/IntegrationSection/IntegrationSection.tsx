import { PaddingContainer } from "~/lib/atoms/Container";
import { ProgressBlocks } from "./components/ProgressBlocks/ProgressBlocks";

import styles from "./integrationSection.module.css";

export const IntegrationSection = () => {
  return (
    <PaddingContainer>
      <div className="mb-11 flex flex-col gap-y-3">
        <h1 className={styles.progressBlockHeader}>Full DeFi Integration</h1>
        <p className="text-body text-content-secondary max-w-[738px]">
          Discover new opportunities powered by decentralized finance. The Maven
          Finance lending platform allows you to supercharge your earnings by
          leveraging your tokenized portfolio.
        </p>
      </div>
      <ProgressBlocks />
    </PaddingContainer>
  );
};
