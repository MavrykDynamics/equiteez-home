import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import { useEstatesContext } from "~/providers/EstatesProvider/estates.provider";
import { PaddingContainer } from "~/lib/atoms/Container";

import styles from "./propertiesSlider.module.css";
import { motion } from "framer-motion";

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
  const { estatesArr } = useEstatesContext();

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
            Explore our diverse portfolio of exceptional properties
          </h1>
          <EmblaCarousel slides={estatesArr.slice(0, 7)} options={OPTIONS} />
        </div>
      </motion.div>
    </PaddingContainer>
  );
};
