/* eslint-disable react/prop-types */
import { useState } from "react";

function SelectAllCheckbox({ onCheckboxChange }) {
  const [allChecked, setAllChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setAllChecked(event.target.checked);
    onCheckboxChange(event);
  };

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
}

export default SelectAllCheckbox;
