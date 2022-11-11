import React, { useState } from "react"
import TodoModel from "../models/TodoModel"

type todoContextAlias = {
  todos: TodoModel[];
  addTodo: (input: string) => void;
  removeTodo: (index: string) => void;
}

const TodosContext = React.createContext<todoContextAlias>({
  todos: [],
  addTodo: (input: string) => {},
  removeTodo: (index: string) => {}
})

export const TodosContextProvider = (props: {children?: React.ReactNode}) => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const addTodoHandler = (input: string) => {
    const newTodo = new TodoModel(input)
    setTodos(prevTodos => {
      return prevTodos.concat(newTodo)
    })
  }

  const removeTodoHandler = (index: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== index)
    })
  }

  const contextValue: todoContextAlias = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>
    {props.children}
  </TodosContext.Provider>
}

export default TodosContext