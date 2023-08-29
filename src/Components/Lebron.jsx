import React from "react";
import LebronSneakers from "../data/lebronsneaker.json";
import Sneakergrid from "./Sneakergrid";

function Lebron() {
  return (
    <>
      <Sneakergrid sneakers={LebronSneakers} />
    </>
  );
}

export default Lebron;
