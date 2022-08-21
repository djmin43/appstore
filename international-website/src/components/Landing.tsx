import React from "react";
import { styled } from "@stitches/react";
import { StaticImage } from "gatsby-plugin-image";

const Landing = () => {
  return (
    <LandingContainer>
      <StaticImage
        src="../images/landing-page.png"
        alt="landing-page-image"
        loading="eager"
        layout="fullWidth"
      />
      <TextContainer>
        asdfjhaksdfhk
        <p>asdjfasdfjhkahfkfask</p>
      </TextContainer>
    </LandingContainer>
  );
};

const LandingContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  height: "742px",
});

const TextContainer = styled("div", {
  position: "absolute",
  color: "$white",
});

export default Landing;
