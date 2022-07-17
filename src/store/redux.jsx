import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./postsSlice";

const store = configureStore({
  reducer: {
    postsDisplay: postReducer,
  },
});

export default store;
