import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
  test("should render an input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type in the input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  test("should have empty input when add button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const buttonElement = screen.getByRole("button", { name: /add/i });
    const inputElement = screen.getByPlaceholderText(/Add a new task here/i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
