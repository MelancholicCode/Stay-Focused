import { configureStore } from "@reduxjs/toolkit";
import timer from "../components/TimerPage/Timer/timerSlice";

const store = configureStore({
  reducer: {
    timer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;