import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import { setIncomAction } from "Store/Expense/Expense-slice";

export function IncomeInput(props) {
  const income=useSelector(store=>store.EXPENSE.income);
  const dispatch=useDispatch();
  function setIncome(e){
   dispatch(setIncomAction(Number.parseFloat(e.target.value)));

   }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input onChange={setIncome} defaultValue={income} type="number" className="form-control" placeholder="Ex: 3000" />
      </div>
    </div>
  );
}
