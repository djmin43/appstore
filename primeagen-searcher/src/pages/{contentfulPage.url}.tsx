import React from "react";
import { useProgrammerQuery } from "../hooks/useProgrammerQuery";

const ProgrammerPage = () => {
  const data = useProgrammerQuery();
  return <div>hello world</div>;
};

export default ProgrammerPage;
