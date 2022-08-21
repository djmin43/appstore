import React from "react";
import { styled } from "@stitches/react";
import { StaticImage } from "gatsby-plugin-image";
import { ILandingMain } from "../queries/harmony.fragment";

interface ILanding {
  landingData: ILandingMain;
}

const Landing = ({ landingData }: ILanding) => {
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
          <h1 className="main-title">{landingData.mainTitle}</h1>
          <p className="description">{landingData.mainDescription}</p>
        </TextContainer>
        <ButtonContainer>
          <StartButton>{landingData.mainButton}</StartButton>
        </ButtonContainer>
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
    "linear-gradient(0deg, rgba(0,2,34,1) 0%, rgba(0,0,0,0.6250875350140056) 40%, rgba(255,255,255,0) 100%)",
});

const ContentContainer = styled("div", {
  position: "absolute",
  color: "$white",
  width: "100%",
  height: "100%",
});

const TextContainer = styled("div", {
  marginTop: "15rem",
  marginLeft: "15rem",
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

const ButtonContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: "15rem",
});

const StartButton = styled("button", {
  padding: "20px 32px",
  border: "1px solid $primaryLight",
  color: "$primaryLight",
});

export default Landing;
