import React from "react";
import useRedirectLanguage from "../hooks/useRedirectLanguage";
import { graphql } from "gatsby";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  // useRedirectLanguage();

  return <div>{children}</div>;
};

export const data = graphql`
  query MyQuery {
    contentfulHarmonyMain {
      node_locale
    }
  }
`;

export default Layout;
