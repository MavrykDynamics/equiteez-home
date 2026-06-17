import clsx from "clsx";
import type { ComponentType, SVGProps } from "react";

import {
  EQUITEEZ_CONTACT_PATH,
  EXTERNAL_LINK_REL,
  NEW_TAB_TARGET,
} from "~/consts/links";
import { Container } from "~/lib/atoms/Container";
import { RCard } from "~/lib/atoms/RCard";
import { Reveal } from "~/lib/atoms/Reveal";
import { RSectionHeader } from "~/lib/molecules/RSectionHeader";
import { RFeatureCard } from "~/lib/organisms/RFeatureCard";
import { RFooter } from "~/layouts/RFooter";
import { RHeader, type RHeaderNavItem } from "~/layouts/RHeader";
import { RMarketingCtaSection } from "~/templates/RMarketingCtaSection";

import EarthIcon from "app/icons/earth.svg?react";
import LockIcon from "app/icons/lock.svg?react";
import RadioCircleIcon from "app/icons/radio-circle.svg?react";
import RoundedArrowsIcon from "app/icons/rounded-arrows.svg?react";
import TrendingUpIcon from "app/icons/trending-up-arrow.svg?react";
import UnlockIcon from "app/icons/unlock.svg?react";
import assetRealEstateImage from "app/assets/redesign/about/images/asset-real-estate.png";
import assetFixedIncomeImage from "app/assets/redesign/about/images/asset-fixed-income.jpg";
import assetAlternativesImage from "app/assets/redesign/about/images/asset-alternatives.jpg";
import assetSpecializedYieldImage from "app/assets/redesign/about/images/asset-specialized-yield.jpg";
import wealthArchitectureImage from "app/assets/redesign/about/images/wealth-architecture-bg.jpg";

import styles from "./RAboutPage.module.css";

type FeatureCard = {
  description: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
};

type AssetCard = {
  className?: string;
  description: string;
  image: string;
  title: string;
};

type StatementCard = {
  label: string;
  statement: string;
  tone: "black" | "green";
};

const aboutNavItems: RHeaderNavItem[] = [
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  {
    href: EQUITEEZ_CONTACT_PATH,
    label: "Contact",
    rel: EXTERNAL_LINK_REL,
    target: NEW_TAB_TARGET,
  },
];

const ABOUT_FEATURE_ICON_COLOR = "var(--r-color-accent-green-500)";

const frameworkCards: FeatureCard[] = [
  {
    description:
      "We eliminate traditional entry barriers, providing fractional exposure to exclusive asset classes including Real Estate, Corporate Debt, and Insurance-Linked Securities, with no minimum capital requirements.",
    Icon: EarthIcon,
    title: "Institutional Access For All",
  },
  {
    description:
      "Unlike traditional private markets, our platform enables secondary market trading, allowing investors to exit positions with greater flexibility than physical asset ownership typically allows.",
    Icon: RoundedArrowsIcon,
    title: "Enhanced Liquidity",
  },
  {
    description:
      "Operating on a decentralized, non-custodial model, Equiteez ensures users retain full sovereignty over their assets. This reduces counterparty risk, eliminates institutional mismanagement vulnerabilities, and lowers fee structures by removing third-party intermediaries.",
    Icon: LockIcon,
    title: "Non-Custodial Architecture",
  },
];

const assetCards: AssetCard[] = [
  {
    description:
      "Residential, Commercial, and Industrial properties worldwide.",
    image: assetRealEstateImage,
    title: "Real Estate",
  },
  {
    className: styles.assetFixedIncome,
    description:
      "Tokenized Corporate Debt, Treasuries, Green Energy, and Infrastructure bonds.",
    image: assetFixedIncomeImage,
    title: "Fixed Income & Bonds",
  },
  {
    className: styles.assetAlternatives,
    description:
      "Fractional ownership in Bitcoin mining (physically backed) and Fine Art.",
    image: assetAlternativesImage,
    title: "Alternative Assets",
  },
  {
    className: styles.assetSpecializedYield,
    description:
      "Insurance-Linked Securities (ILS) offering non-correlated market returns.",
    image: assetSpecializedYieldImage,
    title: "Specialized Yield",
  },
];

const advantageCards: FeatureCard[] = [
  {
    description:
      "Dividends and interest payments are distributed programmatically and directly to investor wallets in real-time.",
    Icon: TrendingUpIcon,
    title: "Passive Income & Distribution",
  },
  {
    description:
      "Full on-chain reporting provides real-time auditing of asset performance, occupancy rates, and mining efficiency.",
    Icon: RadioCircleIcon,
    title: "Operational Transparency",
  },
  {
    description:
      "Seamlessly manage cross-border investments across multiple jurisdictions and asset types through a single, compliant interface.",
    Icon: EarthIcon,
    title: "Global Diversification",
  },
  {
    description:
      "We prioritize capital mobility, allowing investors to manage their portfolios according to shifting financial goals without arbitrary holding periods.",
    Icon: UnlockIcon,
    title: "Zero Lock-ins",
  },
];

const statementCards: StatementCard[] = [
  {
    label: "OUR VISION",
    statement:
      "To be the definitive global standard for institutional infrastructure, unlocking trade, and scaling the world's most valuable illiquid assets.",
    tone: "black",
  },
  {
    label: "OUR MISSION",
    statement:
      "To provide the definitive infrastructure for the tokenization of global finance.",
    tone: "green",
  },
];

