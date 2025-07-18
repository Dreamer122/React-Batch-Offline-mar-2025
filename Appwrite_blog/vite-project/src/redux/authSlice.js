
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,
  isLoggedIn: localStorage.getItem("user")?true:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
