import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./Expense/Expense-slice";
import { authSlice } from "./Auth/Auth-slice";

const store=configureStore({

    reducer:{
        EXPENSE:expenseSlice.reducer
        
    }
})
export {store}