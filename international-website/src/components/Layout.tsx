import React from "react";
import useRedirectLanguage from "../hooks/useRedirectLanguage";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  // useRedirectLanguage();

  return <div>{children}</div>;
};

export default Layout;
