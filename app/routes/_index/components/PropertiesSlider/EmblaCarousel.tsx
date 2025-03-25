import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
} from "app/templates/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

// icons
import ArrowRight from "app/icons/arrow-right.svg?react";

import styles from "./embla.module.css";
import clsx from "clsx";
import { Button } from "~/lib/atoms/Button";
import { Link } from "@remix-run/react";
import {
  PrimaryEstate,
  SecondaryEstate,
} from "~/providers/MarketsProvider/market.types";
import { usePrevNextButtons } from "~/lib/ui/use-embla-buttons";
import { ThumbCardSecondary } from "~/templates/ThumbCard/ThumbCard";
import { useDexContext } from "~/providers/Dexprovider/dex.provider";
import { useWindowDimensions } from "~/hooks/useWindowDimensions";
import { linker, openInNewTab } from "~/a11y/linker";
import { MOBILE_WIDTH } from "~/styles/media";
import { SECONDARY_MARKET } from "~/providers/MarketsProvider/market.const";
import { atomsToTokens } from "~/lib/utils/formaters";

const SLIDER_VIEW_LIMIT = 3;

type PropType = {
  slides: (PrimaryEstate | SecondaryEstate)[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { dodoMav } = useDexContext();
  const { width } = useWindowDimensions();

  const isMobile = width <= MOBILE_WIDTH;
  const showBtns = isMobile
    ? slides.length > 1
    : slides.length > SLIDER_VIEW_LIMIT;

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleSlideClick = (id: string, isLastSlide: boolean) => {
    if (isLastSlide) return;
    openInNewTab(linker(`/marketplace/${id}`));
  };

  return (
    <section className={styles.embla}>
      <div className={"w-full flex justify-between items-center mb-11"}>
        <Link to={linker("/marketplace")} target="_blank" rel="noreferrer">
          <Button
            variant="custom"
            className="text-white bg-transparent border-2 border-white py-[8px]"
          >
            <div className="flex items-center gap-2">
              View All
              <ArrowRight className="w-6 h-6 stroke-current" />
            </div>
          </Button>
        </Link>
        {showBtns && (
          <div className="flex items-center gap-x-3">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        )}
      </div>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((estate, idx) => {
            const isSecondaryMarket =
              estate.assetDetails.type === SECONDARY_MARKET;

            const pricePerToken = atomsToTokens(
              dodoMav[estate.slug],
              estate.decimals
            );
            return (
              <div
                role="presentation"
                className={clsx(styles.embla__slide, "cursor-pointer")}
                key={estate.token_address}
                onClick={() =>
                  handleSlideClick(
                    estate.assetDetails.blockchain[0].identifier,
                    idx === slides.length - 1 &&
                      slides.length > SLIDER_VIEW_LIMIT
                  )
                }
              >
                {nextBtnDisabled &&
                idx === slides.length - 1 &&
                slides.length > SLIDER_VIEW_LIMIT ? (
                  <div className={styles.embla__slide__number}>
                    <img
                      src={estate.assetDetails.previewImage}
                      alt="house"
                      className={styles.embla__slide__image}
                    />
                    <div
                      className={clsx(
                        styles.lastSlide,
                        "flex items-center justify-center"
                      )}
                    >
                      <div className="flex flex-col items-center gap-y-6">
                        <h4 className="text-white text-card-headline text-center">
                          Want to see more? <br />
                          Check out our marketplace
                        </h4>
                        <Link to={linker("/marketplace")}>
                          <Button variant="white">Explore</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <ThumbCardSecondary
                    height={isMobile ? "195px" : "281px"}
                    imgSrc={estate.assetDetails.previewImage}
                    title={estate.name}
                    description={
                      estate.assetDetails.propertyDetails.propertyType
                    }
                    isSecondaryMarket={isSecondaryMarket}
                    APY={estate.assetDetails.APY}
                    pricePerToken={pricePerToken}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
