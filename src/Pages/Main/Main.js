import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <button>
        <Link to="/signin">로그인하고 todo만들러가기</Link>
      </button>
    </main>
  );
};

export default Main;
