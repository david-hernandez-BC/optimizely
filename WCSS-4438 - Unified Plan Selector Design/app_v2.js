/* Edit standard, plus and pro */
var standard = [
    "Value prop line item", 
    "Value prop line item", 
    "standard"];

var plus = [
    "Value prop line item", 
    "Value prop line item", 
    "plus"];

var pro = [
    "Value prop line item", 
    "Value prop line item", 
    "pro"];

var greatFor = "Great for:";

/* End of edition, DO NOT touch anything below */

var STANDARD = ".plan-cards-row > div:nth-of-type(1) .plan-card--description";
var PLUS = ".plan-cards-row > div:nth-of-type(2) .plan-card--description";
var PRO = ".plan-cards-row > div:nth-of-type(3) .plan-card--description";

appendElement(STANDARD, createUl(standard));
appendElement(PLUS, createUl(plus));
appendElement(PRO, createUl(pro));

function appendElement(cssSelector, newElement) {
    var desc = document.querySelector(cssSelector);
    desc.innerText = greatFor;
    desc.appendChild(newElement);
}

function createUl(list) {
    var ul = document.createElement("ul");
    ul.classList.add("plan-card--description-ul");
    list.forEach(function (element) { 
        var li = document.createElement("li");
        li.innerText = element;
        ul.appendChild(li);
    });
    return ul;
}