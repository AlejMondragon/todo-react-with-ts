import classes from "./App.module.css"
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';

const App = () => {

  return (
    <div>
      <h1 className={classes.title}>Todo List</h1>
      <TodoInput/>
      <Todos/>
    </div>
  );
}

export default App;
