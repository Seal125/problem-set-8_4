import React, {useState} from "react";
import BoardContext from "./BoardContext";

const BoardContextProvider = ({ children }) => {
  const [turn, setTurn] = useState("X");
  const [boardState, setBoardState] = useState([]);
  const [history, setHistory] = useState([]);
  const [step, setStep] = useState(0);

  const value = {
    turn,
    setTurn,
    boardState,
    setBoardState,
    history,
    setHistory,
    step,
    setStep,
  }

  return (
      <BoardContext.Provider value={value}>
        {children}
      </BoardContext.Provider>
  )
};

export default BoardContextProvider;
