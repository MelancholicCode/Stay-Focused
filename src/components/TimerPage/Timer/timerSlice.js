import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timerId: null,
  timerCount: null,
  timerActive: false,
  currentModeName: 'focus',
  focus: 30,
  rest: 5,
  longRest: 15
}

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeRange: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    changeMode: (state, action) => {
      state.currentModeName = action.payload;
    },
    setTimerActive: (state, action) => {
      state.timerActive = action.payload;
    },
    setTimerCount: (state, action) => {
      state.timerCount = action.payload;
    },
    setTimerId: (state, action) => {
      state.timerId = action.payload;
    }
  },
})

const {reducer, actions} = timerSlice;

export default reducer;
export const {
  changeRange,
  changeMode,
  setTimerActive,
  setTimerCount,
  setTimerId
} = actions;