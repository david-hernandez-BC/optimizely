// Get the elements
var learnMoreBtn = document.querySelector(".black-btn-opt");
var popup = document.querySelector(".container-opt");
var logo = document.querySelector(".mainNav-container");
// Adding events
learnMoreBtn.addEventListener("click", function () {
    closePopup();
});

// Init
showPopup();


// Declaring functions
function closePopup() {
    popup.classList.add("closePopup-opt");
    logo.classList.remove("logo-opt");
}

function showPopup() {
    popup.classList.add("showPopup-opt");
    logo.classList.add("logo-opt");
}
