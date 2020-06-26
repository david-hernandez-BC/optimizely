// CONSTANTS
var projectedAnnualText = "Projected_Annual_Revenue__c";
var labelRevenueText = "div:nth-of-type(15) .mktoLabel";
var revenueOption1 = "Growing business: $250k–1M revenue";
var revenueOption2 = "Maturing business: $1M–20M revenue";
var revenueOptionText1 = "Under $1 million annually";
var revenueOptionText2 = "Over $1 million annually";

var radioBtnText = '<label class="label-opt" style="font-weight: 400 !important;">Projected Online Annual Revenue</label>';
radioBtnText += '<input type="radio" name="revenue" id="under_1_million" checked="checked">';
radioBtnText +='<label for="under_1_million" style="font-size: 1rem;line-height: 0;">' + revenueOptionText1 + "</label>";
radioBtnText += '<span class="new-line"><input type="radio" name="revenue" id="over_1_million">';
radioBtnText +='<label for="over_1_million" style="font-size: 1rem;line-height: 0;">' + revenueOptionText2 + "</label></span>";

/* Select one option in the revenue combo, for the first time */
var revenueSelect = document.getElementById(projectedAnnualText);
revenueSelect.value = revenueOption1;

/* Select United States by default */
var countryElement = document.getElementById("Country");
var changeEvent = new Event("change", { bubbles: true });
countryElement.value = "US";
countryElement.dispatchEvent(changeEvent);

/* Insert Revenue Radio Button*/
var divContainer = document.createElement("div");
divContainer.innerHTML = radioBtnText;
var labelRevenue = document.querySelector(labelRevenueText);
labelRevenue.parentNode.insertBefore(divContainer, labelRevenue.nextSibling);
labelRevenue.style.display = "none";
document.getElementById("under_1_million").addEventListener("click", function () {
    console.debug("click under_1_million");
    document.getElementById(projectedAnnualText).value = revenueOption1;
    document.querySelector("#State").parentNode.parentNode.style.display = "none";
});
document.getElementById("over_1_million").addEventListener("click", function () {
    console.debug("click over_1_million");
    document.getElementById(projectedAnnualText).value = revenueOption2;
    document.querySelector("#State").parentNode.parentNode.style.display = "";
});

/* Hide State select*/
document.querySelector("#State").parentNode.parentNode.style.display = "none";