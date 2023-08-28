import React from "react";
import Display from "./display.json";

function Jordan() {
  const jordanSneaker = Display.find((player) => player.name === "Jordan");

  return (
    <>
      <header className="shoeNameTitle">
        <h3>Jordan 1</h3>
        <h5>Limited Sizes</h5>
        <div className="ShoePrice">
          <h4>{jordanSneaker.price}</h4>
        </div>
      </header>
      {jordanSneaker && (
        <div className="sectionContainer" key={jordanSneaker.id}>
          <div className="ImageContainer">
            <img
              src={jordanSneaker.image}
              alt="jordan1 sneaker"
              className="jordanPageImg"
            />
          </div>
          <div className="shoeSizes">hi</div>
        </div>
      )}
    </>
  );
}

export default Jordan;
