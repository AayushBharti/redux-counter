import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";

export const Store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});

//store is an centralized entity, global state of the project
//where all the states are stored in form of slices(a portion of data)
