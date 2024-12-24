import { MotionConfig } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import { useWindowDimensions } from "~/hooks/useWindowDimensions";
import { MOBILE_WIDTH } from "~/styles/media";

export const CustomMotionConfig: FC<PropsWithChildren> = ({ children }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < MOBILE_WIDTH;
  return (
    <MotionConfig reducedMotion={isMobile ? "user" : "always"}>
      {children}
    </MotionConfig>
  );
};
