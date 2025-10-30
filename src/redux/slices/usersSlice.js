import { createSlice, nanoid } from '@reduxjs/toolkit';
import { lsGet, lsSet } from '../../utils/storage';

// Registered users (auth purpose)
const initialRegistered = lsGet('registered_users', []);

// App data rows for Dashboard table
const initialRows = lsGet('dashboard_rows', []);


const usersSlice = createSlice({
  name: 'users',
  initialState: {
    registered: initialRegistered, // [{name,email,password}]
    rows: initialRows,             // table data [{id,firstName,lastName,age,dob,gender,phone,email,address}]
    editDraft: null,               // holds row when editing
  },
  reducers: {
    registerUser: (state, action) => {
      state.registered.push(action.payload);
      lsSet('registered_users', state.registered);
    },
    addRow: {
      reducer: (state, action) => {
        state.rows.push(action.payload);
        lsSet('dashboard_rows', state.rows);
      },
      prepare: (data) => ({ payload: { id: nanoid(), ...data } }),
    },
    setEditDraft: (state, action) => {
      state.editDraft = action.payload; // entire row object or null
    },
    updateRow: (state, action) => {
      const idx = state.rows.findIndex(r => r.id === action.payload.id);
      if (idx !== -1) {
        state.rows[idx] = action.payload;
        lsSet('dashboard_rows', state.rows);
      }
      state.editDraft = null;
    },
    deleteRow: (state, action) => {
      state.rows = state.rows.filter(r => r.id !== action.payload);
      lsSet('dashboard_rows', state.rows);
    },
  },
});

export const { registerUser, addRow, setEditDraft, updateRow, deleteRow } = usersSlice.actions;
export default usersSlice.reducer;
