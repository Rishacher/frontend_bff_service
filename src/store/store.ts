import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import formReducer from "./slices/initialDataSlice";


export const store = configureStore({
  reducer: {
    form: formReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

