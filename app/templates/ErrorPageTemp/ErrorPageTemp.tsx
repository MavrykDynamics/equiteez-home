import { ERROR_TYPE_FATAL, ERROR_TYPE_ROUTER } from "~/errors/error.const";
import { InternalErrorType } from "~/errors/error.type";
import { FooterSecondary } from "~/layouts/PageLayout/Footer/FooterSecondary";
import { Header } from "~/layouts/PageLayout/Header/Header";
import { Button } from "~/lib/atoms/Button";
import {
  errorDescDefaultText,
  errorHeaderDefaultText,
} from "~/providers/ToasterProvider/toaster.provider.const";

import Error404Img from "app/assets/error/404.png";
import ErrorBgMobile from "app/assets/error/bg-mobile.webp";

import styles from "./errorPageTemp.module.css";
import { Socials } from "~/a11y/Socials/Socials";
import clsx from "clsx";

type ErrorPageProps = {
  headerText?: string;
  descText?: string | JSX.Element;
  type?: InternalErrorType;
};

export const ErrorPageTemp = ({
  headerText = errorHeaderDefaultText,
  descText = errorDescDefaultText,
  type = ERROR_TYPE_FATAL,
}: ErrorPageProps) => {
  return (
    <section
      className={clsx(
        "h-screen overflow-hidden font-aeonik text-mvrk-main gap-3 flex items-center justify-between flex-col w-screen bg-sand-50",
        styles.errorTempContainer
      )}
    >
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.contentWrapper}>
        <img className={styles.foourOfour} src={Error404Img} alt="404" />
        <div className="flex flex-col gap-4 items-center text-sand-900 px-8">
          <h3 className={styles.errorHeader}>
            {headerText || "Unknown error"}
          </h3>
          <p className={styles.errorDesc}>{descText}</p>
        </div>
        {type === ERROR_TYPE_ROUTER && (
          <a href="/" className="mvrk-btn mx-auto block w-fit mt-6">
            <Button> Go To Main Page</Button>
          </a>
        )}

        <div className={styles.socials}>
          <Socials />
        </div>
      </div>

      <div className={styles.footerWrapper}>
        <FooterSecondary />
      </div>

      <div className={styles.errorBgMobile}>
        <img src={ErrorBgMobile} alt="error town" />
      </div>
    </section>
  );
};
