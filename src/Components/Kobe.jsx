import React from "react";
import Zoom from "../data/kobezoom.json";
import Sneakergrid from "./Sneakergrid";

function Kobe() {
  return (
    <>
      <Sneakergrid sneakers={Zoom} />
    </>
  );
}

export default Kobe;
