import React from "react";
import Feature from "../data/feature.json";
import Sneakergrid from "./Sneakergrid";

function Kobe() {
  const kobeSneakers = Feature.filter(
    (sneakers) => sneakers.id >= 5 && sneakers.id <= 8
  );

  return (
    <>
      <Sneakergrid sneakers={kobeSneakers} />
    </>
  );
}

export default Kobe;
