import { useState } from "react";
import { generateAnswer } from "./commons/AnswerGenerator";
import Modal from "./commons/UI/Modal/Modal";
import Board from "./comps/Board";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState<number[]>(generateAnswer());
  const [showRefreshModal, setShowRefreshModal] = useState<boolean>(false);
  const [showWinModal, setShowWinModal] = useState<boolean>(false);
  const [showDefeatModal, setShowDefeatModal] = useState<boolean>(false);

  const toggleRefreshModal = () => {
    setShowRefreshModal(!showRefreshModal);
  };

  const handleRefresh = () => {
    setAnswer(generateAnswer());
    toggleRefreshModal();
  };

  const toggleWinModal = () => {
    setShowWinModal(!showWinModal);
  };

  const handleWin = () => {
    setAnswer(generateAnswer());
    toggleWinModal();
  };

  const toggleDefeatModal = () => {
    setShowDefeatModal(!showDefeatModal);
  };

  const handleDefeat = () => {
    setAnswer(generateAnswer());
    toggleDefeatModal();
  };

  return (
    <>
      <h1>Mastermind</h1>
      <button onClick={toggleRefreshModal}>Refresh</button>
      <Board
        answer={answer}
        onDefeat={toggleDefeatModal}
        onWin={toggleWinModal}
      />
      <Modal
        isOpen={showRefreshModal}
        title="Warning"
        onClose={toggleRefreshModal}
        onConfirm={handleRefresh}
      >
        <p>Are you sure you want to refresh your answers ?</p>
      </Modal>
      <Modal
        isOpen={showWinModal}
        title="Victory"
        onClose={toggleWinModal}
        onConfirm={handleWin}
      >
        <div>
          <p>Congratulations !</p>
          <p>You found the right answer.</p>
          <p>Do you want to start a new game ?</p>
        </div>
      </Modal>
      <Modal
        isOpen={showDefeatModal}
        title="Defeat"
        onClose={toggleDefeatModal}
        onConfirm={handleDefeat}
      >
        <div>
          <p>You are bad !</p>
          <p>You did not find the right answer.</p>
          <p>Do you want to start a new game ?</p>
        </div>
      </Modal>
    </>
  );
}

export default App;
