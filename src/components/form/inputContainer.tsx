import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";

import { InputForm } from "./inputForm";
import "./inputContainer.css";

export const InputContainer = () => {
  const {
    state: { expenseState },
    setExpenseState,
  } = useContext(GlobalContext);

  return (
    <>
      <div className="inputContainer">
        <div className="income-expense-switch">
          <div
            className={`income ${expenseState && "selected"}`}
            onClick={() => setExpenseState(true)}>
            <h1>Income</h1>
          </div>
          <div
            className={`expense ${!expenseState && "selected"}`}
            onClick={() => setExpenseState(false)}>
            <h1>Expense</h1>
          </div>
        </div>
        <InputForm />
      </div>
    </>
  );
};
