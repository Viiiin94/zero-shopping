import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
  enabled: boolean;
}

const initialState: DarkModeState = {
  enabled: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    enableDarkMode: (state) => {
      state.enabled = true;
    },
    disableDarkMode: (state) => {
      state.enabled = false;
    },
    toggleDarkMode: (state) => {
      state.enabled = !state.enabled;
    },
  },
});

export const { enableDarkMode, disableDarkMode, toggleDarkMode } =
  darkModeSlice.actions;
export const darkModeReducer = darkModeSlice.reducer;
