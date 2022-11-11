import React, { useState, useContext } from "react"
import classes from "./TodoInput.module.css"
import TodosContext from "../store/todos-context"

const TodoInput = () => {
  const todosCtx = useContext(TodosContext)
  const [todoInput, setTodoInput] = useState('')

  const todoInputChangeHandler = (event: React.ChangeEvent<any>) => {
    setTodoInput(event.target.value)
  }

  const submitHandler = (event: React.FormEvent<any>) => {
    event.preventDefault();

    todosCtx.addTodo(todoInput);
    setTodoInput('')
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input type="text" placeholder="Type a task to do..." value={todoInput} onChange={todoInputChangeHandler} />
      <button disabled={todoInput.trim().length === 0}>Add Todo</button>
    </form>
  )
}

export default TodoInput
