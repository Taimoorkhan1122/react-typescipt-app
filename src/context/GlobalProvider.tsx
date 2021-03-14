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
  transactions: [transactionActions] | [];
  incomeExpense: boolean;
  expenseState?: [any, Dispatch<SetStateAction<any>>];
};

const initialState: stateTypes = {
  transactions: [],
  incomeExpense: true,
};

export const GlobalContext = createContext({
  state: initialState,
  addTransaction: (t: transactionTypes): void => {},
  deleteTransaction: (id: number): void => {},
});

export const GlobalProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  initialState.expenseState = useState(false);
  console.log(dispatch);

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
  console.log(state);

  return (
    <GlobalContext.Provider
      value={{ state, addTransaction, deleteTransaction }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
