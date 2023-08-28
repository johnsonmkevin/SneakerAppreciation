import React from "react";
import Zoom from "./kobezoom.json";
import Sneakergrid from "./Sneakergrid";

function Kobe() {
  return (
    <>
      <Sneakergrid sneakers={Zoom} />
    </>
  );
}

export default Kobe;
