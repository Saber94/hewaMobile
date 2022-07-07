/**
 * demo reducer
 */

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const demoReducer = createSlice({
  name: 'demo-counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state, actions: PayloadAction<number>) => {
      state.value += actions.payload || 1;
    },
    decremented: (state, actions: PayloadAction<number>) => {
      state.value -= actions.payload || 1;
    },
  },
});

export const { incremented, decremented } = demoReducer.actions;
export default demoReducer;
