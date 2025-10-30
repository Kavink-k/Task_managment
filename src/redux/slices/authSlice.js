import { createSlice } from '@reduxjs/toolkit';
import { lsGet, lsSet, lsRemove } from '../../utils/storage';

const initialState = {
  currentUser: lsGet('auth_current_user', null), // { email }
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = { email: action.payload.email };
      lsSet('auth_current_user', state.currentUser);
    },
    logout: (state) => {
      state.currentUser = null;
      lsRemove('auth_current_user');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
