import React from "react";
import { styled } from "../gatsby-plugin-stitches/config";
import { useTranslation } from "react-i18next";

const Solution = () => {
  const { t } = useTranslation();

  return (
    <SolutionContainer>
      <SolutionHeaderContainer>
        <p className="white">
          {t("only solution1")}
          <span className="highlight"> Harmony</span>
          {t("only solution2")}
        </p>
      </SolutionHeaderContainer>
      <Gradient />
    </SolutionContainer>
  );
};

const SolutionContainer = styled("section", {
  position: "relative",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "$dark",
});

const SolutionHeaderContainer = styled("div", {
  fontSize: "$semiMedium",
  marginTop: "10rem",
  width: "30rem",
  textAlign: "center",
  lineHeight: "2.25rem",
  "& > .white": {
    color: "$white",
  },
  ".highlight": {
    color: "$primaryLight",
  },
});

const Gradient = styled("div", {
  position: "absolute",
  inset: "0 0 0 0",
  background:
    "linear-gradient(0deg, rgba(250,250,250,1) 0%, rgba(0,0,0,0.6250875350140056) 30%, rgba(0,2,34,0) 100%)",
});

export default Solution;
