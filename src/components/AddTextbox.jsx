/* eslint-disable react/prop-types */
import { useState } from "react";

function AddTextbox({ onAddTextbox }) {
  const [numberOfTextBoxesInput, setNumberOfTextBoxesInput] = useState("");

  const handleInputChange = (event) => {
    setNumberOfTextBoxesInput(event.target.value);
  };

  const handleAddTextbox = () => {
    if (numberOfTextBoxesInput.trim() !== "") {
      onAddTextbox(parseInt(numberOfTextBoxesInput, 10));
      setNumberOfTextBoxesInput("");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="textbox-count">Number of Textboxes: </label>
        <input
          type="text"
          id="textbox-count"
          value={numberOfTextBoxesInput}
          onChange={handleInputChange}
          className="ml-2 p-2 border rounded"
        />
      </div>
      <div className="flex justify-end py-4">
        <button
          onClick={handleAddTextbox}
          className="px-4 py-2 ml-4 bg-blue-500 text-white rounded"
        >
          Add Textbox
        </button>
      </div>
    </div>
  );
}

export default AddTextbox;
