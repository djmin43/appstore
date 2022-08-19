import React from "react";

interface ILayout {
  children: JSX.Element;
  location: any;
  lang: string;
}

const Layout = ({ children, location, lang }: ILayout) => {
  console.log("lang", lang);
  console.log("location", location);
  return <div>{children}</div>;
};

export default Layout;
