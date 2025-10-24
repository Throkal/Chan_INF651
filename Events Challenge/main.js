//For grabbing elements
const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById("mouseTracker");
const coordinates = document.getElementById("coordinates");

//Helper functions
//Displays error message in the output box in red
function showError(message) {
    outputDiv.textContent = message;
    outputDiv.style.backgroundColor = "white"; //background color is not green if no input
    outputDiv.style.borderColor = "red";
    outputDiv.style.color = "red";
}

//Displays success message in green background
function showSuccess(name) {
    outputDiv.textContent = "Welcome, " + name + "!";
    outputDiv.style.backgroundColor = "green";
    outputDiv.style.borderColor = "green";
    outputDiv.style.color = "white";
}

//Checks if the name box is empty or not then displays message accordingly
function handleSubmit() {
    var name = nameInput.value.trim();
    //if empty name box is submitted
    if (!name) {
        showError("Error: Please enter a name.");
        return;
    }
    //if non-empty name is submitted 
    showSuccess(name);
}

//Click event, submit button 
submitButton.addEventListener("click", handleSubmit);

//Keyboard event, press Enter in the input
nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleSubmit();
    }
});

//Mouse event, track coordinates inside the tracker box 
mouseTracker.addEventListener("mousemove", function (event) {
    // Coordinates that are relative to the tracker box
    var rect = mouseTracker.getBoundingClientRect();
    var x = Math.round(event.clientX - rect.left);
    var y = Math.round(event.clientY - rect.top);
    coordinates.textContent = "Mouse's Coordinates: X: " + x + ", Y: " + y;
});
