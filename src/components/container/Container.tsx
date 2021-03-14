import { InputContainer } from "../form/inputContainer";
import { Transactions } from "../transactions/transactions";
import "./container.css";

export const Container = () => {
  return (
    <div className="container">
      <Transactions />
      <InputContainer />
    </div>
  );
};
