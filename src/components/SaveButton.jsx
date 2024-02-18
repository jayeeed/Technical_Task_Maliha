/* eslint-disable react/prop-types */
function SaveButton({ selectedTextBoxes, textBoxValues }) {
  const saveData = async () => {
    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedTextBoxes,
          textBoxValues,
        }),
      });

      if (!response.ok) {
        throw new Error("Error saving data");
      }

      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Error saving data. Please try again later.");
    }
  };

  const handleClick = () => {
    saveData();
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Save Data
    </button>
  );
}

export default SaveButton;
