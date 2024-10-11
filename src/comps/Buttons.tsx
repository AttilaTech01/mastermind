function Buttons() {
  const handleConfirm = () => {
    console.log("Confirming my choices");
  };

  const handleClear = () => {
    console.log("Clearing the line");
  };

  return (
    <div className="buttons">
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Buttons;
