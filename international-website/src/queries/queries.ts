import { graphql } from "gatsby";

export const harmonyMainFragment = graphql`
  fragment mainF on ContentfulHarmonyMain {
    id
    mainTitle
    node_locale
    mainButtonLink
    mainButton
    mainDescription
  }
`;
