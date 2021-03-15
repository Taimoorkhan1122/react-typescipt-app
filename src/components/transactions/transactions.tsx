import { useContext } from "react";
import { GlobalContext, transactionTypes } from "../../context/GlobalProvider";

import { TransactionList } from "../transactions/transactionList";
import { IncomExpense } from "../form/incomeExpense";
import "./transactions.css";

export const Transactions = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext);

  let amount = transactions.map((item: transactionTypes) => item.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="transactions">
      <div className="balance">
        <h1> Balance</h1>
        <h4 id="balance">${total}</h4>
      </div>
      <TransactionList />
      <IncomExpense />
    </div>
  );
};
