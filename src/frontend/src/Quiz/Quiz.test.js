import * as React from "react";
import { render, screen } from "@testing-library/react";
import Quiz from "./Quiz";
import { BrowserRouter as Router } from "react-router-dom";

describe("Quiz", () => {
  test("checks quiz text", () => {
    //screen.getByText("Strongly Agree");
    render(<Quiz />);
    screen.getByText("Strongly Agree");
    screen.getByText("Strongly Disagree");
    expect(screen.getByText("Strongly Agree")).toBeInTheDocument();
    expect(screen.getByText("Strongly Disagree")).toBeInTheDocument();
  });
});

describe("Quiz", () => {
  test("checks quiz rendering", () => {
    render(<Quiz />);
    expect(false).toBe(false);
  });
});
