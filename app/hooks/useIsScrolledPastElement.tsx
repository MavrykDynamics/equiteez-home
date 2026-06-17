import { useEffect, useRef, useState } from "react";
import type { MutableRefObject } from "react";

type UseIsScrolledPastElementOptions = {
  isEnabled?: boolean;
};

type UseIsScrolledPastElementResult<Element extends HTMLElement> = {
  elementRef: MutableRefObject<Element | null>;
  isScrolledPastElement: boolean;
};

const getScrollTop = (target?: EventTarget | null) => {
  const viewportScrollTop = Math.max(
    window.scrollY,
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop,
    0
  );

  if (viewportScrollTop > 0) {
    return viewportScrollTop;
  }

  if (target instanceof Document) {
    return Math.max(
      target.documentElement.scrollTop,
      target.body.scrollTop,
      0
    );
  }

  if (target instanceof HTMLElement) {
    return target.scrollTop;
  }

  return 0;
};

export function useIsScrolledPastElement<Element extends HTMLElement>({
  isEnabled = true,
}: UseIsScrolledPastElementOptions = {}): UseIsScrolledPastElementResult<Element> {
  const elementRef = useRef<Element | null>(null);
  const [isScrolledPastElement, setIsScrolledPastElement] = useState(false);

  useEffect(() => {
    if (!isEnabled) {
      setIsScrolledPastElement(false);
      return undefined;
    }

    const syncScrollState = (event?: Event) => {
      const scrollThreshold = elementRef.current?.offsetHeight ?? 0;
      const nextIsScrolledPastElement =
        getScrollTop(event?.target) > scrollThreshold;

      setIsScrolledPastElement((currentIsScrolledPastElement) =>
        currentIsScrolledPastElement === nextIsScrolledPastElement
          ? currentIsScrolledPastElement
          : nextIsScrolledPastElement
      );
    };

    const scrollListenerOptions: AddEventListenerOptions = {
      capture: true,
      passive: true,
    };

    window.addEventListener("scroll", syncScrollState, scrollListenerOptions);
    window.addEventListener("resize", syncScrollState);
    document.addEventListener("scroll", syncScrollState, scrollListenerOptions);
    syncScrollState();

    return () => {
      window.removeEventListener(
        "scroll",
        syncScrollState,
        scrollListenerOptions
      );
      window.removeEventListener("resize", syncScrollState);
      document.removeEventListener(
        "scroll",
        syncScrollState,
        scrollListenerOptions
      );
    };
  }, [isEnabled]);

  return {
    elementRef,
    isScrolledPastElement,
  };
}
