import React from "react";
import Feature from "../data/feature.json";
import { Link } from "react-router-dom";

function Sneakersection() {
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
