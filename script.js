document.addEventListener("DOMContentLoaded", function() {
    var notification = document.querySelector(".notification");
    notification.classList.add("show");

    setTimeout(function() {
        notification.classList.remove("show");
    }, 2000); // The notification will disappear after 2 seconds
});
