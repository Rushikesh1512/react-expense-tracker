const { createSlice } = require("@reduxjs/toolkit");

export const expenseSlice=createSlice({
  name:'expenseSlice',
  initialState:{
      income:1000,
      expenselist:[]
    },
   reducers:{
       addExpenseAction:(currentSlice,action)=>{
        currentSlice.expenselist.push(action.payload)
        },
        setIncomAction:(currentSlice,action)=>{
        currentSlice.income=action.payload;
        }

   }

})
export const {addExpenseAction,setIncomAction}=expenseSlice.actions;