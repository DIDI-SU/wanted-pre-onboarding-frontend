import React, { createContext, useState } from "react";
export const TokenContext = createContext();
const TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState("");
  return (
    <TokenContext.Provider value={{ userToken, setUserToken, TOKEN }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
