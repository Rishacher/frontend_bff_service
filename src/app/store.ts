import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
// import formReducer from "./slices/formSlice";


export const store = configureStore({
  reducer: {
    // field: fieldReducer;
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

