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
    </SolutionContainer>
  );
};

const SolutionContainer = styled("section", {
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

export default Solution;
