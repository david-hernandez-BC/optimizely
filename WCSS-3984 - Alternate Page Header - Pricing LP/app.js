var tryItFreeP = document.querySelector('.block--pricingComparison-header > p:nth-of-type(1)');
var button = tryItFreeP.childNodes[0];
tryItFreeP.innerHTML = '';
button.innerText = 'Start your Free 15-Day Trial';
button.classList.add('trial-button');
tryItFreeP.append(button);