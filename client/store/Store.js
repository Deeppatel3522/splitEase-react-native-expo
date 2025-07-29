import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../context/slices/userSlice";
import groupReducer from "../context/slices/groupSlice";
import expenseReducer from "../context/slices/expenseSlice";


const store = configureStore({
    reducer: {
        users: userReducer,   // userReducer is basically the (userSlice.reducer) which we imported 
        groups: groupReducer, 
        expenses: expenseReducer,
    },
});

export default store;