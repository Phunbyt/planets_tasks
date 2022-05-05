import React, { createContext, useState } from 'react';

const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  const stateValues = {
    planets,
    setPlanets,
    pageCount,
    setPageCount,
  };
  return (
    <GlobalState.Provider value={stateValues}>{children}</GlobalState.Provider>
  );
};

export default GlobalState;
