function helper() {
    var popup = document.querySelector(".popup-opt--basic");
    // Add close event to close popup
    document.querySelector(".close-btn-basic").addEventListener("click", function () {
        popup.style.display = "none";
    });
}