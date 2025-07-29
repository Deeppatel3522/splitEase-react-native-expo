import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/client";

// Async thunk to fetch expenses from backend
const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  const response = await api.get('/expenses');
  return response.data;
});

const expenseSlice = createSlice({
    name: 'expenses',
    initialState: {
        list: [],
        status: 'idle', // idle | loading | succeeded | failed
        error: null,
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchExpenses.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchExpenses.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.list = action.payload;
        })
        .addCase(fetchExpenses.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    }
})
export default expenseSlice.reducer;
export { fetchExpenses };