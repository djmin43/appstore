import React from "react";
import { styled } from "gatsby-theme-stitches/src/config";
import { IProgrammer } from "../../types/programmer";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface CardProps {
  programmerData: IProgrammer;
}

const Card = ({ programmerData }: CardProps) => {
  const image = getImage(programmerData.image) as IGatsbyImageData;

  return (
    <CardContainer>
      <GatsbyImage alt={programmerData.name} image={image} />
      <h1>{programmerData.name}</h1>
      <p>{programmerData.description}</p>
      <p>{programmerData.mainLanguage}</p>
    </CardContainer>
  );
};

const CardContainer = styled("div", {
  padding: "1rem",
  margin: "0.25rem",
  width: "15rem",
  flexDirection: "column",
  textAlign: "center",
  backgroundColor: "$primaryWhite",
});

export default Card;
