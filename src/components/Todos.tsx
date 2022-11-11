import { useContext } from "react";
import Todo from "./Todo";
import classes from "./Todos.module.css"
import TodosContext from "../store/todos-context"
import { AnimatePresence } from 'framer-motion'


const Todos = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes["list-items"]}>
      <AnimatePresence>
        {todosCtx.todos.map((todo) => (
          <Todo 
            key={todo.id}
            item={todo.text}
            id={todo.id}
          />
        ))}
        </AnimatePresence>
      </ul>
  )
}

export default Todos
