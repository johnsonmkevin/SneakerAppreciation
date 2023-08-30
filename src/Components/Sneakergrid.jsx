import React from "react";
import "../css/Sneakergrid.css";
import { BsFillSuitHeartFill } from "react-icons/bs";

function Sneakergrid({ sneakers }) {
  const favoriteItem = (sneaker) => {
    console.log(sneaker);
  };

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
              <button className="btnAdd">Add to Cart</button>
            </div>
            <div className="favoriteBtnContainer"></div>
            <button
              className="btnFavorite"
              onClick={() => favoriteItem(sneaker)}
            >
              Favorite
              <BsFillSuitHeartFill className="heart" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sneakergrid;
