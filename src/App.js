import { useDispatch, useSelector } from "react-redux";
import { dispatchAddTodo, dispatchDeleteTodo, dispatchHandleChange} from "./redux/counter";


const App = () => {
  const { todos, inputTodo } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(dispatchAddTodo())
    dispatch(dispatchHandleChange(''))
  }

  const handleChange = (e) => {
    dispatch(dispatchHandleChange(e.target.value));
    console.log(todos.length)
  }

  const deleteTodo = (id) => {
    dispatch(dispatchDeleteTodo(id))
  }

  const todoList = todos.length ? (
    todos.map( todo => {
      return(
          <li className="item" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
              <span>{ todo.content }</span>
          </li>
      )
  })
  ) : (
    <p className="text">You have no todos left, Hooray!</p>
  )

    return (
      <div className="container">
        <h1>Mega's Todo List</h1>
        <form onSubmit={handleClick}>
          <input type="text" onChange={handleChange} value={inputTodo}/>
          <button type="submit" className="addBtn">Add To List</button>
        </form>
          <ul>
            {todoList}
          </ul>
      </div>
    );
}

export default App;
