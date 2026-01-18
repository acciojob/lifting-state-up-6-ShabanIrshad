import { useState } from "react";
import React from "react";
import './../styles/App.css';
import TodoList from "./TodoList";

const App = () => {
  const [todos,setTodos]=useState([
    {
      text:'Learn React',
      complete:false
    },
    {
      text:'Build React App',
      complete:false
    },
    {
      text:'Deploye React App',
      complete:false
    }
  ]);

 
  const handleComplete = (index) => {
  const updatedTodos = todos.map((todo, i) =>
    i === index ? { ...todo, complete: !todo.complete } : todo
  );

  setTodos(updatedTodos);
};


  return (
    <div>
       <h1>Parent Component</h1>
       <TodoList todos={todos} handleComplete={handleComplete}/>
    </div>
  )
}

export default App
