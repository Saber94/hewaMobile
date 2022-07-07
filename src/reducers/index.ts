import { combineReducers } from '@reduxjs/toolkit';
import demoReducer from './demoReducer';
import tabbarReducer from './tabbarReducer';

export const reducer = combineReducers({
  demo: demoReducer.reducer,
  tabbar: tabbarReducer.reducer,
});
