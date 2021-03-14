import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";

import loginForm, { Props } from "../LoginForm";

/*
render: helps render components and returns find helper methods.
fireEvent: is for simulating events on DOM elements.
waitForElement: is useful when waiting for UI changes to occur.
*/
describe("<LoginForm/>", () => {
  test("should display blank test form", async () => {
    // do something
  });
});
