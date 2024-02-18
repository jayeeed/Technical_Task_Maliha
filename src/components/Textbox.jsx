/* eslint-disable react/prop-types */
function Textbox({ index, isChecked, value, onCheckboxChange, onInputChange }) {
  const handleCheckboxChange = (event) => {
    onCheckboxChange(event, index);
  };

  const handleInputChange = (event) => {
    onInputChange(event, index);
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={`checkbox-${index + 1}`}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="h-5 w-5 text-blue-500 rounded"
      />
      <label htmlFor={`textbox-${index + 1}`} className="block">
        <input
          type="text"
          id={`textbox-${index + 1}`}
          value={value}
          onChange={handleInputChange}
          className="block px-4 py-2 border rounded"
        />
      </label>
    </div>
  );
}

export default Textbox;
