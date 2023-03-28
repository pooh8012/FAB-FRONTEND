// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     // addToCart: (state, action) => {
//     //   const itemExits = state.find((item) => item.id === action.payload.id);
//     //   if (itemExits) {
//     //     itemExits.quantity++;
//     //   } else {
//     //     state.push({ ...action.payload, quantity: 1 });
//     //   }
//     // },
//     addToCart: (state, action) => {
//       // const { id } = action.payload;
//       // const item = state.find((item) => item.id === id);
//       // if (item) {
//       //   item.quantity++;
//       // } else {
//       //   state.push({ ...action.payload, quantity: 1 });
//       // }
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (itemIndex >= 0) {
//         state.cartItems[itemIndex].cartQuantity += 1;
//       } else {
//         const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
//         state.cartItems.push(tempProduct);
//       }
//     },

//     // incrementQuantity: (state, action) => {
//     //   const item = state.find((item) => item.id === action.payload);
//     //   item.quantity++;
//     // },
//     // decrementQuantity: (state, action) => {
//     //   const item = state.find((item) => item.id === action.payload);
//     //   if (item.quantity === 1) {
//     //     const index = state.findIndex((item) => item.id === action.payload);
//     //     state.splice(index, 1);
//     //   } else {
//     //     item.quantity--;
//     //   }
//     // },
//     incrementQuantity: (state, action) => {
//       const { id } = action.payload;
//       const item = state.find((item) => item.id === id);
//       if (item) {
//         item.quantity++;
//       }
//     },
//     decrementQuantity: (state, action) => {
//       const { id } = action.payload;
//       const item = state.find((item) => item.id === id);
//       if (item) {
//         if (item.quantity === 1) {
//           const index = state.findIndex((item) => item.id === id);
//           state.splice(index, 1);
//         } else {
//           item.quantity--;
//         }
//       }
//     },

//     removeFromCart: (state, action) => {
//       const index = state.findIndex((item) => item.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// export const cartReducer = cartSlice.reducer;

// export const {
//   addToCart,
//   incrementQuantity,
//   decrementQuantity,
//   removeFromCart,
// } = cartSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.name === action.payload.name
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;
