import { graphql, useStaticQuery } from "gatsby";
import { IProgrammer } from "../types/programmer";

export const useProgrammerDetailQuery = (id: string): IProgrammer => {
  const { contentfulPage } = useStaticQuery(graphql`
    query MyQuery($id: String) {
      contentfulPage(id: { eq: $id }) {
        id
        link
        url
        name
        mainLanguage
        description
        image {
          gatsbyImage(width: 200)
        }
      }
    }
  `);
  return contentfulPage;
};
