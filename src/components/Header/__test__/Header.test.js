import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/My header/i);
  expect(headingElement).toBeInTheDocument();
});

test("should render an heading role", () => {
  render(<Header />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});

// test("should render an heading role with the text passed on title prop", () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });

test("should render an h1 role with the title `Header` on it", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

test("should render an h1 role with a test id of `header-1` on it", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// FIND BY

test("should render same text passed into title prop (using findBy)", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/My header/i);
  expect(headingElement).toBeInTheDocument();
});

// Query By

test("expects not to find a dog text in the document", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dog/i);
  expect(headingElement).not.toBeInTheDocument();
});

test("expects not to find a dog text in the document", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(1);
});
