import React from "react";
import Retro from "../data/retro.json";
import Sneakergrid from "./Sneakergrid";

function Jordan() {
  return (
    <>
      <Sneakergrid sneakers={Retro} />
    </>
  );
}

export default Jordan;
