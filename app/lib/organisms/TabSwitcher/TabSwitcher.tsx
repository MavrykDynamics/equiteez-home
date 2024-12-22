import { useMemo, type FC } from "react";
import clsx from "clsx";

// components
import { Tab, TabType, TabVariant } from "~/lib/atoms/Tab";

import styles from "./tabSwitcher.module.css";
import { getGliderDistance } from "./utils";

type TabSwitcherProps = {
  tabs: TabType[];
  activeTabId?: string;
  grow?: boolean;
  variant?: TabVariant;
  className?: string;
};

const variants = {
  primary: "gap-x-3",
  secondary: "gap-x-2",
  tertiary: "gap-x-4",
};

const gliderDistances = {
  primary: (idx: number) => `${getGliderDistance(idx, 12)}%`,
  secondary: (idx: number) => `${getGliderDistance(idx, 8)}%`,
  tertiary: (idx: number) => `${getGliderDistance(idx, 16)}%`,
};

export const TabSwitcher: FC<TabSwitcherProps> = ({
  tabs,
  activeTabId,
  grow,
  className,
  variant = "primary",
}) => {
  const activeIdx = useMemo(
    () => tabs.findIndex((tab) => tab.id === activeTabId) ?? 0,
    [activeTabId, tabs]
  );

  return (
    <div
      className={clsx(
        "flex items-center relative",
        variants[variant],
        className
      )}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          {...tab}
          active={tab.id === activeTabId}
          grow={grow}
          variant={variant}
        />
      ))}
      <span
        style={
          { "--tx": gliderDistances[variant](activeIdx) } as React.CSSProperties
        }
        className={clsx(styles.glider, styles.active)}
      />
    </div>
  );
};
