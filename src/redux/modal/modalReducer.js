import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModal: false,
  },
  reducers: {
    changeVisibility: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const { changeVisibility } = modalSlice.actions;

export default modalSlice.reducer;
