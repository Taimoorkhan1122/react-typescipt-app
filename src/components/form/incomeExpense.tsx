import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";

export const IncomExpense = () => {
  // const { transactions } = useContext(GlobalContext);

  // let amounts = transactions.map((item) => item.amount);

  // const income = amounts
  //   .filter((item) => item > 0)
  //   .reduce((acc, item) => (acc += item), 0)
  //   .toFixed(2);

  // // expense always in Positive
  // const expense =
  //   amounts
  //     .filter((item) => item < 0)
  //     .reduce((acc, item) => (acc += item), 0)
  //     .toFixed(2) * -1;

  return (
    <div className="incomeExpense">
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            {/* ${income} */}
            250
          </p>
        </div>

        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {/* {expense} */}
            -500
          </p>
        </div>
      </div>
    </div>
  );
};
