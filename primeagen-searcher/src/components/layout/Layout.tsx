import React, { ReactNode } from "react";
import { styled } from "gatsby-theme-stitches/src/config";
import "../../styles/layout.css";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainLayout>
      <Navbar />
      {children}
      <footer>this is footer</footer>
    </MainLayout>
  );
};

const MainLayout = styled("main", {
  backgroundColor: "$background",
});

export default Layout;
