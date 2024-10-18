import { useState } from "react";
import { generateAnswer } from "./commons/AnswerGenerator";
import Board from "./comps/Board";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState<number[]>(generateAnswer());

  const handleOnRefresh = () => {
    setAnswer(generateAnswer());
  };

  return (
    <>
      <h1>Mastermind</h1>
      <button onClick={handleOnRefresh}>Refresh</button>
      <Board answer={answer} />
    </>
  );
}

export default App;
