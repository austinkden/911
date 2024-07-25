document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("generate");
    var select = document.getElementById("options");
    var unitsDisplay = document.querySelector(".units p");

    button.addEventListener("click", function() {
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
});