import styles from "./financeSection.module.css";
import { FinanceButton } from "./FinanceSection";
import { motion } from "framer-motion";
import { slideFromLeftVariant, slideFromRightVariant } from "~/framer/variants";

export const HeadlineBlock = () => {
  return (
    <div className={styles.headlineWrapper}>
      <motion.div
        variants={slideFromLeftVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div>
          <h1 className={styles.headlineHeader}>
            It’s never been easier to invest in assets such as real estate, and
            earn passive income.
          </h1>

          <p className="text-content-secondary text-body max-w-[736px]">
            Discover new opportunities powered by decentralized finance. The
            Maven Finance lending platform allows you to supercharge your
            earnings by leveraging your tokenized portfolio.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideFromRightVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <FinanceButton className={styles.headlineBtn} />
      </motion.div>
    </div>
  );
};
