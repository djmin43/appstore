import React from "react";
import { styled } from "../gatsby-plugin-stitches/config";
import { ICardComponent } from "../queries/harmony.fragment";
import { useTranslation } from "react-i18next";
import Card from "./common/Card";

interface ISalesAndProductProps {
  product: ICardComponent[];
  sales: ICardComponent[];
}

const SalesAndProduct = ({ product, sales }: ISalesAndProductProps) => {
  const { t } = useTranslation();

  return (
    <SalesAndProductContainer>
      <Section>
        <Header>{t("product header")}</Header>
        <Divider />
        <Description>{t("product description")}</Description>
        <HStack>
          {product.map((item) => (
            <Card item={item} />
          ))}
        </HStack>
      </Section>
      <Section>
        <Header>{t("sales header")}</Header>
        <Divider />
        <Description>{t("sales description")}</Description>
        <HStack>
          {sales.map((item) => (
            <Card item={item} />
          ))}
        </HStack>
      </Section>
    </SalesAndProductContainer>
  );
};

const SalesAndProductContainer = styled("section", {
  backgroundColor: "$background",
  textAlign: "center",
});

const Section = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "5rem",
  gap: "1.5rem",
});

const Header = styled("p", {
  fontSize: "$semiMedium",
  fontWeight: "$semiBold",
  color: "$black",
  width: "30rem",
});

const Description = styled("p", {
  color: "$grey",
  fontSize: "$small",
  lineHeight: "2rem",
});

const Divider = styled("div", {
  backgroundColor: "$darkGrey",
  width: "38px",
  height: "2px",
});

const HStack = styled("div", {
  display: "flex",
  justifyContent: "center",
});

export default SalesAndProduct;
