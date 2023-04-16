import React from "react";
import TodoItem from "../../Components/TodoItem/TodoItem";

const MainToDo = () => {
  return (
    <main>
      <input data-testid="new-todo-input" />
      <button data-testid="new-todo-add-button">추가</button>
      <ul>
        <TodoItem />
        <TodoItem />
      </ul>
    </main>
  );
};

export default MainToDo;
