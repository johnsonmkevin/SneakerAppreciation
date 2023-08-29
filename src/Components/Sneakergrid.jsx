import React from "react";

function Sneakergrid({ sneakers }) {
  console.log(sneakers);
  return (
    <>
      <div className="sneaker-Container">
        {sneakers.map((sneakers) => (
          <div key={sneakers.id} className="sneaker.wrapper">
            <div className="sneakerTitle">
              <p>{sneakers.title}</p>
              <p>${sneakers.price}</p>
            </div>
            <div className="sneakerImg">
              <img src={sneakers.image} alt={sneakers.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sneakergrid;
