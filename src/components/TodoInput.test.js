import TodoInput from "./TodoInput";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe('Todo input box', () => {
  test("button is disabled if empty.", () => {
    render(<TodoInput/>);

    userEvent.type(screen.getByPlaceholderText("Type a task to do..."), " ");

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test("button is enabled if not empty", () => {
    render(<TodoInput/>);

    userEvent.type(screen.getByPlaceholderText("Type a task to do..."), "read");

    expect(screen.getByRole('button')).toBeEnabled();
  })
});