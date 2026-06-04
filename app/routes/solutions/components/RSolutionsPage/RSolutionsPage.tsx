import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "~/lib/atoms/Container";
import { RButton } from "~/lib/atoms/RButton";
import { RCard } from "~/lib/atoms/RCard";
import { RChip } from "~/lib/atoms/RChip";
import { RIcon } from "~/lib/atoms/RIcon";
import { RSectionHeader } from "~/lib/molecules/RSectionHeader";
import { RTabSwitcher } from "~/lib/organisms/RTabSwitcher";
import { RFooter } from "~/layouts/RFooter";
import { RHeader, type RHeaderNavItem } from "~/layouts/RHeader";

import adminWindowImage from "app/assets/redesign/solutions/mocks/solutions-admin-window.png";
import dashboardImage from "app/assets/redesign/solutions/mocks/solutions-dashboard.png";
import tradingVenueImage from "app/assets/redesign/solutions/mocks/solutions-trading-venue.png";
import advancedTradeImage from "app/assets/redesign/solutions/mocks/solutions-advanced-trade.png";
import programmableCardImage from "app/assets/redesign/solutions/cards/programmable-by-default.svg";
import collaborateCardImage from "app/assets/redesign/solutions/cards/collaborate-with-your-team.svg";
import complianceCardImage from "app/assets/redesign/solutions/cards/compliance-controls.svg";

import styles from "./RSolutionsPage.module.css";

type HeroTab = {
  alt: string;
  id: string;
  image: string;
  label: string;
};

type SuiteStep = {
  alt: string;
  description: string;
  id: string;
  image: string;
  title: string;
};

type OperatorCardAsset = {
  alt: string;
  src: string;
};

type MarketCard = {
  category: string;
  description: string;
  id: string;
  metrics?: string[];
  size: "large" | "small";
  title: string;
};

type TradingFeature = {
  description: string;
  title: string;
};

