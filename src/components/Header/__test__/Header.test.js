import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/My header/i);
  expect(headingElement).toBeInTheDocument();
});

test("should render a heading role", () => {
  render(<Header />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});

test("should render a heading role with the text passed on title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  expect(headingElement).toBeInTheDocument();
});
