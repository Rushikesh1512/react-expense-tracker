import { useReducer } from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";

export function ExpenseTotal(props) {
  const expenseList=useSelector(store=>store.EXPENSE.expenselist);
  const income=useSelector(store=>store.EXPENSE.income);

  console.log('expenseList',expenseList);
  var total = 0;
  const totalExpense=expenseList?.map(element => {   
    total += element.price;
  })
  console.log('totalExpense',total);
  const remainingMoney=income-total;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{total}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney}</div>
      </div>
    </div>
  );
}
