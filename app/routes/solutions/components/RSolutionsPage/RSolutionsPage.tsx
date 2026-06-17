import clsx from "clsx";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

import { Container } from "~/lib/atoms/Container";
import { getMotionAwareScrollBehavior } from "~/lib/animations/animations";
import { RButton } from "~/lib/atoms/RButton";
import { RCard } from "~/lib/atoms/RCard";
import { RChip } from "~/lib/atoms/RChip";
import { RIcon } from "~/lib/atoms/RIcon";
import { Reveal } from "~/lib/atoms/Reveal";
import { RSectionHeader } from "~/lib/molecules/RSectionHeader";
import { RTabSwitcher } from "~/lib/organisms/RTabSwitcher";
import { RFooter } from "~/layouts/RFooter";
import { RHeader, type RHeaderNavItem } from "~/layouts/RHeader";
import { RMarketingCtaSection } from "~/templates/RMarketingCtaSection";

import advancedTradeImage from "app/assets/redesign/solutions/mocks/advanced-trade-1.svg";
import programmableCardImage from "app/assets/redesign/solutions/cards/programmable-by-default.svg";
import collaborateCardImage from "app/assets/redesign/solutions/cards/collaborate-with-your-team.svg";
import complianceCardImage from "app/assets/redesign/solutions/cards/compliance-controls.svg";
import suiteStepOneImage from "app/assets/redesign/solutions/mocks/step-1.svg";
import suiteStepTwoImage from "app/assets/redesign/solutions/mocks/step-2.svg";
import suiteStepThreeImage from "app/assets/redesign/solutions/mocks/step-3.svg";
import suiteStepFourImage from "app/assets/redesign/solutions/mocks/step-4.svg";
import suiteStepFiveImage from "app/assets/redesign/solutions/mocks/step-5.svg";
import heroIssuerTabImage from "app/assets/redesign/solutions/mocks/tab-1.svg";
import heroInvestorTabImage from "app/assets/redesign/solutions/mocks/tab-2.svg";
import tradingVenueImage from "app/assets/redesign/solutions/mocks/venue.svg";

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

type OperatorResponsiveCardIcon = "code" | "users" | "shield";

