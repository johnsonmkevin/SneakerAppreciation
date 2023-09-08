import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
import "./unisex.css";

function Unisex() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div className="sneaker-Container">
      {isLoading ? (
        <div class="spinner"></div>
      ) : error ? (
        <p>Oh no an error has occured..</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((products) => (
              <div key={products.key} className="product">
                <h3>{products.title}</h3>
                <img src={products.image} alt={products.title} />
                <div className="details">
                  <span>{products.description}</span>
                  <span className="price">${products.price}</span>
                </div>
                <button className="btn">Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Unisex;
