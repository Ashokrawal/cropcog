"use client";

import { createSlice } from "@reduxjs/toolkit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  cart: [],
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // {"add product"}

    actionAddProduct(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;

        //Calculate the subtotal price of each "multiple" product
        const subTotal =
          state.cart[itemIndex].currentPrice *
          state.cart[itemIndex].cartQuantity;
        state.cart[itemIndex].subTotal = subTotal;

        //Notification: Alert an increase in product quantity
        toast.success(`${action.payload.title} added to cart`, {
          autoClose: 800,
          hideProgressBar: true,
          closeOnClick: true,
        });
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1,
          subTotal: action.payload.currentPrice,
        };

        state.cart.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {
          autoClose: 800,
          closeOnClick: true,
          hideProgressBar: true,
        });
      }
    },

    actionIncreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (each) => each.id === action.payload.id
      );

      if (state.cart[itemIndex]) {
        if (state.cart[itemIndex].cartQuantity >= 1) {
          state.cart[itemIndex].cartQuantity += 1;

          const subTotal =
            state.cart[itemIndex].currentPrice *
            state.cart[itemIndex].cartQuantity;
          state.cart[itemIndex].subTotal = subTotal;
        }
      } else {
        toast.error("Click on Add To Cart", {
          autoClose: 800,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
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
      toast.error(``, {
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
      });
    },

    // { remove all}

    actionRemoveAll: (state, action) => {
      state.cart = [];
    },

    // {updateQuantity}

    actionDecreaseQuantity(state, action) {
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cart[itemIndex]) {
        if (state.cart[itemIndex].cartQuantity > 1) {
          state.cart[itemIndex].cartQuantity -= 1;

          //Calculate the subtotal price of each "multiple" product
          const subTotal =
            state.cart[itemIndex].price * state.cart[itemIndex].cartQuantity;
          state.cart[itemIndex].subTotal = subTotal;

          //localStorage: Update state and push to localStorage
        }

        //!: Delete the product from cart if the count is below 1
        else if (state.cart[itemIndex].cartQuantity === 1) {
          const nextCartItems = state.cart.filter(
            (cartItem) => cartItem.id !== action.payload.id
          );
          state.cart = nextCartItems;

          //Notification: Alert a product remove in product quantity
          toast.error(`Removed ${action.payload.title}`, {
            autoClose: 800,
            hideProgressBar: true,
            closeOnClick: true,
          });
        }
      } else {
        toast.error(`This product CANNOT BE FOUND in the cart!`, {
          autoClose: 800,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
    },
  },
});

export const {
  actionAddProduct,
  actionRemoveAll,
  actionRemoveProduct,
  actionDecreaseQuantity,
  actionIncreaseQuantity,
} = cartSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const allCartItems = (state) => state.cartSlice.cart;
export const selectTotal = (state) => {
  const cartTotal = state.cartSlice.cart.reduce(
    (total, item) => total + item.subTotal,
    0
  );
  if (cartTotal >= 499) {
    return cartTotal;
  } else {
    return cartTotal + 99;
  }
};

export default cartSlice.reducer;
