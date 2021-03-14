import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";

export const TransactionListLi = () => {
  // const { deleteTransactions } = useContext(GlobalContext);

  // const sign = transaction.amount < 0 ? "-" : "+";

  return (
    // <li className={transaction.amount > 0 ? "plus" : "minus"}>
    // {transaction.text}{" "}
    <span>{/* {sign} ${Math.abs(transaction.amount)} */}</span>
    //  <button
    //   class="fa fa-trash"
    //   onClick={() => deleteTransactions(transaction.id)}></button>
    // </li>
  );
};
