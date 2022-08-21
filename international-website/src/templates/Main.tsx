import React from "react";
import { graphql, Link } from "gatsby";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Layout from "../components/Layout";
import Landing from "../components/Landing";

const Main = (props: any) => {
  console.log(props);
  const { t } = useTranslation();

  return (
    <Layout>
      <Landing />
    </Layout>
  );
};

export const data = graphql`
  query MyQuery($nodeLocale: String!) {
    contentfulHarmonyMain(node_locale: { eq: $nodeLocale }) {
      mainDescription
      mainTitle
      mainButtonLink
      mainButton
    }
  }
`;

export default Main;
