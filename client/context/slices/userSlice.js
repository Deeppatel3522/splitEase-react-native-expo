import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/client";

// Async thunk to fetch users from backend
const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await api.get('/users');
  return response.data;
});

const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchUsers.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.list = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
})

export default userSlice.reducer;
export { fetchUsers };