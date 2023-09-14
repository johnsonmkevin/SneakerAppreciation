import React from "react";
import Nav from "./Components/Nav";
import Footer from "./Footer";
import NotFound from "./Components/NotFound";

function Layout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Nav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
