import React from "react";
import "../i18n/config";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return <div>{children}</div>;
};

export default Layout;
