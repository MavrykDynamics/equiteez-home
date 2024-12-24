import { useEffect, useState } from "react";
import { useAppContext } from "~/providers/AppProvider/AppProvider";

export function useWindowDimensions(): { width: number; height: number } {
  const { IS_WEB } = useAppContext();
  const [dimensions, setDimensions] = useState({
    width: IS_WEB ? window.innerWidth : 0,
    height: IS_WEB ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!IS_WEB) return;
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setDimensions({ width, height });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [IS_WEB]);

  return dimensions;
}
