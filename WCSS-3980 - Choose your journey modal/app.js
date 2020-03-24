// Declaring the elements
var widthResolution = window.screen.availWidth;
var popup = document.querySelector('.popup');
var button = document.querySelector('.buttonWrapper .button--action');

// Here we validate if the resolution is for desktops
if (widthResolution > 768) {
    // Remove the current href
    button.href = '#';

    // Add click event to button to show popup
    button.addEventListener('click', function () {
        popup.classList.add('showPopup');
    });

    // Add close event to close popup
    document.querySelector('.close-btn').addEventListener('click', function () {
        popup.classList.remove('showPopup');
    });
}