import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

function Kids() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  const kidsData = data?.slice(-2);

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
                <button className="btn">Add To Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Kids;
