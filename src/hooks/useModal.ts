import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: "",
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, actions) => {
      const { modal } = actions.payload;
      state.modal = modal;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
