document.addEventListener("DOMContentLoaded", function() {
    var notification-page-loaded = document.querySelector(".notification-page-loaded");
    notification-page-loaded.classList.add("show");

    setTimeout(function() {
        notification-page-loaded.classList.remove("show");
    }, 2000);

    var button = document.getElementById("generate");
    var select = document.getElementById("options");
    var unitsDisplay = document.querySelector(".units p");

    button.addEventListener("click", function() {
        var selectedOption = select.value;

        var incident = incidentData.find(function(incident) {
            return incident.Incident.replace(/\s+/g, '').toLowerCase() === selectedOption;
        });

        if (incident) {
            unitsDisplay.textContent = incident.Response;
        } else {
            unitsDisplay.textContent = "Please select a valid incident.";
        }
    });
});
