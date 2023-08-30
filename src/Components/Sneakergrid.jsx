import React from "react";
import "./Sneakergrid.css";

function Sneakergrid({ sneakers }) {
  return (
    <div className="sneakerSale-Container">
      {sneakers.map((sneaker) => (
        <div key={sneaker.id} className="sneakerSale-wrapper">
          <div className="sneakerSaleImg-container">
            <div className="sneakerSaleImg-wrapper">
              <img src={sneaker.image} alt={sneaker.title} />
            </div>
          </div>
          <div className="sneakerSaleTitle">
            <p>{sneaker.title}</p>
            <p>${sneaker.price}</p>
            <div className="btnContainer">
              <button className="checkOutBtn">Add to Cart</button>
            </div>
            <div className="favoriteBtnContainer"></div>
            <button className="favoriteBtn">Favorite</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sneakergrid;
