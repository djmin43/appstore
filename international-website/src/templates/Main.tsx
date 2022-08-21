import React from "react";
import { graphql, Link } from "gatsby";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Layout from "../components/Layout";

const Main = (props: any) => {
  console.log(props);
  const { t } = useTranslation();

  return (
    <Layout>
      <div>
        <h1> {props.data.contentfulHarmonyMain.mainTitle}</h1>
        <div>{t("title")}</div>
      </div>
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
