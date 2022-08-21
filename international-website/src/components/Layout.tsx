import React from "react";
import "../i18n/config";
import Navbar from "./Navbar";
import "./layout.css";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;
