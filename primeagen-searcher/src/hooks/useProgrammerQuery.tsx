import { graphql, useStaticQuery } from "gatsby";
import { IProgrammer } from "../types/programmer";

export const useProgrammerQuery = (): IProgrammer => {
  const { contentfulPage } = useStaticQuery(graphql`
    query ProgrammerQuery($id: String) {
      contentfulPage(id: { eq: $id }) {
        id
        url
        name
        mainLanguage
        description
        image {
          gatsbyImage(width: 200, height: 200)
        }
      }
    }
  `);
  return contentfulPage;
};
