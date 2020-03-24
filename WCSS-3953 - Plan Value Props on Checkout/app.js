window.addEventListener('load', function () {
    // It's the table body the we need to modify
    var tableBody = document.querySelector('.table-tbody.table-order-summary-tbody');
    // Removing the border-bottom, index 1 is the plan name (tr)
    tableBody.childNodes[1].style.borderBottom = 'none';
    // Inside of a tr there is a span (it's the plan name), we get it to add a class
    var spanStorePlan = document.querySelector('.table-order-summary-item-title span');
    spanStorePlan.classList.add('storePlanTr');
    // Add Sore Plan to the current text
    spanStorePlan.innerText += ' Sore Plan';
    // Here we create a tr, that is the check-marks
    var tr = document.createElement('tr');
    tr.classList.add('newTr');
    // Declaring the text variable for the checkMarks
    var htmlText = '';
    var checkMarkText1 = 'Maximize Profits';
    var checkMarkText2 = 'Grow Your Business';
    var checkMarkText3 = 'Start a Moon Colony';
    // Building the html element
    htmlText += '<td colspan="2"><div class="checkMark">&#10003;</div><span class="checkMarkText">';
    htmlText += checkMarkText1;
    htmlText += '</span><br><div class="checkMark">&#10003;</div><span class="checkMarkText">';
    htmlText += checkMarkText2;
    htmlText += '</span><br><div class="checkMark">&#10003;</div><span class="checkMarkText">';
    htmlText += checkMarkText3;
    htmlText += '</span></td>';
    tr.innerHTML = htmlText;
    // Add the tr element to the table body
    tableBody.appendChild(tr);
});