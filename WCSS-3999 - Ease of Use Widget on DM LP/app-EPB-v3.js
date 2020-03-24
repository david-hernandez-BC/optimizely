var buttons = document.querySelectorAll(".CTA-button a");
var firstButton = buttons[0];
var secondButton = buttons[1];
var originalButton = document.querySelector("#contentBlock67017 .gtm_trial_start");

firstButton.addEventListener("click", function() {
  originalButton.click();
});

secondButton.addEventListener("click", function() {
  originalButton.click();
});
