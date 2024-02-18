import PropTypes from "prop-types";

function Output({ selectedTextBoxes, numberOfTextBoxes, textBoxValues }) {
  const total = selectedTextBoxes.reduce(
    (accumulator, currentIndex) =>
      accumulator + parseFloat(textBoxValues[currentIndex - 1] || 0),
    0
  );

  const selectedCount = selectedTextBoxes.length;
  const isSelectedAll = selectedCount === numberOfTextBoxes;

  return (
    <div className="flex flex-col items-center space-y-2">
      <label htmlFor="output-label" className="text-lg font-bold">
        Output is:
      </label>
      <div id="output-label" className="bg-gray-300 p-4 rounded-lg">
        <span>
          Selected {isSelectedAll ? "all" : ""}
          <span className="font-bold"> {selectedCount} </span>
          {isSelectedAll
            ? "items"
            : `Items and their positions are ${selectedTextBoxes.join(", ")}`}
        </span>
        <div className="mt-2">
          and Total Number is: <span className="font-bold">{total}</span>
        </div>
      </div>
    </div>
  );
}

Output.propTypes = {
  selectedTextBoxes: PropTypes.arrayOf(PropTypes.number).isRequired,
  numberOfTextBoxes: PropTypes.number.isRequired,
  textBoxValues: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Output;
