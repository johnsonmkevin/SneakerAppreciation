import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Footer";
import NotFound from "./Components/NotFound";

function Layout({ children, NotFound }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
