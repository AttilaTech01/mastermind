import Board from "./comps/Board";
import "./App.css";

// Game Params
const numberOfRows = 12;

function App() {
  return (
    <>
      <h1>Mastermind</h1>
      <Board nbOfRows={numberOfRows} />
    </>
  );
}

export default App;
