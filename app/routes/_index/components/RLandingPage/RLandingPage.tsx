import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

import { useVisibleSlideshow } from "~/hooks/useVisibleSlideshow";
import { RButton } from "~/lib/atoms/RButton";
import { RIcon } from "~/lib/atoms/RIcon";
import { Reveal } from "~/lib/atoms/Reveal";
import { RSectionHeader } from "~/lib/molecules/RSectionHeader";
import { RFooter } from "~/layouts/RFooter";
import { RHeader } from "~/layouts/RHeader";

import heroDubaiDesktopImage from "app/assets/redesign/landing/banner/desktop/hero-dubai.webp";
import heroDubaiMobileImage from "app/assets/redesign/landing/banner/mobile/hero-dubai.webp";
import heroDubaiTabletImage from "app/assets/redesign/landing/banner/tablet/hero-dubai.webp";
import heroHongkongDesktopImage from "app/assets/redesign/landing/banner/desktop/hero-hongkong.webp";
import heroHongkongMobileImage from "app/assets/redesign/landing/banner/mobile/hero-hongkong.webp";
import heroHongkongTabletImage from "app/assets/redesign/landing/banner/tablet/hero-hongkong.webp";
import heroLondonDesktopImage from "app/assets/redesign/landing/banner/desktop/hero-london.webp";
import heroLondonMobileImage from "app/assets/redesign/landing/banner/mobile/hero-london.webp";
import heroLondonTabletImage from "app/assets/redesign/landing/banner/tablet/hero-london.webp";
import heroNewyorkDesktopImage from "app/assets/redesign/landing/banner/desktop/hero-newyork.webp";
import heroNewyorkMobileImage from "app/assets/redesign/landing/banner/mobile/hero-newyork.webp";
import heroNewyorkTabletImage from "app/assets/redesign/landing/banner/tablet/hero-newyork.webp";
import heroShanghaiDesktopImage from "app/assets/redesign/landing/banner/desktop/hero-shanghai.webp";
import heroShanghaiMobileImage from "app/assets/redesign/landing/banner/mobile/hero-shanghai.webp";
import heroShanghaiTabletImage from "app/assets/redesign/landing/banner/tablet/hero-shanghai.webp";
import heroTokyoDesktopImage from "app/assets/redesign/landing/banner/desktop/hero-tokyo.webp";
import heroTokyoMobileImage from "app/assets/redesign/landing/banner/mobile/hero-tokyo.webp";
import heroTokyoTabletImage from "app/assets/redesign/landing/banner/tablet/hero-tokyo.webp";
import partnerAtlasLogo from "app/assets/redesign/landing/partners/atlas.svg";
import partnerBigBrainLogo from "app/assets/redesign/landing/partners/big-brain.svg";
import partnerBlockchainAlphaLogo from "app/assets/redesign/landing/partners/blockchain-alpha.svg";
import partnerClusterLogo from "app/assets/redesign/landing/partners/cluster.svg";
import partnerCollectiveLogo from "app/assets/redesign/landing/partners/collective.svg";
import partnerDraperGorenLogo from "app/assets/redesign/landing/partners/draper-goren.svg";
import partnerMultibankLogo from "app/assets/redesign/landing/partners/multibank.svg";
import enterpriseIssuanceImage from "app/assets/redesign/landing/enterprise-issuance.webp";
import enterpriseTradingImage from "app/assets/redesign/landing/enterprise-trading.webp";
import enterpriseLendingImage from "app/assets/redesign/landing/enterprise-lending.webp";
import enterpriseSettlementImage from "app/assets/redesign/landing/enterprise-settlement.webp";
import avatarLarryFink from "app/assets/redesign/landing/avatar-larry-fink.png";
import avatarJennyJohnson from "app/assets/redesign/landing/avatar-jenny-johnson.png";
import avatarMichaelSaylor from "app/assets/redesign/landing/avatar-michael-saylor.png";

import styles from "./RLandingPage.module.css";

type PartnerLogo = {
  alt: string;
  src: string;
  variant:
    | "atlas"
    | "bigBrain"
    | "blockchainAlpha"
    | "cluster"
    | "collective"
    | "draperGoren"
    | "multibank";
};

type Metric = {
  label: string;
  value: string;
};

type SolutionCard = {
  category: string;
  description: string;
  title: string;
};

type EnterpriseCard = {
  description: string;
  image: string;
  title: string;
};

type AssetClass = {
  description: string;
  total: string;
  totalNote?: string;
  title: string;
};

