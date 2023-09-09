import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="div">
          <p>No items in your cart</p>
          <div className="start-shopping">
            <Link to="/">
              <HiOutlineArrowSmLeft className="arrow" />
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="product-price">Price</h3>
            <h3 className="product-quantity">Quantity</h3>
            <h3 className="product-Total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.title} />
                  <div>
                    <h3>{cartItem.title}</h3>
                    <p>{cartItem.description}</p>
                    <button>Remove</button>
                  </div>
                </div>
                <div className="cart product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button>+</button>
                  <div className="cart-product-total-price">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subTotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
                <p>Free shipping</p>
                <button className="">Checkout</button>
                <div className="start-shopping">
                  <Link to="/">
                    <HiOutlineArrowSmLeft className="arrow" />
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
