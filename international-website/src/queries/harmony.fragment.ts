import { graphql } from "gatsby";

export const landingFragment = graphql`
  fragment LandingMain on ContentfulHarmonyMain {
    id
    mainTitle
    mainDescription
    mainButtonLink
    mainButton
  }
`;

export interface ILandingMain {
  id: string;
  mainTitle: string;
  mainDescription: string;
  mainButtonLink: string;
  mainButton: string;
}
