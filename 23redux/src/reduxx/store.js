import {configureStore} from "@reduxjs/toolkit";


import counterReducer from "./slices/counterSlice";
import themeRducer from "./slices/themeSlice";

export const store = configureStore({
  reducer:{
    counter:counterReducer,
    theme:themeRducer
  },
});


