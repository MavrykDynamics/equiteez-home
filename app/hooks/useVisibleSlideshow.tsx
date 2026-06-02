import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";

type UseVisibleSlideshowOptions = {
  imageSources: string[];
  intervalMs: number;
  intersectionThreshold?: number;
};

type UseVisibleSlideshowResult<Element extends HTMLElement> = {
  activeIndex: number;
  containerRef: MutableRefObject<Element | null>;
  isVisible: boolean;
  shouldReduceMotion: boolean;
};

export function useVisibleSlideshow<Element extends HTMLElement>({
  imageSources,
  intervalMs,
  intersectionThreshold = 0.3,
}: UseVisibleSlideshowOptions): UseVisibleSlideshowResult<Element> {
  const containerRef = useRef<Element | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const slideCount = imageSources.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreferenceChange = () => {
      setShouldReduceMotion(mediaQuery.matches);
    };

    handleMotionPreferenceChange();
    mediaQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: intersectionThreshold }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [intersectionThreshold]);

  useEffect(() => {
    if (slideCount < 2 || shouldReduceMotion || !isVisible) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slideCount);
    }, intervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [intervalMs, isVisible, shouldReduceMotion, slideCount]);

  useEffect(() => {
    if (slideCount < 2 || shouldReduceMotion) {
      return;
    }

    const nextImageSources = [
      imageSources[(activeIndex + 1) % slideCount],
      imageSources[(activeIndex + 2) % slideCount],
    ];

    nextImageSources.forEach((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
    });
  }, [activeIndex, imageSources, shouldReduceMotion, slideCount]);

  return {
    activeIndex,
    containerRef,
    isVisible,
    shouldReduceMotion,
  };
}
