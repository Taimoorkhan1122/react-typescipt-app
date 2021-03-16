import React, { createContext, useReducer } from "react";

import { Reducer, ActionTypes } from "./Reducer";

type Props = {
  children: React.ReactNode;
};

// defining payload(transaction) types
export type transactionTypes = {
  id: number;
  text: string;
  amount: number;
};

// defining types for initial state
export type stateTypes = {
  transactions: transactionTypes[];
  incomeExpense: boolean;
  expenseState: boolean;
};

const initialState: stateTypes = {
  transactions: [],
  incomeExpense: true,
  expenseState: true,
};

// creating global context wrapper
export const GlobalContext = createContext({
  state: initialState,
  addTransaction: (t: transactionTypes): void => {},
  deleteTransaction: (id: number) => {},
  setExpenseState: (val: boolean) => {},
});

export const GlobalProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addTransaction = (transaction: transactionTypes) => {
    dispatch({
      type: ActionTypes.ADD,
      payload: transaction,
    });
  };
  const deleteTransaction = (id: number) => {
    dispatch({
      type: ActionTypes.DELETE,
      payload: { id },
    });
  };

  const setExpenseState = (val: boolean) => {
    dispatch({
      type: ActionTypes.SET,
      payload: { val },
    });
  };

  return (
    <GlobalContext.Provider
      value={{ state, addTransaction, deleteTransaction, setExpenseState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
