var popup = document.querySelector(".popup");
// Add close event to close popup
document.querySelector(".close-btn").addEventListener("click", function() {
    popup.style.display = "none";
    document.querySelector("body").style.filter = "opacity(1)";
});
