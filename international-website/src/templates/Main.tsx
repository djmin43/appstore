import React from "react";
import { graphql, Link } from "gatsby";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Layout from "../components/Layout";

const Main = (props) => {
  console.log(props);
  const { t } = useTranslation();

  const { languages } = i18next;
  console.log(languages);
  return (
    <Layout>
      <div>
        <h1> {props.data.contentfulHarmonyMain.mainTitle}</h1>
        <div>{t("Welcome to React")}</div>
        <ul className="languages">
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={`/${lng}`}>{lng}</Link>
            </li>
          ))}
        </ul>
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