type OperatorResponsiveCard = {
  description: string;
  icon: OperatorResponsiveCardIcon;
  title: string;
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

const solutionsNavItems: RHeaderNavItem[] = [
  { href: "#solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const heroTabs: HeroTab[] = [
  {
    alt: "Equiteez issuer admin panel",
    id: "issuers",
    image: heroIssuerTabImage,
    label: "For Issuers",
  },
  {
    alt: "Equiteez investor admin panel",
    id: "investors",
    image: heroInvestorTabImage,
    label: "For Investors",
  },
];

const suiteSteps: SuiteStep[] = [
  {
    alt: "Issuer dashboard overview",
    description:
      "Launch assets with whitelist, allocation, and KYC controls. Configure vesting, lockups, and primary sale mechanics.",
    id: "issuance",
    image: suiteStepOneImage,
    title: "Issuance and Primary Distribution",
  },
  {
    alt: "Asset lifecycle management dashboard",
    description:
      "Steer assets through Dev, Pre-Market, Primary, and Secondary. Freeze, pause, or unpause on demand. Every contract address surfaced.",
    id: "lifecycle",
    image: suiteStepTwoImage,
    title: "Asset Lifecycle Management",
  },
  {
    alt: "Secondary market controls dashboard",
    description:
      "Decide where and how your asset trades. Whitelist venues, enforce transfer restrictions, and monitor volume and liquidity in real time.",
    id: "markets",
    image: suiteStepThreeImage,
    title: "Secondary Market Controls",
  },
  {
    alt: "Cap table management dashboard",
    description:
      "Real-time ownership across every asset and share class. Holdings, valuations, transfer history, and vesting. Export to CSV.",
    id: "cap-table",
    image: suiteStepFourImage,
    title: "Cap Table Management",
  },
  {
    alt: "Distributions and audit trail dashboard",
    description:
      "Execute dividends, interest, and redemptions in one operation. Every system event logged with actor and timestamp. Regulator-ready.",
    id: "audit",
    image: suiteStepFiveImage,
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

const operatorResponsiveCards: OperatorResponsiveCard[] = [
  {
    description:
      "Every asset is a live smart contract. Compose with DeFi, automate distributions, and unlock liquidity without rebuilding the asset.",
    icon: "code",
    title: "Programmable By Default",
  },
  {
    description:
      "Bring on legal counsel, transfer agents, originators, and external auditors, each with the right permissions.",
    icon: "users",
    title: "Collaborate With Your Team",
  },
  {
    description:
      "Freeze assets pending review, unfreeze holders, enforce whitelists, and gate transfers, all logged for the regulator.",
    icon: "shield",
    title: "Compliance Controls",
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

const suiteObserverThresholds = [0, 0.25, 0.5, 0.75, 1];
const suiteSelectionBand = {
  bottom: 0.68,
  top: 0.32,
} as const;

type SuiteStepCandidate = {
  distanceFromCenter: number;
  id: string;
  score: number;
};

function getSuiteStepCandidate(
  node: HTMLButtonElement,
  stepId: string
): SuiteStepCandidate | null {
  const viewportHeight = window.innerHeight || 1;
  const rect = node.getBoundingClientRect();
  const visibleHeight = Math.max(
    0,
    Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
  );
  const visibleRatio = Math.min(1, visibleHeight / Math.max(rect.height, 1));
  const viewportCenter = viewportHeight / 2;
  const stepCenter = rect.top + rect.height / 2;
  const distanceFromCenter = Math.abs(stepCenter - viewportCenter);
  const isInsideSelectionBand =
    rect.top <= viewportHeight * suiteSelectionBand.bottom &&
    rect.bottom >= viewportHeight * suiteSelectionBand.top;

  if (visibleRatio === 0 && !isInsideSelectionBand) {
    return null;
  }

  return {
    distanceFromCenter,
    id: stepId,
    score:
      visibleRatio +
      (isInsideSelectionBand ? 0.35 : 0) -
      distanceFromCenter / viewportHeight,
  };
}

function OperatorCardIcon({ icon }: { icon: OperatorResponsiveCardIcon }) {
  if (icon === "users") {
    return (
      <svg
        aria-hidden
        className={styles.operatorResponsiveIconSvg}
        fill="none"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d="M15 19c0-2-2.7-3.5-6-3.5S3 17 3 19" />
        <path d="M21 19c0-1.5-1.4-2.7-3.5-3.2" />
        <path d="M13.5 5.4A3 3 0 1 1 12 11" />
        <path d="M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg
        aria-hidden
        className={styles.operatorResponsiveIconSvg}
        fill="none"
        focusable="false"
        viewBox="0 0 24 24"
      >
        <path d="m15 10-4 4-2-2" />
        <path d="M20 11.2c0 5-3.8 7.2-7.2 8.5a2.2 2.2 0 0 1-1.6 0C7.8 18.4 4 16.2 4 11.2V5.8c0-1 .8-1.8 1.8-1.8h12.4c1 0 1.8.8 1.8 1.8v5.4Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden
      className={styles.operatorResponsiveIconSvg}
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="m15 8 4 4-4 4" />
      <path d="m9 16-4-4 4-4" />
    </svg>
  );
}

function SuiteResponsiveCarousel({ steps }: { steps: SuiteStep[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const syncCarouselState = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const handleDotClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) {
      return undefined;
    }

    syncCarouselState(emblaApi);
    emblaApi.on("reInit", syncCarouselState);
    emblaApi.on("select", syncCarouselState);

    return () => {
      emblaApi.off("reInit", syncCarouselState);
      emblaApi.off("select", syncCarouselState);
    };
  }, [emblaApi, syncCarouselState]);

  return (
    <>
      <div className={styles.suiteResponsiveViewport} ref={emblaRef}>
        <div className={styles.suiteResponsiveContainer}>
          {steps.map((step) => (
            <article className={styles.suiteResponsiveSlide} key={step.id}>
              <div className={styles.suiteResponsiveCard}>
                <div className={styles.suiteResponsiveCopy}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <RCard
                  className={clsx(
                    styles.suiteResponsiveMockCard,
                    styles.browserMockFrame
                  )}
                  shadow="soft"
                  shape="mock"
                >
                  <img
                    alt={step.alt}
                    className={styles.mockImage}
                    decoding="async"
                    src={step.image}
                  />
                </RCard>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div
        aria-label="Suite carousel pagination"
        className={styles.suitePagination}
      >
        {scrollSnaps.map((_, index) => {
          const isSelected = index === selectedIndex;

          return (
            <button
              aria-current={isSelected ? "true" : undefined}
              aria-label={`Go to suite slide ${index + 1}`}
              className={clsx(
                styles.suitePaginationDot,
                isSelected && styles.suitePaginationDotActive
              )}
              key={index}
              onClick={() => handleDotClick(index)}
              type="button"
            />
          );
        })}
      </div>
    </>
  );
}

function RSolutionsHero() {
  const [activeTabId, setActiveTabId] = useState(heroTabs[0].id);
  const activeTab = useMemo(
    () => heroTabs.find((tab) => tab.id === activeTabId) ?? heroTabs[0],
    [activeTabId]
  );

  return (
    <section
      className={clsx(styles.section, styles.heroSection)}
      id="solutions"
    >
      <div className={styles.sectionShell}>
        <Reveal className={styles.heroHeader}>
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
        </Reveal>

        <Reveal className={styles.heroShowcase} delay={0.05} preset="image">
          <RTabSwitcher
            activeTabId={activeTabId}
            ariaLabel="Solutions audience"
            className={styles.heroTabSwitcher}
            onChange={setActiveTabId}
            tabs={heroTabs}
          />
          <RCard
            className={clsx(
              styles.heroMockFrame,
              styles.browserMockFrame,
              styles.mockSwapCard
            )}
            key={activeTab.id}
            shadow="strong"
            shape="mock"
          >
            <img
              alt={activeTab.alt}
              className={clsx(styles.mockImage, styles.heroMockImage)}
              decoding="async"
              src={activeTab.image}
            />
          </RCard>
        </Reveal>
      </div>
    </section>
  );
}

function RTechnologyStackSection() {
  return (
    <section
      className={clsx(styles.section, styles.stackSection)}
      id="technology"
    >
      <Reveal className={clsx(styles.sectionShell, styles.stackShell)}>
        <p className={styles.stackEyebrow}>Powering The Tokenization Stack</p>
        <p className={styles.stackLine}>
          Mavryk Network · Fireblocks MPC · Dynamic Wallets · Maven Finance ·
          VARA Compliant · KT1 Smart Contracts · 24/7 Settlement
        </p>
      </Reveal>
    </section>
  );
}

function RSuiteSection() {
  const [activeStepId, setActiveStepId] = useState(suiteSteps[0].id);
  const activeStepIdRef = useRef(activeStepId);
  const observerFrameRef = useRef<number | null>(null);
  const stepRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const shouldReduceMotion = useReducedMotion();
  const activeStep = useMemo(
    () => suiteSteps.find((step) => step.id === activeStepId) ?? suiteSteps[0],
    [activeStepId]
  );

  const setActiveStep = useCallback((stepId: string) => {
    activeStepIdRef.current = stepId;
    setActiveStepId((currentStepId) =>
      currentStepId === stepId ? currentStepId : stepId
    );
  }, []);

  useEffect(() => {
    activeStepIdRef.current = activeStepId;
  }, [activeStepId]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const syncActiveStep = () => {
      observerFrameRef.current = null;
      const candidates = suiteSteps
        .map((step) => {
          const node = stepRefs.current[step.id];

          if (!node) {
            return null;
          }

          return getSuiteStepCandidate(node, step.id);
        })
        .filter(
          (candidate): candidate is SuiteStepCandidate => candidate !== null
        );

      const closestCandidate = candidates.sort(
        (leftCandidate, rightCandidate) => {
          const scoreDifference = rightCandidate.score - leftCandidate.score;

          if (scoreDifference !== 0) {
            return scoreDifference;
          }

          return (
            leftCandidate.distanceFromCenter - rightCandidate.distanceFromCenter
          );
        }
      )[0];

      if (closestCandidate && activeStepIdRef.current !== closestCandidate.id) {
        setActiveStep(closestCandidate.id);
      }
    };

    const scheduleActiveStepSync = () => {
      if (observerFrameRef.current !== null) {
        return;
      }

      observerFrameRef.current = window.requestAnimationFrame(syncActiveStep);
    };

    const observer = new IntersectionObserver(
      () => {
        scheduleActiveStepSync();
      },
      {
        rootMargin: "-24% 0px -24% 0px",
        threshold: suiteObserverThresholds,
      }
    );

    Object.values(stepRefs.current).forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });
    window.addEventListener("resize", scheduleActiveStepSync);
    scheduleActiveStepSync();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleActiveStepSync);

      if (observerFrameRef.current !== null) {
        window.cancelAnimationFrame(observerFrameRef.current);
      }
    };
  }, [setActiveStep]);

  const handleStepClick = useCallback(
    (stepId: string) => {
      setActiveStep(stepId);
      stepRefs.current[stepId]?.scrollIntoView({
        behavior: getMotionAwareScrollBehavior(shouldReduceMotion),
        block: "center",
      });
    },
    [setActiveStep, shouldReduceMotion]
  );

  return (
    <section className={styles.section} id="suite">
      <div className={styles.sectionShell}>
        <Reveal className={styles.suiteHeader}>
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
        </Reveal>

        <div className={styles.suiteContent}>
          <Reveal className={styles.suiteMockColumn} preset="image">
            <RCard
              className={clsx(
                styles.suiteMockCard,
                styles.browserMockFrame,
                styles.mockSwapCard
              )}
              key={activeStep.id}
              shadow="soft"
              shape="mock"
            >
              <img
                alt={activeStep.alt}
                className={styles.mockImage}
                decoding="async"
                src={activeStep.image}
              />
            </RCard>
          </Reveal>
          <Reveal className={styles.suiteStepList} delay={0.06}>
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
                  onClick={() => handleStepClick(step.id)}
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
          </Reveal>
        </div>

        <Reveal className={styles.suiteResponsiveContent} delay={0.05}>
          <SuiteResponsiveCarousel steps={suiteSteps} />
        </Reveal>
      </div>
    </section>
  );
}

function ROperatorSection() {
  return (
    <section className={styles.section} id="modules">
      <div className={styles.sectionShell}>
        <Reveal className={styles.operatorHeader}>
          <RSectionHeader
            align="center"
            eyebrow="More Modules"
            heading="Built For Operators & Compliance Teams"
          />
        </Reveal>

        <Reveal className={styles.operatorBody} delay={0.05}>
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

          <div className={styles.operatorResponsiveGrid}>
            {operatorResponsiveCards.map((card) => (
              <RCard className={styles.operatorResponsiveCard} key={card.title}>
                <span className={styles.operatorResponsiveIcon}>
                  <OperatorCardIcon icon={card.icon} />
                </span>
                <div className={styles.operatorResponsiveCopy}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </RCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RAppMarketsSection() {
  return (
    <section
      className={clsx(styles.section, styles.appSection)}
      id="capital-markets"
    >
      <div className={styles.sectionShell}>
        <Reveal className={styles.appHeader}>
          <p className={styles.darkEyebrow}>Equiteez App</p>
          <h2 className={styles.darkSectionTitle}>
            <span>Capital Markets</span>
            <span>That Never Close</span>
          </h2>
          <p className={styles.darkDescription}>
            Buy, trade, borrow, and earn on tokenized real-world assets.
            Non-custodial, 24/7, no intermediaries.
          </p>
        </Reveal>

        <Reveal className={styles.marketGrid} delay={0.05}>
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
        </Reveal>
      </div>
    </section>
  );
}

function RTradingVenueSection() {
  return (
    <section className={styles.section} id="secondary-market">
      <div className={styles.sectionShell}>
        <div className={styles.tradingLayout}>
          <Reveal className={styles.tradingCopy}>
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
          </Reveal>

          <Reveal
            className={styles.tradingMockCard}
            delay={0.05}
            preset="image"
          >
            <RCard
              className={styles.browserMockFrame}
              shadow="soft"
              shape="mock"
            >
              <img
                alt="Equiteez embedded trading venue"
                className={styles.mockImage}
                decoding="async"
                src={tradingVenueImage}
              />
            </RCard>
          </Reveal>

          <Reveal className={styles.tradingFeaturePanel} delay={0.06}>
            <div className={styles.tradingFeatureList}>
              {tradingFeatures.map((feature) => (
                <div className={styles.tradingFeature} key={feature.title}>
                  <span className={styles.tradingIconBox}>
                    <RIcon aria-hidden name="check" size="medium" />
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RAdvancedTradeSection() {
  return (
    <section
      className={clsx(styles.section, styles.advancedSection)}
      id="advanced-trade"
    >
      <div className={styles.sectionShell}>
        <Reveal className={styles.advancedHeader}>
          <RSectionHeader
            align="center"
            description="A full trading workspace, candlestick charts, depth-of-book, limit / market / OTC orders, and live order history. Built for serious operators and institutional desks."
            eyebrow="Advanced Trade"
            heading="Advanced RWA Execution Workspace"
          />
        </Reveal>
        <Reveal className={styles.advancedMockCard} delay={0.05} preset="image">
          <RCard
            className={styles.browserMockFrame}
            shadow="strong"
            shape="mock"
          >
            <img
              alt="Advanced RWA execution workspace"
              className={styles.mockImage}
              decoding="async"
              src={advancedTradeImage}
            />
          </RCard>
        </Reveal>
      </div>
    </section>
  );
}

function RSolutionsCtaSection() {
  return (
    <RMarketingCtaSection
      className={styles.ctaSection}
      description="Whether you're tokenizing assets or investing in them, Equiteez gives you the full institutional stack on day one."
      heading={["Built For The Future Of", "Capital Markets"]}
      id="contact"
      primaryAction={{
        href: "mailto:hello@equiteez.com",
        label: "Get In Touch",
      }}
      secondaryAction={{
        iconRight: null,
        label: "Launch App",
        to: "/marketplace",
        variant: "secondary",
      }}
    />
  );
}

export function RSolutionsPage() {
  return (
    <div className={styles.page}>
      <RHeader navItems={solutionsNavItems} variant="solutions" />
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
