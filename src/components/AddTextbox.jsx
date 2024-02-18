import { useState } from "react";
import PropTypes from "prop-types";

const AddTextbox = ({ onAddTextbox }) => {
  const [numberOfTextBoxesInput, setNumberOfTextBoxesInput] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setNumberOfTextBoxesInput(value);
  };

  const handleAddTextbox = () => {
    const number = numberOfTextBoxesInput.trim();
    if (number !== "") {
      onAddTextbox(parseInt(number, 10));
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
};

AddTextbox.propTypes = {
  onAddTextbox: PropTypes.func.isRequired,
};

export default AddTextbox;
