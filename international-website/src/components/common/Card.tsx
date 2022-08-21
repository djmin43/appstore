import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { styled } from "../../gatsby-plugin-stitches/config";
import React from "react";
import { ICardComponent } from "../../queries/harmony.fragment";

interface ICardContainerProps {
  item: ICardComponent;
}

const Card = ({ item }: ICardContainerProps) => {
  const image = getImage(item.image) as IGatsbyImageData;
  return (
    <CardContainer>
      <GatsbyImage
        style={{
          borderRadius: "4px",
        }}
        alt={item.title}
        image={image}
      />
      <Step>
        <span>{item.step}</span>
      </Step>
      <Title>{item.title}</Title>
      <Description>{item.description}</Description>
    </CardContainer>
  );
};

const Step = styled("div", {
  height: "1.75rem",
  width: "1.75rem",
  backgroundColor: "$black",
  borderRadius: "50%",
  color: "$white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem",
});

const CardContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRadius: "4px",
  width: "268px",
  padding: "1rem",
  margin: "0.5rem",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
});

const Title = styled("p", {
  color: "$grey",
  fontSize: "1.25rem",
});

const Description = styled("p", {
  color: "$black",
  fontSize: "$small",
  margin: "0.5rem",
});

export default Card;
