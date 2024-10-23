import { useState } from "react";
import { generateAnswer } from "./commons/AnswerGenerator";
import Modal from "./commons/UI/Modal/Modal";
import Board from "./comps/Board";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState<number[]>(generateAnswer());
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleOnRefresh = () => {
    setAnswer(generateAnswer());
    toggleModal();
  };

  return (
    <>
      <h1>Mastermind</h1>
      <button onClick={toggleModal}>Refresh</button>
      <Board answer={answer} />
      <Modal
        isOpen={showModal}
        title="Warning"
        onClose={toggleModal}
        onConfirm={handleOnRefresh}
      >
        <p>Are you sure you want to refresh your answers ?</p>
      </Modal>
    </>
  );
}

export default App;