type ProblemCard = {
  description: string;
  number: string;
  title: string;
};

type Review = {
  avatar: string;
  name: string;
  quote: string;
  title: string;
};

type HeroSlide = {
  desktopSrc: string;
  label: string;
  mobileSrc: string;
  tabletSrc: string;
};

const HERO_SLIDE_INTERVAL_MS = 20_000;
const HERO_MOBILE_MEDIA = "(max-width: 820px)";
const HERO_TABLET_MEDIA = "(max-width: 1200px)";

type HeroImageVariant = "desktop" | "tablet" | "mobile";
type HeroSlidesStyle = CSSProperties & {
  "--hero-slide-duration": string;
};

const heroSlidesStyle: HeroSlidesStyle = {
  "--hero-slide-duration": `${HERO_SLIDE_INTERVAL_MS}ms`,
};

const heroSlides: HeroSlide[] = [
  {
    desktopSrc: heroDubaiDesktopImage,
    label: "Dubai",
    mobileSrc: heroDubaiMobileImage,
    tabletSrc: heroDubaiTabletImage,
  },
  {
    desktopSrc: heroHongkongDesktopImage,
    label: "Hong Kong",
    mobileSrc: heroHongkongMobileImage,
    tabletSrc: heroHongkongTabletImage,
  },
  {
    desktopSrc: heroLondonDesktopImage,
    label: "London",
    mobileSrc: heroLondonMobileImage,
    tabletSrc: heroLondonTabletImage,
  },
  {
    desktopSrc: heroShanghaiDesktopImage,
    label: "Shanghai",
    mobileSrc: heroShanghaiMobileImage,
    tabletSrc: heroShanghaiTabletImage,
  },
  {
    desktopSrc: heroTokyoDesktopImage,
    label: "Tokyo",
    mobileSrc: heroTokyoMobileImage,
    tabletSrc: heroTokyoTabletImage,
  },
  {
    desktopSrc: heroNewyorkDesktopImage,
    label: "New York",
    mobileSrc: heroNewyorkMobileImage,
    tabletSrc: heroNewyorkTabletImage,
  },
];

function getHeroSlideSources(variant: HeroImageVariant | null): string[] {
  if (variant === null) {
    return [];
  }

  return heroSlides.map((slide) => {
    switch (variant) {
      case "mobile":
        return slide.mobileSrc;
      case "tablet":
        return slide.tabletSrc;
      case "desktop":
        return slide.desktopSrc;
    }
  });
}

