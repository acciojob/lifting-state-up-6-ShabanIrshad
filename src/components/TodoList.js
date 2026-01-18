import React from "react";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span>{todo.text}</span>

            {!todo.complete && (
              <button onClick={() => handleComplete(index)}>
                Complete
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
