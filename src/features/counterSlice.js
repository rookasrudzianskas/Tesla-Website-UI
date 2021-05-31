import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {

    },
    decrement: (state) => {
      state.value -= 1;
    },

  },

});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;


export default counterSlice.reducer;
