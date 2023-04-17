import React, { useContext, useEffect, useState } from "react";
import TodoItem from "../../Components/TodoItem/TodoItem";
import Input from "../../Components/Input/Input";
import { TokenContext } from "../../Context/TokenContext/TokenContext";
import axios from "axios";
import Button from "../../Components/button/button";
const url = "https://www.pre-onboarding-selection-task.shop";
//testid, type, handleValue, className
// /testid, title, onClick, className

const MainToDo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState("");
  const [completed, setCompleted] = useState(false);

  const [editedTodo, setEditedTodo] = useState("");

  const { TOKEN } = useContext(TokenContext);

  useEffect(() => {
    getItem();
  }, []);

  const addTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const sumbmitTodo = async () => {
    try {
      const response = await axios.post(
        url + "/todos",
        { todo: newTodo },
        {
          headers: {
            Authorization: "Bearer " + TOKEN.access_token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      getItem();
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async () => {
    try {
      const response = await axios.get(url + "/todos", {
        headers: {
          Authorization: "Bearer " + TOKEN.access_token,
          "Content-Type": "application/json",
        },
      });
      setLoading(true);
      setTodoList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (e) => {
    const { id } = e.target.parentElement.parentElement;
    try {
      const response = await axios.delete(url + `/todos/${id}`, {
        headers: {
          Authorization: "Bearer " + TOKEN.access_token,
          "Content-Type": "application/json",
        },
      });
      setLoading(true);
      getItem();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e) => {
    const { id } = e.target.parentElement.parentElement;
    setIsEdit(id);
  };

  const updateTodo = async (id, isCompleted) => {
    try {
      const response = await axios.put(
        url + `/todos/${id}`,
        {
          todo: editedTodo,
          isCompleted: isCompleted,
        },
        {
          headers: {
            Authorization: "Bearer " + TOKEN.access_token,
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(true);
      getItem();
      setIsEdit("");
      console.log(editedTodo, isCompleted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Input testid="new-todo-input" type="text" handleValue={addTodo} />
      <Button testid="new-todo-add-button" onClick={sumbmitTodo} title="추가" />
      <ul>
        {isLoading && (
          <TodoItem
            todoList={todoList}
            onClick={deleteItem}
            isEdit={isEdit}
            editedTodo={editedTodo}
            setEditedTodo={setEditedTodo}
            setIsEdit={setIsEdit}
            handleEdit={handleEdit}
            updateTodo={updateTodo}
            completed={completed}
            setCompleted={setCompleted}
          />
        )}
      </ul>
    </main>
  );
};

export default MainToDo;
