import React, { useEffect, useState } from "react";
import TodoItem from "../../Components/TodoItem/TodoItem";
import Input from "../../Components/Input/Input";

import axios from "axios";
import Button from "../../Components/button/button";
import { useLocation } from "react-router-dom";

const url = "https://www.pre-onboarding-selection-task.shop";

const MainToDo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState("");
  const [completed, setCompleted] = useState(false);
  const [editedTodo, setEditedTodo] = useState("");
  const loaction = useLocation();

  useEffect(() => {
    const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
    if (TOKEN) {
      getItem();
    } else {
      loaction("/signin");
    }
  }, []);

  const addTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const sumbmitTodo = async () => {
    try {
      const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
      const response = await axios.post(
        url + "/todos",
        { todo: newTodo },
        {
          headers: {
            Authorization: "Bearer " + TOKEN,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setLoading(true);
        getItem();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async () => {
    try {
      const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
      const response = await axios.get(url + "/todos", {
        headers: {
          Authorization: "Bearer " + TOKEN,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        console.log(editedTodo);
        setLoading(true);
        setTodoList(response.data);
        setNewTodo("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (e) => {
    const { id } = e.target.parentElement.parentElement;
    try {
      const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
      const response = await axios.delete(url + `/todos/${id}`, {
        headers: {
          Authorization: "Bearer " + TOKEN,
          "Content-Type": "application/json",
        },
      });
      setLoading(true);
      if (response.status === 204) {
        getItem();
      }
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
      const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
      const response = await axios.put(
        url + `/todos/${parseInt(id)}`,
        {
          todo: editedTodo,
          isCompleted: isCompleted,
        },
        {
          headers: {
            Authorization: "Bearer " + TOKEN,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setEditedTodo("");
        setLoading(true);
        getItem();
        setIsEdit("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateCheckBox = async (id, isCompleted) => {
    try {
      const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
      const response = await axios.put(
        url + `/todos/${parseInt(id)}`,
        {
          todo: editedTodo,
          isCompleted: isCompleted,
        },
        {
          headers: {
            Authorization: "Bearer " + TOKEN,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setLoading(true);
        getItem();
        setIsEdit("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Input
        testid="new-todo-input"
        type="text"
        handleValue={addTodo}
        value={newTodo}
      />
      <Button
        testid="new-todo-add-button"
        onClick={sumbmitTodo}
        title="추가"
        isDisabled=""
      />
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
            updateCheckBox={updateCheckBox}
            setCompleted={setCompleted}
          />
        )}
      </ul>
    </main>
  );
};

export default MainToDo;
