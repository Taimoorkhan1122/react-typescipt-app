import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from "react";

import { Reducer, ActionTypes, transactionActions } from "./Reducer";

type Props = {
  children: React.ReactNode;
};

export type transactionTypes = {
  id: number;
  text: string;
  amount: number;
};

export type stateTypes = {
  transactions: transactionTypes[];
  incomeExpense: boolean;
  expenseState: boolean;
};
// type expenseState = [boolean, Dispatch<SetStateAction<boolean>> ];

const initialState: stateTypes = {
  transactions: [],
  incomeExpense: true,
  expenseState: true,
};

export const GlobalContext = createContext({
  state: initialState,
  addTransaction: (t: transactionTypes): void => {},
  deleteTransaction: (id: number): void => {},
  setExpenseState: (val: boolean): void => {},
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
  console.log(state);

  return (
    <GlobalContext.Provider
      value={{ state, addTransaction, deleteTransaction, setExpenseState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
