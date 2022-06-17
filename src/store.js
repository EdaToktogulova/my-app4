import { configureStore } from '@reduxjs/toolkit';
import counterReduser from "./counterSlice";

const store = configureStore ({
   reducer: {
      counter: counterReduser,
   }
});

export default store;