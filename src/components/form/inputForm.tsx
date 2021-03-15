import React, { useState } from "react";
import { useContext } from "react";
import { GlobalContext, transactionTypes } from "../../context/GlobalProvider";

export const InputForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const {
    state: { expenseState },
    addTransaction,
  } = useContext(GlobalContext);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction: transactionTypes = {
      id: Math.floor(Math.random() * 100000),
      text: text,
      amount: expenseState ? amount : amount * -1,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  return (
    <form className="transaction-form" onSubmit={onSubmit}>
      <div className="input-fields">
        <div className="description">
          <label data-testid="add-label" htmlFor="description">
            Add transaction details
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter descriptions"
          />
        </div>
        <div className="amount">
          <label htmlFor="amount">Transaction amount</label>
          <div className="amount-curreny">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
              placeholder="$ 1000"
              id="currency"
            />
            <select name="currency">
              <option value="USD">USD</option>
              <option value="PKR">PKR</option>
              <option value="PKR">EURO</option>
            </select>
          </div>
        </div>
      </div>
      <button className="addtransaction">Add Transaction</button>
    </form>
  );
};
