import PropTypes from "prop-types";

async function postData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error("Error saving data");

    alert("Data saved successfully!");
  } catch (error) {
    console.error("Error saving data:", error);
    alert("Error saving data. Please try again later.");
  }
}

function SaveButton({ selectedTextBoxes, textBoxValues }) {
  const selectedItems = [];
  let total = 0;

  for (let i = 0; i < textBoxValues.length; i++) {
    if (selectedTextBoxes.includes(i + 1)) {
      const value = textBoxValues[i];
      selectedItems.push(value);
      total += parseFloat(value || 0);
    } else {
      selectedItems.push(null);
    }
  }

  const saveData = () =>
    postData(import.meta.env.VITE_APP_API, {
      selectedItems,
      total,
    });

  return (
    <button
      onClick={saveData}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Save Data
    </button>
  );
}

SaveButton.propTypes = {
  selectedTextBoxes: PropTypes.array.isRequired,
  textBoxValues: PropTypes.array.isRequired,
};

export default SaveButton;
