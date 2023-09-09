import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

function Unisex() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const unisexData = data?.slice(0, -2);

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
            {unisexData.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.image} alt={product.title} />
                <div className="details">
                  <div className="product-Description">
                    <span>{product.description}</span>
                  </div>
                  <div className="price-Price">
                    <span className="price">${product.price}</span>
                  </div>
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
