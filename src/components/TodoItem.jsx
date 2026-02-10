import './TodoItem.css'

function TodoItem ({ todos, deleteTodo, toggleTodo }){

  return (
    <div className={`todo_item ${todos.completed ? 'done' : ''}`}>
      <label>
        <input type="checkbox" checked={todos.completed} onChange={() => toggleTodo(todos.id)}/>
        <i className="fa-solid fa-check"></i>
      </label>
      <p>{todos.text}</p>
      <button type="button" className="btn_delete" onClick={() => deleteTodo(todos.id)}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
    </div>
  );
}

export default TodoItem;