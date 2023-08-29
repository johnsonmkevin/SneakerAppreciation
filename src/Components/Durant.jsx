import React from "react";
import Sneakergrid from "./Sneakergrid";
import Durantsneaker from "../data/durantSneaker.json";

function Durant() {
  return (
    <div>
      <Sneakergrid sneakers={Durantsneaker} />
    </div>
  );
}

export default Durant;
