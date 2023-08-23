document.addEventListener("DOMContentLoaded", function () {
    const jsonFileInput = document.getElementById("jsonFileInput");
    const selectElement = document.getElementById("optionList");
    const selectedValueElement = document.getElementById("selectedValue");

    // Event listener for file input
    jsonFileInput.addEventListener("change", handleFile);

    // Handle file selection
    function handleFile(event) {
        const file = event.target.files[0];
        if (file) {
            readFile(file);
        }
    }

    // Read uploaded JSON file
    function readFile(file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const jsonData = JSON.parse(event.target.result);
            populateOptions(jsonData);
        };
        reader.readAsText(file);
    }

    // Populate dropdown with options
    function populateOptions(jsonData) {
        selectElement.innerHTML = ""; // Clear previous options
        jsonData.forEach(item => {
            const option = document.createElement("option");
            option.value = item.value;
            option.textContent = item.name;
            selectElement.appendChild(option);
        });
        selectElement.addEventListener("change", handleOptionChange);
    }

    // Handle option change
    function handleOptionChange(event) {
        const selectedValue = event.target.value;
        selectedValueElement.textContent = selectedValue;
    }
});
