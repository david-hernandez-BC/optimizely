// Change the text of the buttons
document.querySelector(".plan-cards-row > div:nth-of-type(1) [name='commit']").value = "Select Standard";
document.querySelector(".plan-cards-row > div:nth-of-type(2) [name='commit']").value = "Select Plus";
document.querySelector(".plan-cards-row > div:nth-of-type(3) [name='commit']").value = "Select Pro";

// Function to add events to show and hide features
function showAndHide(plan) {
    var features = document.querySelector(".features-" + plan);
    var showLink = document.querySelector("#show-" + plan);
    var hideLink = document.querySelector("#hide-" + plan);
    showLink.addEventListener("click", function() {
        features.style.display = "block";
        showLink.style.display = "none";
    });
    hideLink.addEventListener("click", function() {
        features.style.display = "none";
        showLink.style.display = "block";
    });
}

showAndHide("standard");
showAndHide("plus");
showAndHide("pro");
showAndHide("enterprise");
