import React from "react";
import Feature from "../data/feature.json";
import Sneakergrid from "./Sneakergrid";

function Lebron() {
  const lebronSneakers = Feature.filter(
    (sneakers) => sneakers.id >= 13 && sneakers.id <= 16
  );
  return (
    <>
      <Sneakergrid sneakers={lebronSneakers} />
    </>
  );
}

export default Lebron;
