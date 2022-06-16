

export const counterSlice = {
   name: "counter",
   initialState: 0,
   reducer: {
      increment: (store) => {
         return store + 1;
      },
      decrement: store => {
         return store - 1;
      }
   }
}

export const {increment, decrement } =counterSlice.actions;
