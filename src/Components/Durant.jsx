import React from "react";
import Display from "./display.json";

function Durant() {
  const durantSneaker = Display.find((player) => player.name === "Lebron");
  return (
    <>
      <header className="shoeNameTitle">
        <h3>Durant</h3>
        <h5>Limited Sizes</h5>
        <div className="ShoePrice">
          <h4>{durantSneaker.price}</h4>
        </div>
      </header>
      {durantSneaker && (
        <div className="sectionContainer" key={durantSneaker.id}>
          <div className="imageContainer">
            <img
              src="images/durant.webp"
              alt="durant sneaker"
              className="pageImg"
            />
          </div>
          <div className="shoeSizes">hi</div>
        </div>
      )}
    </>
  );
}

export default Durant;
