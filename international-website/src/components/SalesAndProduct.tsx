import React from "react";
import { styled } from "../gatsby-plugin-stitches/config";
import { ICardComponent } from "../queries/harmony.fragment";
import { useTranslation } from "react-i18next";

interface ISalesAndProductProps {
  product: ICardComponent[];
  sales: ICardComponent[];
}

interface ICardContainerProps {
  item: ICardComponent;
}

const SalesAndProduct = ({ product, sales }: ISalesAndProductProps) => {
  const { t } = useTranslation();

  return (
    <SalesAndProductContainer>
      <Section>
        <Header>{t("product header")}</Header>
        <Divider />
        <Description>{t("product description")}</Description>
        <CardContainer>
          {product.map((item) => (
            <Card item={item} />
          ))}
        </CardContainer>
      </Section>
      <Section>
        <Header>{t("sales header")}</Header>
        <Divider />
        <Description>{t("sales description")}</Description>
        <CardContainer>
          {sales.map((item) => (
            <Card item={item} />
          ))}
        </CardContainer>
      </Section>
    </SalesAndProductContainer>
  );
};

const Card = ({ item }: ICardContainerProps) => {
  return <div>{item.title}</div>;
};

const CardContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
});

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

export default SalesAndProduct;
