import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Sneakersection from "./Sneakersection";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Sneakersection />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
