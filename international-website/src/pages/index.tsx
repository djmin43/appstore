import React from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import useRedirectLanguage from "../hooks/useRedirectLanguage";
import { graphql } from "gatsby";

const Index = ({ data }) => {
  const { t } = useTranslation();
  useRedirectLanguage();
  console.log(data);

  return (
    <Layout>
      <div>{t("Welcome to React")}</div>
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

export default Index;
