import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the quiz title", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /how well do you know indian capitals/i })).toBeInTheDocument();
});