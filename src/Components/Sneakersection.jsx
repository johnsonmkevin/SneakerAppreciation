import React from "react";
import Display from "./display.json";

function Sneakersection() {
  function btnClick(sneakerId) {
    console.log(`You clicked sneaker ${sneakerId}`);
  }

  return (
    <section className="sneaker-wrapper">
      {Display.map((sneakers) => {
        return (
          <button
            className="card-container"
            onClick={() => btnClick(sneakers.id)}
            key={sneakers.id}
          >
            <div className="card">
              <div className="sneakerImage">
                <img src={sneakers.image} />
              </div>
            </div>
            <div className="sneakerTitle">
              <p>{sneakers.title}</p>
            </div>
          </button>
        );
      })}
    </section>
  );
}

export default Sneakersection;
