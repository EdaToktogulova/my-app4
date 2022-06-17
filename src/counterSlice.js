import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
   {
      name: "counter", // counter/increment
      initialState: {
         number: 0,
         // name: "",
      },
      reducers: {
         increment: function (store) {
            store.number++;
         },
         decrement: function (store) {
            store.number--;
         },
         reset: function (store) {
            store.number = 0;
         },
         set: function (store, action) {
            store.number = action.payload;
         },
      }
   }
);

export default counterSlice.reducer;