import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";


function TodoList ({ todos, deleteTodo, toggleTodo }){

  if(todos.length ===0){
    return <EmptyState />
  }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todos={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      ))}
    </>
  );
}

export default TodoList;