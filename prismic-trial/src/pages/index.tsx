import React from "react";
import { usePrismicPages } from "../hooks/useStaticQuery";
import { PrismicRichText } from "@prismicio/react";

const IndexPage = () => {
  const data = usePrismicPages();
  return (
    <section>
      {data.map((post) => (
        <PrismicRichText
          key={post.node.id}
          field={post.node.data.tester11.richText}
        />
      ))}
    </section>
  );
};

export default IndexPage;
