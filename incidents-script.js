var generateButton = document.getElementById("generate");
var importButton = document.getElementById("import");
var select = document.getElementById("options");
var unitInput = document.getElementById("units-input");
var unitsDisplay = document.querySelector(".units p");

generateButton.addEventListener("click", function() {
  var selectedOption = select.value;
  var incident = incidentData.find(function(incident) {
    return incident.value === selectedOption;
  });

  if (incident) {
    unitsDisplay.textContent = incident.Response;
  } else {
    unitsDisplay.textContent = "Please select a valid incident.";
  }
});

function updateUnitsDisplay() {
  unitsDisplay.textContent = unitInput.value;
}

importButton.addEventListener("click", updateUnitsDisplay);

unitInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    updateUnitsDisplay();
  }
});