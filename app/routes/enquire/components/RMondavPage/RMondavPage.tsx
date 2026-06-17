import { Container } from "~/lib/atoms/Container";
import { RFooter } from "~/layouts/RFooter";
import { RHeader } from "~/layouts/RHeader";

import styles from "./RMondavPage.module.css";

const mondayFormUrl =
  "https://forms.monday.com/forms/embed/1c8fe3bed2bc959261e769b23eac85fe?r=euc1";

export function RMondavPage() {
  return (
    <div className={styles.page}>
      <RHeader variant="solutions" />
      <main className={styles.main}>
        <Container className={styles.pageFrame} maxWidth={1440}>
          <section className={styles.formSection} id="contact">
            <iframe
              className={styles.formFrame}
              src={mondayFormUrl}
              title="Equiteez Mondav form"
            />
          </section>
        </Container>
      </main>
      <RFooter />
    </div>
  );
}
