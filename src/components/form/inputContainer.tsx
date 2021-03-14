import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalProvider";

import { InputForm } from "./inputForm";
import "./inputContainer.css";

export const InputContainer = () => {
  const { state } = useContext(GlobalContext);
  const [expense, setExpense] = useState(true);

  return (
    <>
      <div className="inputContainer">
        <div className="income-expense-switch">
          <div
            className={`income ${expense && "selected"}`}
            onClick={() => setExpense(true)}>
            <h1>Income</h1>
          </div>
          <div
            className={`expense ${!expense && "selected"}`}
            onClick={() => setExpense(false)}>
            <h1>Expense</h1>
          </div>
        </div>
        <InputForm />
      </div>
    </>
  );
};
