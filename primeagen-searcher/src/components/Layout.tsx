import React, { ReactNode } from "react";
import { styled } from "gatsby-theme-stitches/src/config";
import "../styles/layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MainLayout>
      <header>header</header>
      <nav>navbar</nav>

      {children}

      <footer>this is footer</footer>
    </MainLayout>
  );
};

const MainLayout = styled("main", {
  backgroundColor: "$background",
});

export default Layout;
