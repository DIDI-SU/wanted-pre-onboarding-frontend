import React from "react";
import { Link, useNavigate } from "react-router-dom";
const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
const Main = () => {
  const nav = useNavigate();

  const checkLogin = () => {
    if (TOKEN) {
      nav("/todo");
    } else nav("/signin");
  };
  return (
    <main className=" flex justify-center  items-center my-auto ">
      <section className="flex justify-center  items-center flex-col">
        <h1 className=" font-semibold text-4xl py-3">오늘의 할일 작성하기</h1>
        <div className=" my-2">
          <span>로그인을 해야 할일을 작성할 수있어요</span>
        </div>
        <div className=" flex justify-evenly items-center m-2">
          <button
            className=" bg-slate-500 p-9 rounded-md mx-2"
            onClick={() => {
              checkLogin();
            }}
          >
            <Link to="/todo">할일적으러가기</Link>
          </button>
          <button
            className=" bg-slate-500 p-9 rounded-md"
            onClick={() => {
              checkLogin();
            }}
          >
            <Link to="/signin">로그인하고 할일적으러가기</Link>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
