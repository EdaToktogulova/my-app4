import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
   name: "counter",
   initialState: {
      number: 0,
   },
   reducers: {
      increment: function(store) {
         // store.number = store.number + 1;
         // store.number += 1;
         store.number ++;
      },
   },
});

export default counterSlice.reducer;
