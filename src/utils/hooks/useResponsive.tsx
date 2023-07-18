import { useEffect, useState } from "react";
import { ScreenSize } from "../enums";
import { isBrowser } from "../helpers";

export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  
  useEffect(() => {
    if (!isBrowser()) return
    setWindowWidth(window.innerWidth)

    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return ()=> window.removeEventListener('resize', handleResize)
  }, []);
  
  const isMobileScreen = windowWidth !== 0 && windowWidth <= ScreenSize.XS;
  const isTabletScreen = windowWidth <= ScreenSize.SM && windowWidth > ScreenSize.XS;
  const isDesktopScreen = windowWidth > ScreenSize.SM;
  const isSmallScreen = windowWidth <= ScreenSize.MD;

  return { isMobileScreen, isTabletScreen, isDesktopScreen, isSmallScreen };
};
