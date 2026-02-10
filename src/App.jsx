import { useState } from "react";
import Header from './components/Header.jsx';
import State from './components/States.jsx';
import TodoForm from './components/TodoForm.jsx';
import TodoList from "./components/TodoList.jsx";

import './App.css'

function App() {
  
  //추가
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos(prev => [...prev, newTodo]);
  };

  // 삭제
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // 토글
  const toggleTodo = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 파생값 (state 아님!)
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <>
      <Header />
      <State total={todos.length} completed={completedCount} />
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  )
}

export default App
