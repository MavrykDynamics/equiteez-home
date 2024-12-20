import { FC, useCallback, useMemo, useState } from "react";

// assets
import StatsImageSrc from "app/assets/home/estate.webp";

import styles from "./financeSection.module.css";
import type { TabType } from "~/lib/atoms/Tab";
import { TabSwitcher } from "~/lib/organisms/TabSwitcher";
import { TabsStepper } from "./TabsStepper";
import { HeadlineBlock } from "./HeadlineBlock";
import { PaddingContainer } from "~/lib/atoms/Container";
import { Button } from "~/lib/atoms/Button";

export const FinanceSection = () => {
  const [activetabId, setAvtiveTabId] = useState("buying");

  const handleTabClick = useCallback((id: string) => {
    setAvtiveTabId(id);
  }, []);

  const tabs: TabType[] = useMemo(
    () => [
      {
        id: "buying",
        label: "Buying",
        handleClick: handleTabClick,
      },
      {
        id: "selling",
        label: "Selling",
        handleClick: handleTabClick,
      },
      {
        id: "borrowing",
        label: "Borrowing",
        handleClick: handleTabClick,
      },
    ],
    [handleTabClick]
  );

  return (
    <PaddingContainer>
      <HeadlineBlock />
      <div className={styles.financeBlockWrapper}>
        <div className={styles.financeBlockImageWrapper}>
          <img src={StatsImageSrc} alt="finance stats" />
        </div>
        <div>
          <TabSwitcher tabs={tabs} activeTabId={activetabId} />
          <div className="mt-[42px]">
            <TabsStepper tabId={activetabId} />
          </div>
        </div>
        <FinanceButton className={styles.headlineBtnMobile} />
      </div>
    </PaddingContainer>
  );
};

export const FinanceButton: FC<{ className?: string }> = ({ className }) => (
  <Button className={className} variant="outline" disabled>
    How Equiteez Works
  </Button>
);
