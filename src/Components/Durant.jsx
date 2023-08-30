import React from "react";
import Sneakergrid from "./Sneakergrid";
import Durantsneaker from "../data/durantSneaker.json";

function Durant() {
  return <Sneakergrid sneakers={Durantsneaker} />;
}

export default Durant;
