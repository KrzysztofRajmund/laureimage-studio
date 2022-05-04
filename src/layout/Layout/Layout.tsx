import React from "react";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <h1>I am HEADER</h1>
      {children}
      <h1>I am footer</h1>
    </div>
  );
};
