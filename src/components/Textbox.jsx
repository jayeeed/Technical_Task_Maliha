import PropTypes from "prop-types";

function Textbox({ index, isChecked, value, onCheckboxChange, onInputChange }) {
  const identifier = index + 1;

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={`checkbox-${identifier}`}
        checked={isChecked}
        onChange={(event) => onCheckboxChange(event, index)}
        className="h-5 w-5 text-blue-500 rounded"
      />
      <label htmlFor={`textbox-${identifier}`} className="block">
        <input
          type="text"
          id={`textbox-${identifier}`}
          value={value}
          onChange={(event) => onInputChange(event, index)}
          className="block px-4 py-2 border rounded"
        />
      </label>
    </div>
  );
}

Textbox.propTypes = {
  index: PropTypes.number.isRequired,
  isChecked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Textbox;
