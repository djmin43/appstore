import React from "react";
import { graphql } from "gatsby";
import { IProgrammer } from "../types/programmer";

interface ProgrammerPageProps {
  data: IProgrammer;
}

const ProgrammerPage = ({ data }: ProgrammerPageProps) => {
  return <div>hello world</div>;
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
        gatsbyImage(width: 200)
      }
    }
  }
`;

export default ProgrammerPage;
