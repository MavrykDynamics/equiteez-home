import clsx from "clsx";

// icons
import PlayIcon from "app/icons/play-circle-rounded.svg?react";

import styles from "./bannerSection.module.css";
import { Button } from "~/lib/atoms/Button";
import { Link } from "@remix-run/react";

// images
import Img1 from "app/assets/home/banner/img-1.webp";
import Img2 from "app/assets/home/banner/img-2.webp";
import Img3 from "app/assets/home/banner/img-3.webp";
import Img4 from "app/assets/home/banner/img-4.webp";
import Img5 from "app/assets/home/banner/img-5.webp";
import Img6 from "app/assets/home/banner/img-6.webp";
import { ButtonWithIcon } from "~/lib/atoms/Button/Button";
import { PaddingContainer } from "~/lib/atoms/Container";
import { linker } from "~/a11y/linker";

const assets = [Img1, Img2, Img3, Img4, Img5, Img6];

export const BannerSection = () => {
  return (
    <PaddingContainer>
      <section
        className={clsx("pt-[100px]", styles.bannerContainer, "relative")}
      >
        <div className="flex flex-col items-start self-center">
          <h1 className={styles.bannerTextContent}>
            Build your portfolio with every asset on the block
          </h1>
          <p className="text-content-secondary text-body mb-8">
            The future of asset ownership is digital. Start with just $50 to
            invest in fractionalized, fully compliant, income producing assets
            worldwide.
          </p>
          <div className={styles.bannerBtnsWrapper}>
            <Link to={linker("/marketplace")} target="_blank" rel="noreferrer">
              <Button className={styles.bannerBtnPadding}>View Assets</Button>
            </Link>

            <ButtonWithIcon
              variant="outline"
              position="left"
              size="outline"
              disabled
              className={styles.bannerBtnPadding}
              icon={
                <PlayIcon className="w-6 h-6 min-w-6 stroke-none fill-current" />
              }
            >
              How It Works
            </ButtonWithIcon>
          </div>
        </div>
        <div className={styles.bannerImageWrapper}>
          {assets.map((imgSrc, idx) => (
            <div key={idx} className={styles[`img-${idx + 1}`]}>
              <div className="w-full h-full overflow-hidden rounded-lg">
                <img src={imgSrc} alt={`img-${idx + 1}`} />
              </div>
            </div>
          ))}
        </div>
        <img
          alt="gradient"
          src="app/assets/home/green-gradient-bg.png"
          className="absolute left-[-800px] top-[-300px] z-[-1]"
        />
        <img
          alt="gradient"
          src="app/assets/home/orange-gradient-bg.png"
          className="absolute right-[-800px] top-[0] z-[-1]"
        />
      </section>
    </PaddingContainer>
  );
};
