import { Container } from "~/lib/atoms/Container";
import { RCard } from "~/lib/atoms/RCard";
import { RFooter } from "~/layouts/RFooter";
import { RHeader } from "~/layouts/RHeader";

import { REnquiryForm } from "./REnquiryForm";
import styles from "./RAssetEnquiryPage.module.css";

export function RAssetEnquiryPage() {
  return (
    <div className={styles.page}>
      <RHeader variant="solutions" />
      <main className={styles.main}>
        <Container className={styles.container} maxWidth={760}>
          <header className={styles.header}>
            <h1 className={styles.title}>Tell Us About Your Asset</h1>
            <p className={styles.subtitle}>
              This form is intended for registered companies and institutional
              clients. We review all submissions within two business days.
            </p>
          </header>
          <RCard className={styles.card} shadow="soft">
            <REnquiryForm />
          </RCard>
        </Container>
      </main>
      <RFooter />
    </div>
  );
}
