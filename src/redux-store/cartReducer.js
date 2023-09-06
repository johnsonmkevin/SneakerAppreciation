import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
    removeFromCart(state, action) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          console.log(item.id);
          return item.id !== action.payload.id;
        }),
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
export default cartReducer.reducer;
