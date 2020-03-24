/* This function is executed once the page is loaded*/
window.onload = function () {
    // CONSTANTS
    var projectedAnnualText = 'Projected_Annual_Revenue__c';
    var labelRevenueText = 'div:nth-of-type(16) label';
    var revenueOption1 = 'Maturing business: $1M–20M revenue';
    var revenueOption2 = 'Established business: $20M–100M revenue';
    var revenueOption3 = 'Enterprise: more than $100M revenue';

    var radioBtnText = '<input type="radio" name="revenue" id="revenueOption1" checked="checked">';
    radioBtnText += '<label for="revenueOption1" style="font-size: 1rem;">' + revenueOption1 + '</label><br>';
    radioBtnText += '<input type="radio" name="revenue" id="revenueOption2">';
    radioBtnText += '<label for="revenueOption2" style="font-size: 1rem;">' + revenueOption2 + '</label><br>';
    radioBtnText += '<input type="radio" name="revenue" id="revenueOption3">';
    radioBtnText += '<label for="revenueOption3" style="font-size: 1rem;">' + revenueOption3 + '</label>';

    /* Select one option in the revenue combo, for the first time */
    var revenueSelect = document.getElementById(projectedAnnualText);
    revenueSelect.value = revenueOption1;

    /* Select United States by default */
    var countryElement = document.getElementById("Country");
    var changeEvent = new Event('change', {bubbles: true});
    countryElement.value = 'US';
    countryElement.dispatchEvent(changeEvent);

    /* Insert Revenue Radio Button*/
    var divContainer = document.createElement('div');
    divContainer.innerHTML = radioBtnText;
    var labelRevenue = document.querySelector(labelRevenueText);
    labelRevenue.parentNode.insertBefore(divContainer, labelRevenue.nextSibling);
    document.getElementById('revenueOption1').addEventListener('click', function () {
        document.getElementById(projectedAnnualText).value = revenueOption1;
    });
    document.getElementById('revenueOption2').addEventListener('click', function () {
        document.getElementById(projectedAnnualText).value = revenueOption2;
    });
    document.getElementById('revenueOption3').addEventListener('click', function () {
        document.getElementById(projectedAnnualText).value = revenueOption3;
    });

    /* Hide Current Platform*/
    var currentPlatform = document.querySelector('#Current_Platform__c');
    if (currentPlatform != null) {
        currentPlatform.parentNode.style.display = "none";
    }

    /* Remove Job Title*/
    var title = document.querySelector('#Title');
    title.parentNode.parentNode.parentNode.parentNode.removeChild(title.parentNode.parentNode.parentNode);
};