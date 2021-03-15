import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";
import { transactionTypes } from "../../context/GlobalProvider";

type Props = {
  transaction: transactionTypes;
};

export const TransactionListLi: React.FC<Props> = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {sign} ${Math.abs(transaction.amount)}
      </span>
      <button
        className="fa fa-trash"
        onClick={() => deleteTransaction(transaction.id)}></button>
    </li>
  );
};
