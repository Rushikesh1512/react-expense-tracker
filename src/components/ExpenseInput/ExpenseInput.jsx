import { addExpenseAction } from "Store/Expense/Expense-slice";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

export function ExpenseInput(props) {
  const [price,setprice]=useState();
  const [expenseName,SetExpenseName]=useState();

  const dispatch=useDispatch();
  function submit(e){
     e.preventDefault();
     dispatch(addExpenseAction({price:Number.parseFloat(price),name:expenseName}));
   
  }
  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
            onChange={(e)=>{SetExpenseName(e.target.value)}}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            onChange={(e)=>{setprice(e.target.value)}}

          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
