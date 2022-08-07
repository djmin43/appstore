import * as React from "react";
import Layout from "../components/layout/Layout";
import { useProgrammerList } from "../hooks/useProgrammerList";
import Card from "../components/common/Card";
import { styled } from "@stitches/react";

const IndexPage = () => {
  const programmersList = useProgrammerList();
  return (
    <Layout>
      <ProgrammerWrapper>
        {programmersList.map((programmer) => (
          <Card key={programmer.id} programmerData={programmer} />
        ))}
      </ProgrammerWrapper>
    </Layout>
  );
};

const ProgrammerWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "2rem",
});

export default IndexPage;
