import React from "react";
import Layout from "../components/Layout";

const Index = ({ location }: any) => {
  const place = window.navigator.language;
  console.log(place);
  return (
    <Layout location={location} lang="ko">
      <div>asdf</div>
    </Layout>
  );
};

export default Index;
