import React from "react";
import { styled } from "@stitches/react";
import { StaticImage } from "gatsby-plugin-image";
import { ILandingMain } from "../queries/harmony.fragment";

interface ILanding {
  harmonyMain: ILandingMain;
}

const Landing = ({ harmonyMain }: ILanding) => {
  return (
    <LandingContainer>
      <StaticImage
        src="../images/landing-page.png"
        alt="landing-page-image"
        loading="eager"
        layout="fullWidth"
        objectFit="contain"
      />
      <Gradient />
      <ContentContainer>
        <TextContainer>
          <h1 className="main-title">{harmonyMain.mainTitle}</h1>
          <p className="description">{harmonyMain.mainDescription}</p>
        </TextContainer>
      </ContentContainer>
    </LandingContainer>
  );
};

const LandingContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  position: "relative",
});

const Gradient = styled("div", {
  position: "absolute",
  inset: "0 0 0 0",
  background:
    "linear-gradient(0deg, rgba(0,2,34,1) 0%, rgba(0,0,0,0.6250875350140056) 20%, rgba(255,255,255,0) 100%)",
});

const ContentContainer = styled("div", {
  position: "absolute",
  color: "$white",
  width: "100%",
  height: "100%",
  display: "flex",
  paddingLeft: "15rem",
  paddingTop: "15rem",
});

const TextContainer = styled("div", {
  "& > .main-title": {
    fontSize: "$medium",
    margin: "2.5rem 0",
    width: "28rem",
  },
  "& > .description": {
    fontSize: "$small",
    width: "28rem",
    lineHeight: "1.5rem",
  },
});

export default Landing;
