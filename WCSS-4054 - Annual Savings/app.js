var widthResolution = window.screen.availWidth;
var billingRadios = document.querySelectorAll(".required > span > input");
var monthly = billingRadios[0].dataset.price;
var yearly = billingRadios[1].dataset.price;
var discount = Math.floor((monthly * 12 - yearly) * 100) / 100;

var pill = document.querySelector(".pill");
pill.innerText = "Save $" + discount;

// Here we validate if the resolution is for mobile
if (widthResolution < 768) {
    var labelYearly = document.querySelector(".required > span:nth-of-type(2) > .form-label");
    var pill = labelYearly.childNodes[1];
    var pillClone = pill.cloneNode(true);
    labelYearly.removeChild(pill);
    labelYearly.appendChild(document.createElement("br"));
    labelYearly.appendChild(pillClone);
}
