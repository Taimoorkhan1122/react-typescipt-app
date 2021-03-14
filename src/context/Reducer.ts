import { stateTypes } from "./GlobalProvider";

export enum ActionTypes {
  ADD = "ADD_TRANSACTION",
  DELETE = "DELETE_TRANSACTION",
}

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: M[Key] };
};

export type payload = {
  [ActionTypes.ADD]: {
    id: number;
    text: string;
    amount: number;
  };
  [ActionTypes.DELETE]: {
    id: number;
  };
};

export type transactionActions = ActionMap<payload>[keyof ActionMap<payload>];

export const Reducer = (state: stateTypes, action: transactionActions) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        transactoins: [action.payload, ...state.transactions],
      };
    case ActionTypes.DELETE:
      return { ...state };
    default:
      return state;
  }
};
