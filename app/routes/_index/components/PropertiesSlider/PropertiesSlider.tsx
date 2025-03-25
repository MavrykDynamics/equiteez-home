import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import { PaddingContainer } from "~/lib/atoms/Container";

import styles from "./propertiesSlider.module.css";
import { motion } from "framer-motion";
import { useMarketsContext } from "~/providers/MarketsProvider/markets.provider";

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
  const { marketsArr } = useMarketsContext();

  return (
    <PaddingContainer>
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
    </PaddingContainer>
  );
};
