import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Products/Products.css";

function Kids() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const kidsData = data?.slice(-2);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddtoCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="sneaker-Container">
      {isLoading ? (
        <div className="spinner"></div>
      ) : error ? (
        <p>Oh no, an error has occurred...</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {kidsData.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <div className="details">
                  <span>{product.description}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button
                  className="btn"
                  onClick={() => handleAddtoCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Kids;
