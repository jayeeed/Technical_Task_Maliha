/* eslint-disable react/prop-types */
function Output({ selectedTextBoxes, numberOfTextBoxes, textBoxValues }) {
  const calculateTotal = () => {
    let total = 0;
    for (const index of selectedTextBoxes) {
      const value = parseFloat(textBoxValues[index - 1] || 0);
      total += value;
    }
    return total;
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <label htmlFor="output-label" className="text-lg font-bold">
        Output is:
      </label>
      <div id="output-label" className="bg-gray-300 p-4 rounded-lg">
        {selectedTextBoxes.length === numberOfTextBoxes ? (
          <span>
            Selected all{" "}
            <span className="font-bold">{selectedTextBoxes.length} </span>
            items,
          </span>
        ) : (
          <span>
            Selected{" "}
            <span className="font-bold">{selectedTextBoxes.length} </span> Items{" "}
            {selectedTextBoxes.length && "and their positions are "}
            <span className="font-bold">{selectedTextBoxes.join(", ")}</span>
          </span>
        )}
        <div className="mt-2">
          and Total Number is:{" "}
          <span className="font-bold">{calculateTotal()}</span>
        </div>
      </div>
    </div>
  );
}

export default Output;