function RAboutHeroSection() {
  return (
    <section className={clsx(styles.section, styles.heroSection)} id="about">
      <div className={styles.sectionShell}>
        <Reveal className={styles.heroHeader}>
          <p className={styles.eyebrow}>About Equiteez</p>
          <div className={styles.heroCopyGrid}>
            <h1 className={styles.heroTitle}>
              The <span>Institutional</span> Standard for Asset Tokenization
            </h1>
            <div className={styles.heroDescription}>
              <p>
                Equiteez is a digital marketplace and infrastructure for
                investing in tokenized Real-World Assets (RWA).
              </p>
              <p>
                We bridge the gap between institutional-grade opportunities and
                global investors by fractionalizing high-value,
                income-generating assets into compliant digital assets.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RFrameworkSection() {
  return (
    <section className={styles.section} id="framework">
      <div className={styles.sectionShell}>
        <Reveal className={styles.centerHeader}>
          <RSectionHeader
            align="center"
            eyebrow="Our Framework"
            heading={["Three Pillars Of Our", "Investment Framework."]}
          />
        </Reveal>
        <Reveal className={styles.frameworkGrid} delay={0.05}>
          {frameworkCards.map((card) => {
            const Icon = card.Icon;

            return (
              <RFeatureCard
                className={styles.frameworkCard}
                description={card.description}
                icon={<Icon aria-hidden focusable="false" />}
                iconColor={ABOUT_FEATURE_ICON_COLOR}
                key={card.title}
                title={card.title}
              />
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function RAssetCard({
  asset,
  isLarge = false,
}: {
  asset: AssetCard;
  isLarge?: boolean;
}) {
  return (
    <article
      className={clsx(
        styles.assetCard,
        isLarge && styles.assetCardLarge,
        asset.className
      )}
    >
      <img
        alt=""
        aria-hidden
        className={styles.assetCardImage}
        decoding="async"
        src={asset.image}
      />
      <div className={styles.assetCardOverlay} />
      <div className={styles.assetCardCopy}>
        <h3>{asset.title}</h3>
        <p>{asset.description}</p>
      </div>
    </article>
  );
}

function RAssetEcosystemSection() {
  const [featuredAsset, ...supportingAssets] = assetCards;

  return (
    <section className={styles.section} id="asset-ecosystem">
      <div className={styles.sectionShell}>
        <Reveal className={styles.assetHeader}>
          <RSectionHeader
            description="We provide a single point of entry for a global, diversified portfolio."
            eyebrow="Asset Ecosystem"
            heading="A Diverse Asset Ecosystem"
          />
        </Reveal>
        <Reveal className={styles.assetGrid} delay={0.05} preset="image">
          <RAssetCard asset={featuredAsset} isLarge />
          <div className={styles.assetCardRow}>
            {supportingAssets.map((asset) => (
              <RAssetCard asset={asset} key={asset.title} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RInstitutionalPerformanceSection() {
  return (
    <section className={styles.section} id="advantages">
      <div className={styles.sectionShell}>
        <Reveal className={styles.advantagesHeader}>
          <RSectionHeader
            eyebrow="Key Advantages"
            heading={["Built For Institutional", "Performance."]}
          />
        </Reveal>
        <Reveal className={styles.advantagesGrid} delay={0.05}>
          {advantageCards.map((card) => {
            const Icon = card.Icon;

            return (
              <RFeatureCard
                className={styles.advantageCard}
                description={card.description}
                icon={<Icon aria-hidden focusable="false" />}
                iconColor={ABOUT_FEATURE_ICON_COLOR}
                key={card.title}
                title={card.title}
              />
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function RWealthArchitectureSection() {
  return (
    <section className={styles.wealthSection}>
      <img
        alt=""
        aria-hidden
        className={styles.wealthImage}
        decoding="async"
        src={wealthArchitectureImage}
      />
      <Reveal className={styles.wealthContent}>
        <p className={styles.darkEyebrow}>Redefining Wealth Architecture</p>
        <h2>
          Transforming exclusive, illiquid markets into a transparent, 24/7
          global ecosystem.
        </h2>
      </Reveal>
    </section>
  );
}

function RVisionMissionSection() {
  return (
    <section className={styles.section} id="vision">
      <div className={styles.sectionShell}>
        <Reveal className={styles.centerHeader}>
          <RSectionHeader
            align="center"
            eyebrow="Our Framework"
            heading={["Three Pillars Of Our", "Investment Framework."]}
          />
        </Reveal>
        <Reveal className={styles.statementGrid} delay={0.05}>
          {statementCards.map((card) => (
            <RCard
              className={clsx(
                styles.statementCard,
                card.tone === "black"
                  ? styles.statementCardBlack
                  : styles.statementCardGreen
              )}
              key={card.label}
              tone={card.tone === "green" ? "green" : "dark"}
            >
              <p className={styles.statementLabel}>{card.label}</p>
              <p className={styles.statementText}>{card.statement}</p>
            </RCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function RAboutPage() {
  return (
    <div className={styles.page}>
      <RHeader navItems={aboutNavItems} variant="solutions" />
      <main>
        <Container className={styles.pageFrame} maxWidth={1440}>
          <RAboutHeroSection />
          <RFrameworkSection />
          <RAssetEcosystemSection />
          <RInstitutionalPerformanceSection />
          <RWealthArchitectureSection />
          <RVisionMissionSection />
          <RMarketingCtaSection
            className={styles.aboutCtaSection}
            description="Investors, issuers, and partners building the next era of capital markets."
            heading="Build With Us."
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
        </Container>
      </main>
      <RFooter />
    </div>
  );
}
