import React from "react";
import Feature from "../data/feature.json";
import { Link } from "react-router-dom";

function Sneakersection() {
  function btnClick(sneakerId) {
    console.log(`You clicked sneaker ${sneakerId}`);
  }

  return (
    <>
      <header className="feature-Title">
        <h1>Featured</h1>
      </header>
      <section className="sneaker-wrapper">
        {Feature.map((sneakers) => {
          return (
            <Link
              className="card-container"
              onClick={() => btnClick(sneakers.id)}
              key={sneakers.id}
              to={sneakers.path}
            >
              <div className="card">
                <div className="sneakerImage">
                  <img src={sneakers.image} />
                </div>
              </div>
              <div className="sneakerTitle">
                <p>{sneakers.title}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default Sneakersection;
