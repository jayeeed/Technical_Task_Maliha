/* eslint-disable react/prop-types */
function Textbox({ index, isChecked, value, onCheckboxChange, onInputChange }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={`checkbox-${index + 1}`}
        checked={isChecked}
        onChange={(event) => onCheckboxChange(event, index)}
        className="h-5 w-5 text-blue-500 rounded"
      />
      <label htmlFor={`textbox-${index + 1}`} className="block">
        <input
          type="text"
          id={`textbox-${index + 1}`}
          value={value}
          onChange={(event) => onInputChange(event, index)}
          className="block px-4 py-2 border rounded"
        />
      </label>
    </div>
  );
}

export default Textbox;
