import React from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import useRedirectLanguage from "../hooks/useRedirectLanguage";
import { graphql, Link } from "gatsby";
import i18next from "i18next";

const Index = ({ data }) => {
  const { t } = useTranslation();

  function changeLang() {
    i18next.changeLanguage("en");
    console.log(navigator.language);
  }

  const { languages } = i18next;

  return (
    <Layout>
      <div>
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

export default Index;
