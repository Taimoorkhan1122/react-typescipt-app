import { useContext } from "react";
import { GlobalContext, transactionTypes } from "../../context/GlobalProvider";
import { TransactionListLi } from "./transactionListLi";

export const TransactionList = () => {
  const {
    state: { transactions },
  } = useContext(GlobalContext);
  return (
    <div className="transaction-list">
      {/* <!-- income list here --> */}
      <div className="history">
        <ul className="list" id="list">
          {transactions.map((transaction: transactionTypes) => (
            <TransactionListLi key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      </div>
    </div>
  );
};
