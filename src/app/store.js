import { configureStore } from "@reduxjs/toolkit";
import conterReducer from "../features/fetch/setTokenSlice";

export default configureStore({
  reducer: {
    counter: conterReducer
  }
});
