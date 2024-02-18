import { useState } from "react";
import AddTextbox from "./../components/AddTextbox";
import SelectAllCheckbox from "./../components/SelectAllCheckbox";
import Textbox from "./../components/Textbox";
import Output from "./../components/Output";
import SaveButton from "./../components/SaveButton";

function Home() {
  const [numberOfTextBoxes, setNumberOfTextBoxes] = useState(0);
  const [allChecked, setAllChecked] = useState(false);
  const [selectedTextBoxes, setSelectedTextBoxes] = useState([]);
  const [textBoxValues, setTextBoxValues] = useState([]);

  const handleInputChange = (event, index) => {
    const values = [...textBoxValues];
    values[index] = event.target.value;
    setTextBoxValues(values);
  };

  const handleAllCheckboxChange = (event) => {
    setAllChecked(event.target.checked);
    setSelectedTextBoxes(
      event.target.checked
        ? Array.from({ length: numberOfTextBoxes }, (_, i) => i + 1)
        : []
    );
  };

  const handleCheckboxChange = (event, index) => {
    const selected = [...selectedTextBoxes];
    const isChecked = event.target.checked;
    if (isChecked) {
      selected.push(index + 1);
    } else {
      const selectedIndex = selected.indexOf(index + 1);
      selected.splice(selectedIndex, 1);
    }
    setSelectedTextBoxes(selected);
    setAllChecked(selected.length === numberOfTextBoxes);
  };

  const handleAddTextbox = (num) => {
    setNumberOfTextBoxes(num);
    setTextBoxValues(Array(num).fill(""));
  };

  return (
    <div className="p-8 flex flex-col items-center space-y-4">
      <AddTextbox onAddTextbox={handleAddTextbox} />
      <SelectAllCheckbox
        allChecked={allChecked}
        onCheckboxChange={handleAllCheckboxChange}
      />
      {[...Array(numberOfTextBoxes)].map((_, index) => (
        <Textbox
          key={index + 1}
          index={index}
          isChecked={selectedTextBoxes.includes(index + 1)}
          value={textBoxValues[index] || ""}
          onCheckboxChange={handleCheckboxChange}
          onInputChange={handleInputChange}
        />
      ))}
      <Output
        selectedTextBoxes={selectedTextBoxes}
        numberOfTextBoxes={numberOfTextBoxes}
        textBoxValues={textBoxValues}
      />
      <SaveButton
        selectedTextBoxes={selectedTextBoxes}
        textBoxValues={textBoxValues}
      />
    </div>
  );
}

export default Home;
