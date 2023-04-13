import React, { createContext, useState } from "react";
export const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [userToken, setUserToken] = useState("");
  return (
    <TokenContext.Provider value={{ userToken, setUserToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
