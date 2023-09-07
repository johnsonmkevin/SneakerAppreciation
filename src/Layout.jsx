import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Video from "./Components/Video";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Video />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
