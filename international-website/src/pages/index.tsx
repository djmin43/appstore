import React from "react";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import useRedirectLanguage from "../hooks/useRedirectLanguage";

const Index = (props) => {
  const { t } = useTranslation();
  useRedirectLanguage();

  return (
    <Layout>
      <div>{t("Welcome to React")}</div>
    </Layout>
  );
};

export default Index;
