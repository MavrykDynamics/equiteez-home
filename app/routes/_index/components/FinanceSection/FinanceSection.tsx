import { FC, useCallback, useMemo, useState } from "react";

// assets
import BuyingImg from "app/assets/home/buying.webp";
import SellingImg from "app/assets/home/selling.webp";
import BorrowingImg from "app/assets/home/borrowing.webp";

import styles from "./financeSection.module.css";
import type { TabType } from "~/lib/atoms/Tab";
import { TabSwitcher } from "~/lib/organisms/TabSwitcher";
import { TabsStepper } from "./TabsStepper";
import { HeadlineBlock } from "./HeadlineBlock";
import { PaddingContainer } from "~/lib/atoms/Container";
import { Button } from "~/lib/atoms/Button";
import clsx from "clsx";
import { useWindowDimensions } from "~/hooks/useWindowDimensions";

const images: Record<string, string> = {
  buying: BuyingImg,
  selling: SellingImg,
  borrowing: BorrowingImg,
};

export const FinanceSection = () => {
  const [activetabId, setAvtiveTabId] = useState("buying");
  const { width } = useWindowDimensions();
  const isMobile = width < 600;

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
        <FinanceButton className={styles.headlineBtnMobile} />
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
          <TabSwitcher
            tabs={tabs}
            activeTabId={activetabId}
            minWidth={isMobile ? 106 : 115}
          />
          <div className="mt-[42px]">
            <TabsStepper tabId={activetabId} />
          </div>
        </div>
      </div>
    </PaddingContainer>
  );
};

export const FinanceButton: FC<{ className?: string }> = ({ className }) => (
  <Button className={className} variant="outline" disabled>
    How Equiteez Works
  </Button>
);
