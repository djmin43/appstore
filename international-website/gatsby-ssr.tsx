import * as React from "react";
import { getCssText } from "./src/gatsby-plugin-stitches/config";

export const onRenderBody = ({ setHeadComponents }: any) => {
  setHeadComponents([
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
