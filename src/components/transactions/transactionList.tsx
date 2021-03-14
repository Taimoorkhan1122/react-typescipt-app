import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import { TransactionListLi } from "./transactionListLi";

export const TransactionList = () => {
  // const { transactions } = useContext(GlobalContext);
  return (
    <div className="transaction-list">
      {/* <!-- income list here --> */}
      <div className="history">
        <ul className="list" id="list">
          {/* {transactions.map((transaction) => (
            <TransactionListLi key={transaction.id} transaction={transaction} />
          ))} */}
        </ul>
      </div>
    </div>
  );
};
