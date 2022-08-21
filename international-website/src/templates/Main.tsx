import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import { ILandingMain } from "../queries/harmony.fragment";

interface IMain {
  data: {
    contentfulHarmonyMain: ILandingMain;
  };
}
const Main = ({ data }: IMain) => {
  console.log(data);
  const { t } = useTranslation();

  return (
    <Layout>
      <Landing harmonyMain={data.contentfulHarmonyMain} />
    </Layout>
  );
};

export const data = graphql`
  query MyQuery($nodeLocale: String!) {
    contentfulHarmonyMain(node_locale: { eq: $nodeLocale }) {
      ...LandingMain
    }
  }
`;

export default Main;
