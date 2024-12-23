import styles from "./financeSection.module.css";
import { FinanceButton } from "./FinanceSection";

export const HeadlineBlock = () => {
  return (
    <div className={styles.headlineWrapper}>
      <div>
        <h1 className={styles.headlineHeader}>
          It’s never been easier to invest in asset such as real estate, and
          earn passive income.
        </h1>

        <p className="text-content-secondary text-body max-w-[736px]">
          Discover new opportunities powered by decentralized finance. The Maven
          Finance lending platform allows you to supercharge your earnings by
          leveraging your tokenized portfolio.
        </p>
      </div>

      <FinanceButton className={styles.headlineBtn} />
    </div>
  );
};
