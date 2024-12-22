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
import clsx from "clsx";

const images: Record<string, string> = {
  buying: StatsImageSrc,
  selling: StatsImageSrc,
  borrowing: StatsImageSrc,
};

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
        <div className={styles.imageContainer}>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={clsx(
                styles.financeBlockImageWrapper,
                tab.id === activetabId && styles.active
              )}
            >
              <img src={images[tab.id]} alt={tab.label} />
            </div>
          ))}
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
