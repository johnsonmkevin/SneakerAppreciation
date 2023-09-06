import React from "react";
import Feature from "../data/feature.json";
import Sneakergrid from "./Sneakergrid";

function Jordan() {
  const jordanSneakers = Feature.filter(
    (sneakers) => sneakers.id >= 17 && sneakers.id <= 20
  );
  return (
    <>
      <Sneakergrid sneakers={jordanSneakers} />
    </>
  );
}

export default Jordan;
