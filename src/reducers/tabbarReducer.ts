import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const tabbarSlice = createSlice({
  name: 'tabbar',
  initialState: {
    activeIndex: 0,
  },
  reducers: {
    setActiveIndex: (state, actions: PayloadAction<number>) => {
      state.activeIndex = actions.payload;
    },
  },
});

export const { setActiveIndex } = tabbarSlice.actions;

export default tabbarSlice;
