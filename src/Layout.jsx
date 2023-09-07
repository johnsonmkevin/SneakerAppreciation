import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Nav />

      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;