const navItems: RHeaderNavItem[] = [
  { href: "#solutions", label: "Solutions" },
  { href: "/#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const heroTabs: HeroTab[] = [
  {
    alt: "Equiteez issuer admin panel",
    id: "issuers",
    image: adminWindowImage,
    label: "For Issuers",
  },
  {
    alt: "Equiteez investor admin panel",
    id: "investors",
    image: adminWindowImage,
    label: "For Investors",
  },
];

const suiteSteps: SuiteStep[] = [
  {
    alt: "Issuer dashboard overview",
    description:
      "Launch assets with whitelist, allocation, and KYC controls. Configure vesting, lockups, and primary sale mechanics.",
    id: "issuance",
    image: dashboardImage,
    title: "Issuance and Primary Distribution",
  },
  {
    alt: "Asset lifecycle management dashboard",
    description:
      "Steer assets through Dev, Pre-Market, Primary, and Secondary. Freeze, pause, or unpause on demand. Every contract address surfaced.",
    id: "lifecycle",
    image: dashboardImage,
    title: "Asset Lifecycle Management",
  },
  {
    alt: "Secondary market controls dashboard",
    description:
      "Decide where and how your asset trades. Whitelist venues, enforce transfer restrictions, and monitor volume and liquidity in real time.",
    id: "markets",
    image: dashboardImage,
    title: "Secondary Market Controls",
  },
  {
    alt: "Cap table management dashboard",
    description:
      "Real-time ownership across every asset and share class. Holdings, valuations, transfer history, and vesting. Export to CSV.",
    id: "cap-table",
    image: dashboardImage,
    title: "Cap Table Management",
  },
  {
    alt: "Distributions and audit trail dashboard",
    description:
      "Execute dividends, interest, and redemptions in one operation. Every system event logged with actor and timestamp. Regulator-ready.",
    id: "audit",
    image: dashboardImage,
    title: "Distributions and Audit Trail",
  },
];

const operatorCards: OperatorCardAsset[] = [
  {
    alt: "Programmable By Default",
    src: programmableCardImage,
  },
  {
    alt: "Collaborate With Your Team",
    src: collaborateCardImage,
  },
  {
    alt: "Compliance Controls",
    src: complianceCardImage,
  },
];

const marketCards: MarketCard[] = [
  {
    category: "Exchange",
    description:
      "Order book, AMM, and Smart Escrow venues with instant on-chain settlement. No counterparty risk, no settlement windows, no intermediaries.",
    id: "trade",
    metrics: ["Active Markets", "Total Liquidity", "24h Volume"],
    size: "large",
    title: "Trade 24/7",
  },
  {
    category: "Exchange",
    description:
      "Use your tokenized assets as collateral to borrow against. Integrated with Maven Finance and settled on-chain. The automated liquidity layer for private markets.",
    id: "liquidity",
    metrics: ["Total Borrowed", "Average APY", "Collateral Locked"],
    size: "large",
    title: "Liquidity Without Selling",
  },
  {
    category: "RWA Loans",
    description: "Use tokenized RWAs as collateral via Maven Finance.",
    id: "borrow",
    size: "small",
    title: "Borrow & Lend",
  },
  {
    category: "Wallet",
    description: "Non-custodial via Fireblocks & Dynamic.",
    id: "wallet",
    size: "small",
    title: "MPC Security",
  },
  {
    category: "Yield",
    description: "Precision payouts on schedule, fully on-chain.",
    id: "yield",
    size: "small",
    title: "Auto Dividends",
  },
  {
    category: "Portfolio",
    description: "Live valuations & tax-ready exports.",
    id: "portfolio",
    size: "small",
    title: "Track Holdings",
  },
];

const tradingFeatures: TradingFeature[] = [
  {
    description:
      "Full price ladder with bids and asks, real-time depth, last trades feed.",
    title: "Live Order Book",
  },
  {
    description:
      "Execute at best price or set your own. Take-profit triggers and yield projections built in.",
    title: "Market & Limit Orders",
  },
  {
    description:
      "No T+2, no clearinghouse, no counterparty risk. Trade clears the moment it fills.",
    title: "Instant On-Chain Settlement",
  },
];

function RSolutionsHero() {
  const [activeTabId, setActiveTabId] = useState(heroTabs[0].id);
  const activeTab = useMemo(
    () => heroTabs.find((tab) => tab.id === activeTabId) ?? heroTabs[0],
    [activeTabId]
  );

  return (
    <section className={clsx(styles.section, styles.heroSection)} id="solutions">
      <div className={styles.sectionShell}>
        <div className={styles.heroHeader}>
          <p className={styles.eyebrow}>Solutions</p>
          <div className={styles.heroCopyGrid}>
            <h1 className={styles.heroTitle}>
              The Digital Architecture To Democratize Your Asset Offerings
            </h1>
            <p className={styles.heroDescription}>
              Deploy our turnkey infrastructure to instantly offer global
              investors fractional exposure to high-value RWAs. Embed our
              secure, non-custodial framework directly into your operations to
              fractionalize any yield bearing asset with zero capital barriers,
              secondary liquidity, and automated on-chain distributions.
            </p>
          </div>
        </div>

        <div className={styles.heroShowcase}>
          <RTabSwitcher
            activeTabId={activeTabId}
            ariaLabel="Solutions audience"
            onChange={setActiveTabId}
            tabs={heroTabs}
          />
          <div className={styles.heroMockFrame}>
            <img
              alt={activeTab.alt}
              className={clsx(styles.mockImage, styles.mockSwapImage)}
              decoding="async"
              key={activeTab.id}
              src={activeTab.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RTechnologyStackSection() {
  return (
    <section className={styles.section}>
      <div className={clsx(styles.sectionShell, styles.stackShell)}>
        <p className={styles.stackEyebrow}>Powering The Tokenization Stack</p>
        <p className={styles.stackLine}>
          Mavryk Network · Fireblocks MPC · Dynamic Wallets · Maven Finance ·
          VARA Compliant · KT1 Smart Contracts · 24/7 Settlement
        </p>
      </div>
    </section>
  );
}

function RSuiteSection() {
  const [activeStepId, setActiveStepId] = useState(suiteSteps[0].id);
  const stepRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeStep = useMemo(
    () => suiteSteps.find((step) => step.id === activeStepId) ?? suiteSteps[0],
    [activeStepId]
  );

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        const nextStepId =
          visibleEntry?.target.getAttribute("data-suite-step-id") ?? null;

        if (nextStepId && suiteSteps.some((step) => step.id === nextStepId)) {
          setActiveStepId(nextStepId);
        }
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    Object.values(stepRefs.current).forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.sectionShell}>
        <div className={styles.suiteHeader}>
          <p className={styles.eyebrow}>Equiteez Solutions</p>
          <h2 className={styles.sectionTitle}>
            <span>Your Turnkey</span>
            <span>Tokenization Suite</span>
          </h2>
          <p className={styles.sectionDescription}>
            The multi-tenant admin panel for issuers. Tokenize assets, manage
            their full lifecycle, oversee holders, and audit every action, from
            one workspace.
          </p>
        </div>

        <div className={styles.suiteContent}>
          <div className={styles.suiteMockColumn}>
            <img
              alt={activeStep.alt}
              className={clsx(styles.suiteMockImage, styles.mockSwapImage)}
              decoding="async"
              key={activeStep.id}
              src={activeStep.image}
            />
          </div>
          <div className={styles.suiteStepList}>
            {suiteSteps.map((step) => {
              const isActive = step.id === activeStepId;

              return (
                <button
                  className={clsx(
                    styles.suiteStep,
                    isActive && styles.suiteStepActive
                  )}
                  data-suite-step-id={step.id}
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  ref={(node) => {
                    stepRefs.current[step.id] = node;
                  }}
                  type="button"
                >
                  <span className={styles.suiteStepRail} />
                  <span className={styles.suiteStepCopy}>
                    <span className={styles.suiteStepTitle}>{step.title}</span>
                    <span className={styles.suiteStepDescription}>
                      {step.description}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ROperatorSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionShell}>
        <RSectionHeader
          align="center"
          eyebrow="More Modules"
          heading="Built For Operators & Compliance Teams"
        />

        <div className={styles.operatorBody}>
          <RCard className={styles.operatorSuiteCard} tone="green">
            <h3>Your Multi-Tenant Tokenization Suite</h3>
            <p>
              Deploy our turnkey infrastructure to instantly offer global
              investors fractional exposure to high-value RWAs. Embed our
              secure, non-custodial framework directly into your operations to
              power multi-tenant marketplaces with zero capital barriers,
              instant secondary liquidity, and automated on-chain distributions.
            </p>
            <div className={styles.chipRow}>
              <RChip tone="white">Client 1</RChip>
              <RChip tone="white">Client 2</RChip>
              <RChip tone="white">Client 3</RChip>
            </div>
          </RCard>

          <div className={styles.operatorCardGrid}>
            {operatorCards.map((card) => (
              <img
                alt={card.alt}
                className={styles.operatorCardImage}
                decoding="async"
                key={card.alt}
                src={card.src}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RAppMarketsSection() {
  return (
    <section className={clsx(styles.section, styles.appSection)}>
      <div className={styles.sectionShell}>
        <div className={styles.appHeader}>
          <p className={styles.darkEyebrow}>Equiteez App</p>
          <h2 className={styles.darkSectionTitle}>
            <span>Capital Markets</span>
            <span>That Never Close</span>
          </h2>
          <p className={styles.darkDescription}>
            Buy, trade, borrow, and earn on tokenized real-world assets.
            Non-custodial, 24/7, no intermediaries.
          </p>
        </div>

        <div className={styles.marketGrid}>
          {marketCards.map((card) => (
            <RCard
              className={clsx(
                styles.marketCard,
                card.size === "large"
                  ? styles.marketCardLarge
                  : styles.marketCardSmall
              )}
              key={card.id}
              tone="dark"
            >
              <div className={styles.marketCardCopy}>
                <RChip tone="green">{card.category}</RChip>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              {card.metrics ? (
                <div className={styles.chipRow}>
                  {card.metrics.map((metric) => (
                    <RChip key={metric} tone="glass">
                      {metric}
                    </RChip>
                  ))}
                </div>
              ) : null}
            </RCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function RTradingVenueSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionShell}>
        <div className={styles.tradingLayout}>
          <div className={styles.tradingCopy}>
            <p className={styles.eyebrow}>Secondary Market</p>
            <h2 className={styles.tradingTitle}>
              <span>Embed a High-Performance</span>
              <span>Trading Venue</span>
            </h2>
            <p className={styles.tradingDescription}>
              Buy and sell tokenized real-world assets 24/7. Live order book,
              market & limit orders, transparent depth, every trade settled
              instantly, on-chain.
            </p>

            <div className={styles.tradingFeatureList}>
              {tradingFeatures.map((feature) => (
                <div className={styles.tradingFeature} key={feature.title}>
                  <span className={styles.tradingIconBox}>
                    <RIcon aria-hidden name="check" size="small" />
                  </span>
                  <span>
                    <strong>{feature.title}</strong>
                    <span>{feature.description}</span>
                  </span>
                </div>
              ))}
            </div>

            <RButton
              as="link"
              iconRight={<RIcon aria-hidden name="arrow-long-right" />}
              size="large"
              to="/marketplace"
              tone="black"
            >
              Explore App
            </RButton>
          </div>

          <img
            alt="Equiteez embedded trading venue"
            className={styles.tradingMockImage}
            decoding="async"
            src={tradingVenueImage}
          />
        </div>
      </div>
    </section>
  );
}

function RAdvancedTradeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionShell}>
        <RSectionHeader
          align="center"
          className={styles.advancedHeader}
          description="A full trading workspace, candlestick charts, depth-of-book, limit / market / OTC orders, and live order history. Built for serious operators and institutional desks."
          eyebrow="Advanced Trade"
          heading="Advanced RWA Execution Workspace"
        />
        <img
          alt="Advanced RWA execution workspace"
          className={styles.advancedMockImage}
          decoding="async"
          src={advancedTradeImage}
        />
      </div>
    </section>
  );
}

function RSolutionsCtaSection() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div className={styles.sectionShell}>
        <RSectionHeader
          align="center"
          className={styles.ctaHeader}
          description="Whether you're tokenizing assets or investing in them, Equiteez gives you the full institutional stack on day one."
          heading={["Built For The Future Of", "Capital Markets"]}
        />
        <div className={styles.ctaActions}>
          <RButton
            as="a"
            href="mailto:hello@equiteez.com"
            iconRight={<RIcon aria-hidden name="arrow-long-right" />}
            tone="black"
          >
            Get In Touch
          </RButton>
          <RButton as="link" to="/marketplace" tone="black" variant="secondary">
            Launch App
          </RButton>
        </div>
      </div>
    </section>
  );
}

export function RSolutionsPage() {
  return (
    <div className={styles.page}>
      <RHeader navItems={navItems} variant="light" />
      <main>
        <Container className={styles.pageFrame} maxWidth={1440}>
          <RSolutionsHero />
          <RTechnologyStackSection />
          <RSuiteSection />
          <ROperatorSection />
          <RAppMarketsSection />
          <RTradingVenueSection />
          <RAdvancedTradeSection />
          <RSolutionsCtaSection />
        </Container>
      </main>
      <RFooter />
    </div>
  );
}
