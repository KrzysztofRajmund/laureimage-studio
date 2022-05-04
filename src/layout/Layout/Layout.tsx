import React from "react";
import AppHeader from "../../components/AppHeader";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <AppHeader />
      {children}
      <h1>I am footer</h1>
    </div>
  );
};
