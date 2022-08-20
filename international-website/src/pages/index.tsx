import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";

const Index = () => {
  const { languages, changeLanguage, originalPath } = useI18next();
  console.log(navigator.language);
  console.log(originalPath);

  return (
    <div>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const query = graphql`
  query ($language: String!) {
    allContentfulHarmonyMain(filter: { node_locale: { eq: $language } }) {
      nodes {
        id
        node_locale
        mainHeader
      }
    }
  }
`;
export default Index;
