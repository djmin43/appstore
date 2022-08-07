import React from "react";
import { graphql } from "gatsby";
import { IProgrammer } from "../types/programmer";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface ProgrammerPageProps {
  data: {
    contentfulPage: IProgrammer;
  };
}

const ProgrammerPage = ({
  data: { contentfulPage: programmerDetail },
}: ProgrammerPageProps) => {
  const image = getImage(programmerDetail.image) as IGatsbyImageData;
  console.log(image);

  return (
    <div>
      <GatsbyImage alt={programmerDetail.name} image={image} />
    </div>
  );
};

export const query = graphql`
  query ContentfulQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      id
      link
      url
      name
      mainLanguage
      description
      image {
        gatsbyImage(width: 400, height: 400)
      }
    }
  }
`;

export default ProgrammerPage;
