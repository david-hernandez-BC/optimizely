window.addEventListener("load", function() {
    var cookieKey = "showBanner";
    var regexText = "(?:(?:^|.*;\\s*)" + cookieKey + "\\s*\\=\\s*([^;]*).*$)|^.*$";
    var regex = new RegExp(regexText, "g");
    var cookieValue = document.cookie.replace(regex, "$1");
    // If there is not cookie add to the browser
    if (cookieValue == "") {
        // Set cookie
        document.cookie = cookieKey + "=true";
        // banner variable
        var banner = document.querySelector(".banner-opt");
        // Show banner
        banner.style.display = "block";
        // Add close event to close banner
        document.querySelector(".close-btn").addEventListener("click", function() {
            banner.style.display = "none";
        });
    }
});

// Delete cookie
// document.cookie = "showBanner=";
