import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/client";

// Async thunk to fetch groups 
const fetchGroups = createAsyncThunk('groups/fetchGroups', async () => {
  const response = await api.get('/groups');
  return response.data;
});

const groupSlice = createSlice({
    name: 'groups',
    initialState: {
        list: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchGroups.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchGroups.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.list = action.payload;
        })
        .addCase(fetchGroups.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default groupSlice.reducer;
export { fetchGroups };