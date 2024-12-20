import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import { useEstatesContext } from "~/providers/EstatesProvider/estates.provider";
import { PaddingContainer } from "~/lib/atoms/Container";

import styles from "./propertiesSlider.module.css";

const OPTIONS: EmblaOptionsType = { align: "start" };

export const PropertiesSlider = () => {
  const { estatesArr } = useEstatesContext();

  return (
    <PaddingContainer>
      <div className={styles.propertiesSliderWrapper}>
        <h1 className={styles.properiesSliderHeader}>
          Explore our diverse portfolio of exceptional properties
        </h1>
        <EmblaCarousel slides={estatesArr.slice(0, 7)} options={OPTIONS} />
      </div>
    </PaddingContainer>
  );
};
