import React from "react";
import Display from "./display.json";
import { Link } from "react-router-dom";

function Sneakersection() {
  return (
    <>
      <header className="feature-Title">
        <h1>Featured</h1>
      </header>
      <section className="sneaker-wrapper">
        {Display.map((sneakers) => {
          return (
            <Link
              to={sneakers.path}
              element={sneakers.component}
              className="card-container"
              key={sneakers.id}
            >
              <div className="card">
                <div className="sneakerImage">
                  <img src={sneakers.image} />
                </div>
              </div>
              <div className="sneakerTitle">
                <p>{sneakers.name}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default Sneakersection;
