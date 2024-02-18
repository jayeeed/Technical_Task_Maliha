function SelectAllCheckbox({ allChecked, onCheckboxChange }) {
  return (
    <div>
      <label htmlFor="all-checkbox" className="flex items-center">
        Select All
        <input
          type="checkbox"
          id="all-checkbox"
          checked={allChecked}
          onChange={onCheckboxChange}
          className="ml-2 h-5 w-5 text-green-600 rounded"
        />
      </label>
    </div>
  );
}

export default SelectAllCheckbox;
