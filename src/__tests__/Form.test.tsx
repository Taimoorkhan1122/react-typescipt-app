import React from "react";
import { render, screen } from "@testing-library/react";
import { InputForm } from "../components/form/inputForm";

test("contains add transaction label", () => {
  const { getByText } = render(<InputForm />);
  const element = getByText(/Add transaction details/i);
  expect(element).toBeInTheDocument();
  console.log(element.innerHTML);
});
