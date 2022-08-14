import { graphql, useStaticQuery } from "gatsby";

export const usePrismicPages = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allPrismicSomePage {
        ...Edge
      }
    }
  `);

  return data.allPrismicSomePage.edges;
};

export const query = graphql`
  fragment Edge on PrismicSomePageConnection {
    edges {
      node {
        id
        data {
          tester11 {
            richText
          }
        }
      }
    }
  }
`;
