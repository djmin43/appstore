import React from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  console.log(t);
  return (
    <Layout>
      <div>{t("Welcome to React")}</div>
    </Layout>
  );
};

export default Index;
