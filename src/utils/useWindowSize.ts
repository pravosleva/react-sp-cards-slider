import { useState, useEffect } from "react";
// import { md } from '~/common/styled-mui/theme'

interface IBreakpoints {
  lg: number;
}

export function useWindowSize(breakpoints: IBreakpoints): any {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
    isMobile: false,
    isDesktop: false,
  });

  useEffect(() => {
    function handleResize() {
      const width = window?.innerWidth;
      const height = window?.innerHeight;
      const isMobile = width <= breakpoints.lg;
      const isDesktop = width > breakpoints.lg;

      // Set window width/height to state
      setWindowSize({
        width,
        height,
        isMobile,
        isDesktop,
      });
    }

    // Handler to call on window resize
    if (typeof window !== "undefined") {
      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();
    }

    // Remove event listener on cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
