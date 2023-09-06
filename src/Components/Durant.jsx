import React from "react";
import Sneakergrid from "./Sneakergrid";
import Feature from "../data/feature.json";

function Durant() {
  const durantSneakers = Feature.filter(
    (sneakers) => sneakers.id >= 9 && sneakers.id <= 12
  );
  return <Sneakergrid sneakers={durantSneakers} />;
}

export default Durant;
