import React, { useContext } from 'react'
import classes from "./Todo.module.css"
import TodosContext from "../store/todos-context"
import { motion } from 'framer-motion'

const todoVariants = {
  hidden: {
    opacity: 0, 
    x: '-100vw'
  },
  visible: {
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      mass: 0.5,
    }
  },
  exit: {
    opacity: 0, 
    x: '100vw',
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.03,
    backgroundColor: '#ffa319',
    transition: {
      duration: 0.4,
      yoyo: Infinity,
    }
  }
}

type TodoProps = { 
  item: string,
  id: string,
}

const Todo = (props: TodoProps) => {
  const todoCtx = useContext(TodosContext);

  const removeTodoHandler = () => {
    todoCtx.removeTodo(props.id)
  }

  return (
    <motion.li className={classes["list-item"]} onClick={removeTodoHandler}
      key={props.id}
      variants={todoVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      whileHover='hover'
      >
      {props.item}
    </motion.li>
  )
}

export default Todo
