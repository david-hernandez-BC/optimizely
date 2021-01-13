var popup = document.querySelector('.popup-opt');
var button = document.querySelector('#button-opt');
var overlay = document.querySelector('#overlay');

// Add click events
button.addEventListener('click', showPopup);
document.querySelector('.close-btn').addEventListener('click', hidePopup);
overlay.addEventListener('click', hidePopup);

function showPopup() {
    popup.classList.add('show-opt');
    overlay.classList.add('show-opt');
}

function hidePopup() {
    popup.classList.remove('show-opt');
    overlay.classList.remove('show-opt');
}
