import React from "react";
import "../css/Sneakergrid.css";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux-store/cartReducer";

function Sneakergrid({ sneakers }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const favoriteItem = (sneaker) => {
    console.log(sneaker);
  };

  // add to cart page
  // const handleRemove = async () => {
  //   dispatch(removeFromCart({ id: cart.cartItems.id }));
  // };

  const handleAddToCart = async (sneaker) => {
    const cartItems = [];
    dispatch(addToCart({ ...cartItems, sneaker }));
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
              <button
                className="btnAdd"
                onClick={() => handleAddToCart(sneaker)}
              >
                Add to Cart
              </button>
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
