/* eslint-disable react/prop-types */
function AddTextbox({ numberOfTextBoxesInput, onInputChange, onAddTextbox }) {
  return (
    <div>
      <div>
        <label htmlFor="textbox-count">Number of Textboxes: </label>
        <input
          type="text"
          id="textbox-count"
          value={numberOfTextBoxesInput}
          onChange={onInputChange}
          className="ml-2 p-2 border rounded"
        />
      </div>
      <div className="flex justify-end py-4">
        <button
          onClick={onAddTextbox}
          className="px-4 py-2 ml-4 bg-blue-500 text-white rounded"
        >
          Add Textbox
        </button>
      </div>
    </div>
  );
}

export default AddTextbox;
