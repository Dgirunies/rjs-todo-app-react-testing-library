import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

test("should render the correct amount of incomplete tastks", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("should render 'task' when the number of incomplete tasks is one", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
});

test("should render 'task' when the number of incomplete tasks is one checking if it is truphy", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeTruthy();
});

test("should render 'task' when the number of incomplete tasks is one checking if it is visible", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeVisible();
});

test("should render 'task' when the number of incomplete tasks is one checking if there is a p tag", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toContainHTML("p");
});

test("should render 'task' when the number of incomplete tasks is one checking if the correct text content", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).toHaveTextContent("1 task left");
});

test("should render 'task' when the number of incomplete tasks by getting an element attribute", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement.textContent).toBe("1 task left");
  expect(paragraphElement.textContent).toBe("1 task left");
});
