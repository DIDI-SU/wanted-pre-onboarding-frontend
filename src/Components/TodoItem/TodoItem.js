import React from "react";
import Button from "../button/button";
const TodoItem = ({
  todoList,
  onClick,
  isEdit,
  handleEdit,
  updateTodo,
  setIsEdit,
  setEditedTodo,
  setCompleted,
  completed,
  updateCheckBox,
}) => {
  return todoList.map(({ id, todo, isCompleted }) => {
    const checkSame = parseInt(isEdit) === parseInt(id);

    return (
      <li id={id} key={id + todo}>
        <label>
          {!checkSame ? (
            <>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => {
                  setCompleted((prve) => !prve);
                  setEditedTodo(todo);
                  updateCheckBox(id, completed);
                }}
              />
              <span>{todo}</span>
              <Button
                testid="modify-button"
                title="수정"
                onClick={(e) => handleEdit(e)}
              />
              <Button
                testid="delete-button"
                title="삭제"
                onClick={onClick}
                isDisabled=""
              />
            </>
          ) : (
            <>
              <input
                data-testid="modify-input"
                placeholder={todo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
              <Button
                testid="submit-button"
                title="제출"
                onClick={() => updateTodo(isEdit, isCompleted)}
                isDisabled=""
              />
              <Button
                testid="cancel-button"
                title="취소"
                onClick={() => setIsEdit("")}
                isDisabled=""
              />
            </>
          )}
        </label>
      </li>
    );
  });
};

export default TodoItem;
