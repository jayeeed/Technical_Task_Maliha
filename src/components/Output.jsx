/* eslint-disable react/prop-types */
function Output({ selectedTextBoxes, numberOfTextBoxes, calculateTotal }) {
  return (
    <div>
      Output is: Selected {selectedTextBoxes.length} Items
      {selectedTextBoxes.length === numberOfTextBoxes
        ? " and Total Number is "
        : ", their positions are "}
      {selectedTextBoxes.join(", ")} and Total Number is {calculateTotal()}
    </div>
  );
}

export default Output;
