"use client"

import { createSlice } from "@reduxjs/toolkit";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getCartItemsFromLocalStorage = ( ) => {
  if(typeof window !== "undefined") {
    const itemsFromLocalStorage = localStorage.getItem('cart');
    return itemsFromLocalStorage ? JSON.parse(itemsFromLocalStorage) : []
  }else{
    return []
  }
}

const initialState = {
  cart: getCartItemsFromLocalStorage(),
  totalAmount: 0,
};



export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // {"add product"}

    actionAddProduct: (state, action) => {
      const item = state.cart.find((each)=> each.id === action.payload.id);
      if(item) {
        item.quantity += action.payload.quantity
        
      }else{
        state.cart.push(action.payload)
        
      }
      const notify = () => toast.success(`Product Added To Cart`,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // theme: "dark",
      });
        notify()
      localStorage.setItem('cart',JSON.stringify(state.cart))
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

      const notify = () =>toast.error("Product Removed")
        notify()
      localStorage.setItem('cart',JSON.stringify(state.cart))
    },

    // { remove all}

    actionRemoveAll: (state, action) => {
      state.cart = [];
      localStorage.setItem('cart',JSON.stringify(state.cart))
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
