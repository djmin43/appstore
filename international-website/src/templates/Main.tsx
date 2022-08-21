import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import { ICardComponent, ILandingMain } from "../queries/harmony.fragment";
import Solution from "../components/Solution";
import SalesAndProduct from "../components/SalesAndProduct";

interface IMain {
  data: {
    landingData: ILandingMain;
    product: {
      nodes: ICardComponent[];
    };
    sales: {
      nodes: ICardComponent[];
    };
  };
}
const Main = ({ data }: IMain) => {
  console.log(data);
  const { t } = useTranslation();

  return (
    <Layout>
      <>
        <Landing landingData={data.landingData} />
        <Solution />
        <SalesAndProduct
          product={data.product.nodes}
          sales={data.sales.nodes}
        />
      </>
    </Layout>
  );
};

export const data = graphql`
  query HarmonyQuery($nodeLocale: String!) {
    landingData: contentfulHarmonyMain(node_locale: { eq: $nodeLocale }) {
      ...LandingMain
    }
    product: allContentfulHarmonyCardComponent(
      filter: { node_locale: { eq: $nodeLocale }, type: { eq: "product" } }
      sort: { fields: step, order: ASC }
    ) {
      nodes {
        ...CardComponent
      }
    }
    sales: allContentfulHarmonyCardComponent(
      filter: { node_locale: { eq: $nodeLocale }, type: { eq: "sales" } }
      sort: { fields: step, order: ASC }
    ) {
      nodes {
        ...CardComponent
      }
    }
  }
`;

export default Main;
