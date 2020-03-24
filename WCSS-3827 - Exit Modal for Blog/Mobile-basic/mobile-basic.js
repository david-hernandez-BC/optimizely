var showPopup = true;

window.addEventListener('load', function () {

    var popup = document.querySelector('.popup');

    // Add close event to close popup
    document.querySelector('.close-btn').addEventListener('click', function () {
        popup.classList.remove('showPopup');
        document.querySelector('body').classList.remove('addOpacity');
    });

    // Here we know if the mouse scroll up
    var lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st < lastScrollTop) {
            if (showPopup) {
                insertPopup();
                showPopup = false;
            }
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }, false);
});

// This function show the pop up in the center of the screen
function insertPopup() {
    var popup = document.querySelector('.popup');
    popup.classList.add('showPopup');
    document.querySelector('body').classList.add('addOpacity');
}