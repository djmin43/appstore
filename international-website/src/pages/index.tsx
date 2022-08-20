import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

const Index = () => {
  const { languages, changeLanguage, originalPath } = useI18next();
  console.log(navigator.language);
  console.log(originalPath);
  console.log(languages);

  return (
    <Layout>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query LanguageQuery {
    allLocale {
      edges {
        node {
          id
          ns
          language
        }
      }
    }
  }
`;

export default Index;
