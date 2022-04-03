import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Home page", () => {
  render(<App />);
  const divElement = screen.getByText(/Budget/i);
  expect(divElement).toBeInTheDocument();
});
