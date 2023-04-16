import React from "react";
import Button from "../button/button";
//testid, title, onClick, className

const TodoItem = () => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>TODO 2</span>
        <Button testid="modify-button" title="수정" />
        <Button testid="delete-button" title="삭제" />
      </label>
    </li>
  );
};

export default TodoItem;