function useHeroImageVariant(): HeroImageVariant | null {
  const [variant, setVariant] = useState<HeroImageVariant | null>(null);

  useEffect(() => {
    if (!("matchMedia" in window)) {
      setVariant("desktop");
      return undefined;
    }

    const mobileMediaQuery = window.matchMedia(HERO_MOBILE_MEDIA);
    const tabletMediaQuery = window.matchMedia(HERO_TABLET_MEDIA);

    const handleMediaChange = () => {
      if (mobileMediaQuery.matches) {
        setVariant("mobile");
        return;
      }

      if (tabletMediaQuery.matches) {
        setVariant("tablet");
        return;
      }

      setVariant("desktop");
    };

    handleMediaChange();
    mobileMediaQuery.addEventListener("change", handleMediaChange);
    tabletMediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMediaChange);
      tabletMediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return variant;
}

const partnerLogos: PartnerLogo[] = [
  {
    alt: "MultiBank Group",
    src: partnerMultibankLogo,
    variant: "multibank",
  },
  {
    alt: "Collective Ventures",
    src: partnerCollectiveLogo,
    variant: "collective",
  },
  {
    alt: "Atlas Fund Management",
    src: partnerAtlasLogo,
    variant: "atlas",
  },
  {
    alt: "Big Brain Holdings",
    src: partnerBigBrainLogo,
    variant: "bigBrain",
  },
  {
    alt: "Blockchain Alpha",
    src: partnerBlockchainAlphaLogo,
    variant: "blockchainAlpha",
  },
  {
    alt: "Cluster Capital",
    src: partnerClusterLogo,
    variant: "cluster",
  },
  {
    alt: "Draper Goren Holm",
    src: partnerDraperGorenLogo,
    variant: "draperGoren",
  },
];

const metrics: Metric[] = [
  { label: "Real World Assets TAM By 2030, EY", value: "$28.7T+" },
  { label: "Equiteez Pipeline", value: "$14.9B" },
  { label: "Asset Classes Supported To Date", value: "6+" },
  { label: "Market Trading", value: "24/7" },
];

const solutionCards: SolutionCard[] = [
  {
    category: "Tokenization",
    description:
      "Tokenize real-world assets with full regulatory compliance and automated workflows.",
    title: "Primary Issuance",
  },
  {
    category: "Trading",
    description:
      "24/7 order book, AMM, and OTC trading with instant on-chain settlement.",
    title: "Secondary Markets",
  },
  {
    category: "DeFi",
    description:
      "Leveraging Maven Finance by Mavryk: Access automated loan servicing to borrow liquidity against tokenized assets.",
    title: "Collateralized Lending",
  },
  {
    category: "Yield",
    description:
      "Precision payouts on schedule, investors receive returns on-chain.",
    title: "Automated Dividends",
  },
  {
    category: "Security",
    description:
      "Our MPC wallet integration ensures users maintain absolute control over their assets without the operational burden of managing private keys.",
    title: "Non-Custodial Architecture",
  },
  {
    category: "Settlement",
    description: "Every trade is final, blockchain-settled, and transparent.",
    title: "Instant Onchain Settlement",
  },
];

const enterpriseCards: EnterpriseCard[] = [
  {
    description:
      "Tokenize real-world assets with full regulatory compliance and automated workflows.",
    image: enterpriseIssuanceImage,
    title: "Issuance",
  },
  {
    description:
      "24/7 order book, AMM, and OTC trading with instant on-chain settlement.",
    image: enterpriseTradingImage,
    title: "Trading",
  },
  {
    description:
      "Borrow against tokenized assets with automated loan servicing and interest distribution.",
    image: enterpriseLendingImage,
    title: "Lending",
  },
  {
    description:
      "Every trade is final, blockchain-settled, and transparent. No counterparty risk.",
    image: enterpriseSettlementImage,
    title: "Settlement",
  },
];

const assetClasses: AssetClass[] = [
  {
    description: "Options, futures, swaps, tokenized structured products",
    title: "Global Derivatives",
    total: "$700T – $1Qa",
  },
  {
    description: "Commercial, residential, industrial, hotels, land",
    title: "Real Estate",
    total: "~$350T – $400T",
  },
  {
    description: "Sovereign bonds, municipal, corporate debt, U.S. Treasuries",
    title: "Fixed Income / Bonds",
    total: "~$130T",
    totalNote: "(U.S. Treasuries: ~$31.6T)",
  },
  {
    description: "Public stock markets, global indexes",
    title: "Global Equities",
    total: "~$110T – $120T",
  },
  {
    description: "Cash, checking deposits, near-money savings",
    title: "Global M2 (Money Supply)",
    total: "~$100T+",
  },
  {
    description: "Carrier reserves, Insurance-Linked Securities (ILS)",
    title: "Insurance Portfolio Assets",
    total: "~$40T Pool",
    totalNote: "(ILS Market: ~$100B)",
  },
  {
    description: "Gold, precious metals, physical energy/agriculture",
    title: "Commodities",
    total: "~$20T+",
    totalNote: "(Gold Cap: ~$15T–$18T)",
  },
  {
    description: "Debt portfolios, SME loans, mid-market instruments",
    title: "Private Credit / Debt",
    total: "~$1.7T – $2.0T",
  },
  {
    description: "Bitcoin, core L1/L2 networks, crypto infrastructure",
    title: "Digital Assets",
    total: "~$2.5T – $3.0T",
  },
];

const problemCards: ProblemCard[] = [
  {
    description:
      "Trillions in TradFi, real estate, commodities, and private credit remain locked. No pathway to fractional access or digital liquidity.",
    number: "01",
    title: "Illiquid & Liquid",
  },
  {
    description:
      "Separate platforms for issuance, trading, custody, and compliance create silos with no unified institutional stack.",
    number: "02",
    title: "Fragmented Infrastructure",
  },
  {
    description:
      "Capital allocators need compliant, scalable rails to deploy into tokenized assets. Current solutions don't meet institutional standards.",
    number: "03",
    title: "Institutional Gap",
  },
];

const reviews: Review[] = [
  {
    avatar: avatarLarryFink,
    name: "Larry Fink",
    quote:
      "We believe the next step going forward will be the tokenization of financial assets. This is a technological transformation for financial assets.",
    title: "CEO, BlackRock",
  },
  {
    avatar: avatarJennyJohnson,
    name: "Jenny Johnson",
    quote:
      "Tokenization could be the next generation for markets. It will revolutionize ownership, by enabling fractional ownership and broader investor access.",
    title: "CEO, Franklin Templeton",
  },
  {
    avatar: avatarMichaelSaylor,
    name: "Michael Saylor",
    quote:
      "The tokenization of real-world assets is one of the most significant trends in blockchain technology, opening institutional-grade markets to global investors.",
    title: "Chairman, MicroStrategy",
  },
];

function RPartnerLogo({ logo }: { logo: PartnerLogo }) {
  return <img alt={logo.alt} className={styles[logo.variant]} src={logo.src} />;
}

function RPartnerLogoItems({ itemClassName }: { itemClassName: string }) {
  return (
    <>
      {partnerLogos.map((logo) => (
        <span className={itemClassName} key={logo.alt}>
          <RPartnerLogo logo={logo} />
        </span>
      ))}
    </>
  );
}

function RLandingHero() {
  const heroImageVariant = useHeroImageVariant();
  const heroSlideSources = useMemo(
    () => getHeroSlideSources(heroImageVariant),
    [heroImageVariant]
  );
  const { activeIndex, containerRef, isVisible, shouldReduceMotion } =
    useVisibleSlideshow<HTMLElement>({
      imageSources: heroSlideSources,
      intervalMs: HERO_SLIDE_INTERVAL_MS,
    });

  return (
    <section className={styles.hero} ref={containerRef}>
      <div
        aria-hidden
        className={styles.heroSlides}
        data-is-visible={isVisible ? "true" : "false"}
        data-reduced-motion={shouldReduceMotion ? "true" : "false"}
        style={heroSlidesStyle}
      >
        {heroSlides.map((slide, index) => (
          <picture
            className={clsx(
              styles.heroSlideImage,
              index === activeIndex && styles.heroSlideImageActive
            )}
            key={slide.label}
          >
            <source media={HERO_MOBILE_MEDIA} srcSet={slide.mobileSrc} />
            <source media={HERO_TABLET_MEDIA} srcSet={slide.tabletSrc} />
            <img
              alt=""
              aria-hidden
              className={styles.heroSlideImageAsset}
              decoding="async"
              draggable={false}
              loading={index === 0 ? "eager" : "lazy"}
              src={slide.desktopSrc}
            />
          </picture>
        ))}
      </div>
      <div className={styles.heroOverlay} />
      <Reveal className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span />
          Powering The Next Era Of Capital Markets
        </div>
        <h1 className={styles.heroTitle}>
          <span>Institutional Infrastructure</span>
          <span>For Tokenized Assets</span>
        </h1>
        <p className={styles.heroDescription}>
          Equiteez delivers end-to-end real-world asset tokenization, from
          issuance and secondary trading to DeFi lending, on the Mavryk Network.
        </p>
        <div className={styles.heroActions}>
          <RButton
            as="link"
            iconRight={<RIcon aria-hidden name="arrow-long-right" />}
            tone="white"
            to="/mondav"
          >
            Start Tokenizing
          </RButton>
          <RButton as="link" to="/marketplace" tone="white" variant="secondary">
            Explore App
          </RButton>
        </div>
      </Reveal>
    </section>
  );
}

function RPartnersSection() {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.sectionInner}>
        <Reveal className={styles.partnersIntro}>
          <p className={styles.eyebrow}>
            Backed By Leading Institutional Partners
          </p>
          <div className={styles.partnerLogoGrid}>
            <RPartnerLogoItems itemClassName={styles.partnerLogoGridItem} />
          </div>
        </Reveal>

        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <Reveal
              className={styles.metric}
              delay={index * 0.04}
              key={metric.label}
              preset="fade"
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RPlatformSection() {
  return (
    <section className={styles.platformSection} id="solutions">
      <div className={styles.sectionInner}>
        <Reveal>
          <RSectionHeader
            align="center"
            eyebrow="The Solution"
            heading={["End-To-End RWA Infrastructure,", "One Platform"]}
          />
        </Reveal>
        <div className={styles.solutionGrid}>
          {solutionCards.map((card, index) => (
            <Reveal
              as="article"
              className={styles.solutionCard}
              delay={index * 0.04}
              key={card.title}
            >
              <span className={styles.pill}>{card.category}</span>
              <div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <RIcon
                aria-hidden
                className={styles.solutionIcon}
                name="arrow-long-up-right"
                size="medium"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function REnterpriseSection() {
  return (
    <section className={styles.enterpriseSection} id="about">
      <div className={styles.enterpriseInner}>
        <div className={styles.enterpriseGrid}>
          {enterpriseCards.map((card, index) => (
            <Reveal
              as="article"
              className={styles.enterpriseCard}
              delay={index * 0.04}
              key={card.title}
              preset="image"
            >
              <img alt="" aria-hidden src={card.image} />
              <div className={styles.enterpriseCardOverlay} />
              <div className={styles.enterpriseCardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a className={styles.learnMoreLink} href="#contact">
                  Learn More
                  <RIcon aria-hidden name="arrow-long-right" size="small" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className={styles.enterpriseHeader}>
          <RSectionHeader
            description="We offer everything needed to launch, manage, and invest in onchain securities — all with the trust and transparency of a regulated platform."
            eyebrow="Infrastructure"
            heading={["Built For", "Enterprise"]}
          />
        </Reveal>
      </div>
    </section>
  );
}

function RAssetsSection() {
  return (
    <section className={styles.assetsSection}>
      <div className={styles.splitSectionInner}>
        <Reveal className={styles.assetsHeader}>
          <RSectionHeader
            description="Our platform supports tokenization across diverse verticals, enabling access to historically illiquid markets."
            eyebrow="Multi-Asset"
            heading="Every Asset Class, One Infrastructure"
          />
        </Reveal>
        <div className={styles.assetList}>
          {assetClasses.map((asset, index) => (
            <Reveal
              className={styles.assetRow}
              delay={index * 0.03}
              key={asset.title}
              preset="fade"
            >
              <div>
                <h3>{asset.title}</h3>
                <p>{asset.description}</p>
              </div>
              <strong className={styles.assetTotal}>
                <span>{asset.total}</span>
                {asset.totalNote ? <small>{asset.totalNote}</small> : null}
              </strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RQuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <Reveal className={styles.quoteInner}>
        <h2>Every asset. Every market. Always open.</h2>
        <blockquote>
          <p>
            {`"We don't just unlock liquidity from assets that never had it, we make every market accessible, onchain, around the clock."`}
          </p>
          <cite>~ Alex Davis, Founder & CEO, Mavryk</cite>
        </blockquote>
      </Reveal>
    </section>
  );
}

function RAnalogSystemsSection() {
  return (
    <section className={styles.analogSection}>
      <div className={styles.splitSectionInner}>
        <Reveal className={styles.problemHeader}>
          <RSectionHeader
            description="Institutional capital is rushing toward tokenized real-world assets, but the infrastructure to make it scalable, compliant, and interoperable simply doesn't exist yet."
            eyebrow="The Problem"
            heading={[
              "$280T+ In Real World",
              "Assets Trapped In",
              "Analog Systems",
            ]}
          />
        </Reveal>
        <div className={styles.problemList}>
          {problemCards.map((problem, index) => (
            <Reveal
              as="article"
              className={styles.problemCard}
              delay={index * 0.04}
              key={problem.number}
            >
              <strong>{problem.number}</strong>
              <div>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RReviewsSection() {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsInner}>
        <Reveal preset="fade">
          <p className={styles.reviewsEyebrow}>Industry Perspectives</p>
        </Reveal>
        <div className={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <Reveal
              as="article"
              className={styles.reviewCard}
              delay={index * 0.04}
              key={review.name}
            >
              <p className={styles.reviewQuote}>{`"${review.quote}"`}</p>
              <div className={styles.reviewDivider} />
              <div className={styles.reviewAuthor}>
                <img alt="" aria-hidden src={review.avatar} />
                <div>
                  <h3>{review.name}</h3>
                  <span>{review.title}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RGetInTouchSection() {
  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactInner}>
        <Reveal className={styles.contactHeader}>
          <RSectionHeader
            align="center"
            description="Join leading institutional asset owners leveraging Equiteez infrastructure to access global capital markets."
            heading={["Ready To Bring Your", "Assets Onchain?"]}
          />
        </Reveal>
        <Reveal className={styles.contactActions} delay={0.05}>
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
        </Reveal>
      </div>
    </section>
  );
}

export function RLandingPage() {
  return (
    <div className={styles.page}>
      <RHeader />
      <main>
        <RLandingHero />
        <RPartnersSection />
        <RPlatformSection />
        <REnterpriseSection />
        <RAssetsSection />
        <RQuoteSection />
        <RAnalogSystemsSection />
        <RReviewsSection />
        <RGetInTouchSection />
      </main>
      <RFooter />
    </div>
  );
}
