import React from "react";
import AppHeaderDesktop from "./AppHeaderDesktop";
import AppHeaderTabletMobile from "./AppHeaderTabletMobile";

const AppHeader = () => {
  return (
    <>
      <AppHeaderDesktop />
      <AppHeaderTabletMobile />
    </>
  );
};

export default AppHeader;
