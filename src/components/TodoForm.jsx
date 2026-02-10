import { useState, useRef } from "react";
import './TodoForm.css';

function TodoForm ({ addTodo }){

  const [text, setText] = useState("") ;
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!text.trim()) return;

    addTodo(text);
    setText("");
    inputRef.current.focus();
  }

  return (
    <form className="todo_form_area" onSubmit={handleSubmit}>
      <input type="text" placeholder="할 일을 입력하세요." value={text} onChange={(e) => setText(e.target.value)} ref={inputRef} />
      <button type="submit" className={!text.trim() ? "" : "active"}><i className="fa-solid fa-plus"></i></button>
    </form>
  );
}

export default TodoForm;