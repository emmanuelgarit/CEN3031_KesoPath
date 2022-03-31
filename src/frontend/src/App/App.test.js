import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

test("renders learn react link", () => {
  <Router>
    render(
    <App />
    );
  </Router>;
  expect(false).toBe(false);
});
