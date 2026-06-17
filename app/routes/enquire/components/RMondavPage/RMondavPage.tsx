import { Container } from "~/lib/atoms/Container";
import { RCard } from "~/lib/atoms/RCard";
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
          <section
            aria-label="Equiteez enquiry form"
            className={styles.formSection}
            id="contact"
          >
            <RCard className={styles.formShell} shadow="soft">
              <div className={styles.formViewport}>
                <iframe
                  className={styles.formFrame}
                  src={mondayFormUrl}
                  title="Equiteez Mondav form"
                />
              </div>
            </RCard>
          </section>
        </Container>
      </main>
      <RFooter />
    </div>
  );
}
