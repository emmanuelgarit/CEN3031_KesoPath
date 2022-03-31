import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils";
import Navbar from "./Navbar";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<Navbar />", () => {
  it("renders without crashing", () => {
    act(() => {
      render(<Navbar />, container);
    });
  });
});
