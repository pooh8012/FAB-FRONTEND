// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./cart.slice";

// const reducer = {
//   cart: cartReducer,
// };

// const store = configureStore({
//   reducer,
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";

const store = configureStore({
  reducer: cartReducer,
  // add other reducers here if needed
});

export default store;
