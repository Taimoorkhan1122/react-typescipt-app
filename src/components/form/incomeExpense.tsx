import { useContext } from "react";
import { GlobalContext, transactionTypes } from "../../context/GlobalProvider";

export const IncomExpense = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext);

  let amounts = transactions.map((item: transactionTypes) => item.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // expense always in Positive
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  console.log("income expense ", expense);

  return (
    <div className="incomeExpense">
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            ${income}
          </p>
        </div>

        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {expense}
          </p>
        </div>
      </div>
    </div>
  );
};
