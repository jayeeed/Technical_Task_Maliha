import { useState, useCallback } from "react";
import PropTypes from "prop-types";

const SelectAllCheckbox = ({ onCheckboxChange }) => {
  const [allChecked, setAllChecked] = useState(false);

  const handleCheckboxChange = useCallback(
    (event) => {
      setAllChecked(event.target.checked);
      onCheckboxChange(event);
    },
    [onCheckboxChange]
  );

  return (
    <div>
      <label htmlFor="all-checkbox" className="flex items-center">
        Select All
        <input
          type="checkbox"
          id="all-checkbox"
          checked={allChecked}
          onChange={handleCheckboxChange}
          className="ml-2 h-5 w-5 text-green-600 rounded"
        />
      </label>
    </div>
  );
};

SelectAllCheckbox.propTypes = {
  onCheckboxChange: PropTypes.func.isRequired,
};

export default SelectAllCheckbox;
