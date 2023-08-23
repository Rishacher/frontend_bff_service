import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result: null,
  isLoading: false,
  error: null,
};

const pvtSlice = createSlice({
  name: 'pvt',
  initialState,
  reducers: {
    sendPvtDataStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    sendPvtDataSuccess(state, action) {
      state.result = action.payload;
      state.isLoading = false;
    },
    sendPvtDataFailure(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { sendPvtDataStart, sendPvtDataSuccess, sendPvtDataFailure } = pvtSlice.actions;

export default pvtSlice.reducer;
