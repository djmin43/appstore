import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

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

export const CardComponentFragment = graphql`
  fragment CardComponent on ContentfulHarmonyCardComponent {
    id
    step
    type
    description
    title
    image {
      gatsbyImage(height: 168, width: 252)
    }
  }
`;

export interface ICardComponent {
  id: string;
  step: number;
  type: string;
  description: string;
  title: string;
  image: IGatsbyImageData;
}
