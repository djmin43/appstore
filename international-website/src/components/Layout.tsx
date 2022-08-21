import React from "react";
import "../i18n/config";
import Navbar from "./Navbar";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
