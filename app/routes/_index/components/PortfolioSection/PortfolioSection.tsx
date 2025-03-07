import Card1Icon from "app/assets/home/icons/house-check.svg?react";
import Card2Icon from "app/assets/home/icons/circle-rect.svg?react";
import Card3Icon from "app/assets/home/icons/circle-house.svg?react";
import Card4Icon from "app/assets/home/icons/send-triangle.svg?react";
import { CardWithShadow } from "~/lib/atoms/CardWithShadow";
import clsx from "clsx";
import { PaddingContainer } from "~/lib/atoms/Container";
import greenGradientBg from "app/assets/home/green-gradient-bg.png";
import orangeGradientBg from "app/assets/home/orange-gradient-bg.png";

import { motion } from "framer-motion";

import styles from "./portfolio.module.css";
import { slideFromLeftVariant } from "~/framer/variants";

const CARDS = [
  {
    id: 1,
    Icon: Card1Icon,
    title: "No downpayment required",
    description:
      "Buy fractional shares of yield bearing investments starting at just $50. Each token represents fractional ownership of the asset. The more you own, the more you earn.",
  },
  {
    id: 2,
    Icon: Card2Icon,
    title: (
      <>
        Earn rent today, <br />
        appreciation tomorow
      </>
    ),
    description:
      "Get monthly dividends paid directly to your account! Watch your assets grow in value over time, and sell to collect on the principle appreciation whenever you think best.",
  },
  {
    id: 3,
    Icon: Card3Icon,
    title: (
      <>
        Own multiple properties
        <br />
        without managment issues
      </>
    ),
    description:
      "Diversify your investments without expanding your workload. Just build your own portfolio, and let the professional managers handle the rest.",
  },
  {
    id: 4,
    Icon: Card4Icon,
    title: (
      <>
        Have full control of <br />
        your investments
      </>
    ),
    description:
      "Zero lock-in periods and full transparency reports. Reinvest your dividend income, sell whenever you like, or get a loan in minutes to leverage your portfolio.",
  },
];

const fadeInCardsVariants = {
  initial: {
    opacity: 0,
    y: 70,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
    },
  }),
};

export const PortfolioSection = () => {
  return (
    <PaddingContainer>
      <section className={clsx(styles.portfolioWrapper, "relative")}>
        <motion.div
          initial="initial"
          variants={slideFromLeftVariant}
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.portfolioTextContent}
        >
          <h2 className="text-content text-section-headline">
            Jumpstart your portfolio. Invest like the pros
          </h2>
          <p className="text-content-secondary text-body">
            Get instant access to amazing income producing deals and join a
            community of wealth builders from around the world.
          </p>
        </motion.div>

        <div className={styles.cardsWrapper}>
          {CARDS.map(({ Icon, id, title, description }, idx) => (
            <motion.div
              key={id}
              initial="initial"
              variants={fadeInCardsVariants}
              whileInView="animate"
              custom={idx}
              viewport={{ once: true }}
            >
              <div className={clsx((idx + 1) % 2 === 0 && styles.pt6)}>
                <CardWithShadow className={styles.cardHeight}>
                  <div className="flex flex-col items-start">
                    <Icon className="mb-6" />
                    <h3 className="text-card-headline text-content mb-3">
                      {title}
                    </h3>
                    <p className="text-content text-body">{description}</p>
                  </div>
                </CardWithShadow>
              </div>
            </motion.div>
          ))}
        </div>
        <img
          alt="gradient"
          src={greenGradientBg}
          className="absolute sm:left-[-800px] sm:max-w-[2000px] sm:top-[-1400px] z-[-1] max-w-[1000px] left-[-500px] top-[-1600px]"
        />
        <img
          alt="gradient"
          src={orangeGradientBg}
          className="absolute sm:right-[-700px] sm:bottom-[-1000px] sm:max-w-[2000px] sm:top-[auto] max-w-[1000px] bottom-[auto] top-[200px] right-[-600px] z-[-1]"
        />
        <img
          alt="gradient"
          src={greenGradientBg}
          className="sm:hidden block absolute max-w-[1000px] left-[-600px] bottom-[-600px] z-[-1]"
        />
      </section>
    </PaddingContainer>
  );
};
