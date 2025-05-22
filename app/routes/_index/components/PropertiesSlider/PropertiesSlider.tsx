import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import { PaddingContainer } from "~/lib/atoms/Container";

import styles from "./propertiesSlider.module.css";
import { motion } from "framer-motion";
import { useMarketsContext } from "~/providers/MarketsProvider/markets.provider";
import { ApiErrorBox } from "~/lib/organisms/ApiErrorBox/ApiErrorBox";

const OPTIONS: EmblaOptionsType = { align: "start" };

const sliderAnimationVariants = {
  initial: {
    opacity: 0.1,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const PropertiesSlider = () => {
  const { marketsArr, marketApiError } = useMarketsContext();

  return (
    <PaddingContainer>
      {marketApiError ? (
        <div>
          {" "}
          <ApiErrorBox message={<AssetsApiErrorContent />} />
        </div>
      ) : (
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={sliderAnimationVariants}
          viewport={{ once: true }}
        >
          <div className={styles.propertiesSliderWrapper}>
            <h1 className={styles.properiesSliderHeader}>
              Explore our diverse portfolio of exceptional assets
            </h1>
            <EmblaCarousel slides={marketsArr} options={OPTIONS} />
          </div>
        </motion.div>
      )}
    </PaddingContainer>
  );
};

const AssetsApiErrorContent = () => {
  return (
    <div>
      We&apos;re unable to load market data at the moment. You can try
      navigating to the&nbsp;
      <a
        href={process.env.EXPLORE_APP_URL ?? ""}
        target="_blank"
        rel="noreferrer"
        className="text-sand-900 hover:text-sand-800 underline"
      >
        Equiteez App
      </a>
      &nbsp;to load your assets.
    </div>
  );
};
