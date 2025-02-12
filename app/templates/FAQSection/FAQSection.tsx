import { FC, useEffect, useRef, useState } from "react";
import styles from "./faqSection.module.css";
import clsx from "clsx";

import ArrowDown from "app/icons/chevron-down.svg?react";
import { useAppContext } from "~/providers/AppProvider/AppProvider";
import { PaddingContainer } from "~/lib/atoms/Container";
import greenGradientBg from "app/assets/home/green-gradient-bg.png";
import orangeGradientBg from "app/assets/home/orange-gradient-bg.png";

export type FaqType = {
  data: { title: string; description: string | JSX.Element }[];
};

export const FAQSection: FC<FaqType> = ({ data }) => {
  const [activeArticleIdx, setActiveArticleIdx] = useState(-1);
  const [isScrollAllowed, setIsScrollAllowed] = useState(false);
  const { IS_WEB } = useAppContext();

  const handleHeaderClick = (idx: number) => {
    const idxToSet = idx === activeArticleIdx ? -1 : idx;
    setActiveArticleIdx(idxToSet);

    if (IS_WEB) {
      const newUrl = window.location.href
        .split("#")
        .shift()
        ?.concat(`#faq-${idx}`);
      window.history.pushState({}, "", newUrl);
    }

    if (!isScrollAllowed) setIsScrollAllowed(true);
  };

  useEffect(() => {
    return () => {
      setIsScrollAllowed(false);
    };
  }, []);

  // scroll to chosen article in init
  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) return;

    const n = hash.split("#faq-").pop();

    const element = document.querySelector(`[data-active-article="faq-${n}"]`);

    if (!element) return;

    element.scrollIntoView({
      block: "start",
      behavior: "instant",
    });
  }, []);

  return (
    <PaddingContainer>
      <section className={clsx(styles.faqWrapper, "relative")}>
        <div className="max-w-[506px] w-full">
          <h2 className="text-content text-section-headline">
            Answers to our most frequently asked questions
          </h2>
        </div>
        <div className="flex flex-col flex-1">
          {data.map((item, idx) => (
            <Question
              key={item.title}
              idx={idx}
              activeArticleIdx={activeArticleIdx}
              item={item}
              handleClick={handleHeaderClick}
            />
          ))}
        </div>
        <img
          alt="gradient"
          src={greenGradientBg}
          className="absolute sm:left-[-700px] sm:w-[1000px] sm:bottom-[-400px] sm:h-[1000px] z-[-1] bottom-[-500px] left-[-500px] max-w-[1000px]"
        />
        <img
          alt="gradient"
          src={orangeGradientBg}
          className="absolute sm:right-[-900px] sm:max-w-[2000px] sm:top-[-400px] max-w-[1000px] right-[-400px] top-[-1300px] z-[-1]"
        />
      </section>
    </PaddingContainer>
  );
};

type QuestionType = {
  handleClick: (idx: number) => void;
  activeArticleIdx: number;
  idx: number;
  item: FaqType["data"][0];
};

const Question: FC<QuestionType> = ({
  idx,
  activeArticleIdx,
  item,
  handleClick,
}) => {
  const answerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      role="presentation"
      className="text-content text-card-headline py-8 border-b border-divider flex-1 cursor-pointer"
      id={`faq-${idx + 1}`}
      onClick={() => handleClick(idx + 1)}
    >
      <div
        className={clsx(
          styles.question,
          activeArticleIdx === idx && styles.active
        )}
        data-active-article={`faq-${idx + 1}`}
      >
        <button className="flex items-center justify-between w-full capitalize text-left gap-4">
          <div className={styles.faqSubHeader}>{item.title}</div>
          <ArrowDown
            className={clsx(
              "size-6 min-w-6 text-content stroke-current",
              activeArticleIdx === idx + 1 && "rotate-180"
            )}
          />
        </button>
      </div>
      <div
        ref={answerRef}
        style={{
          maxHeight:
            activeArticleIdx === idx + 1
              ? `${answerRef.current?.scrollHeight}px`
              : "0",
        }}
        className={clsx(
          "text-content text-body",
          styles.answercont,
          activeArticleIdx === idx + 1 && styles.active
        )}
      >
        {item.description}
      </div>
    </div>
  );
};
