import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../components/header/Header";

test("should display blank test form", async () => {
  render(<Header />);
  const linkElement = screen.getByText(/Expense Tracker App/i);
  expect(linkElement).toBeInTheDocument();
});
