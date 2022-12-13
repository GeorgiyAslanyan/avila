import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminState {
  isAuth: boolean
}

const initialState: AdminState = {
    isAuth: true
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true
    },
    logout(state) {
      state.isAuth = false
    }
  },
});

export const {login, logout } = adminSlice.actions;

export default adminSlice.reducer;
