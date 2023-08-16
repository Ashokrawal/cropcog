import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // {"add product"}

    actionAddProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },

    // {"remove Product"}
    actionRemoveProduct: (state, action) => {
      let itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      let newCart = [...state.cart];

      if (itemIndex > -1) {
        newCart.splice(itemIndex, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in the basket`
        );
      }

      state.cart = newCart;
    },

    // { remove all}

    actionRemoveAll: (state, action) => {
      state.cart = [];
    },

    // {updateQuantity}

    actionUpdateQuantity: (state, action) => {},
  },
});

export const {
  actionAddProduct,
  actionRemoveAll,
  actionRemoveProduct,
  actionUpdateQuantity,
} = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const allCartItems = (state) => state.cartSlice.cart;
export const selectTotal = (state) =>
  state.cartSlice.cart.reduce((total, item) => total + item.price, 0);

export default cartSlice.reducer;
