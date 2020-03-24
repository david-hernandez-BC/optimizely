var showPopup = true;

window.addEventListener('load', function () {
    console.debug("page is loaded");

    // Here we know if the mouse leaves the window
    $(document).mouseleave(function () {
        console.debug("Mouse leave the window");
        if (showPopup) {
            insertPopup();
            showPopup = false;
        }
    });
});

// This function show the pop up in the center of the screen
function insertPopup() {
    console.debug("Showing popup");
    var div = document.createElement('div');
    div.innerHTML = '<div class="popup">Popup\n    <div class="close-btn">X</div>\n</div>';
    document.querySelector('body').appendChild(div);

    // Add click event to close the popup
    document.querySelector('.close-btn').addEventListener('click', function () {
        var popup = document.querySelector('.popup');
        popup.parentNode.removeChild(popup);
        console.debug("Popup is closed");
    });
}