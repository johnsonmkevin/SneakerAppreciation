import React from "react";
import Display from "./display.json";

function Sneakersection() {
  return (
    <section className="sneaker-wrapper">
      {Display.map((sneakers) => {
        return (
          <div className="card-container">
            <div className="card">
              <div className="sneakerImage">
                <img src={sneakers.image} key={sneakers.id} />
              </div>
            </div>
            <div className="sneakerTitle">
              <p>{sneakers.title}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Sneakersection;
