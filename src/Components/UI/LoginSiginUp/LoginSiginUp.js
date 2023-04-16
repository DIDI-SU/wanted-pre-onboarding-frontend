import React from "react";

const LoginSiginUp = ({ children }) => {
  return (
    <section className="flex  justify-center  items-center flex-col max-w-xl m-auto bg-slate-300 mt-44 ">
      <div className=" flex flex-col  items-center p-3">{children}</div>
    </section>
  );
};

export default LoginSiginUp;
