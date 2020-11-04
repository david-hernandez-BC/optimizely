var utils = optimizely.get("utils");
var cookie = "Bottom_Strip_cookie";

utils.waitForElement("body").then(function(elem) {
    // Prepend the extension html to the body
    console.debug("Starting extension");

    // If the browser has cookie then don't show the extension
    if (hasCookie(cookie)) {
        return;
    }

    // Avoid that the extension fire 2 times
    var popup = document.querySelector(".popup-opt");
    if (popup) {
        return;
    }

    elem.insertAdjacentHTML("afterbegin", extension.$html);
    var closeBtn = document.querySelector(".close-btn-opt");
    closeBtn.addEventListener("click", closePopup, false);

    var button = document.querySelector(".button-opt");
    button.addEventListener("click", function() {
        setCookieWithExpires(cookie, 30);
    });

    var observer = new MutationObserver(function(mutations) {
        var drift = document.querySelector('#drift-widget-container');
        if (drift) {
            drift.parentNode.removeChild(drift);
            observer.disconnect();
            //We can disconnect observer once the element exist if we don't want observe more changes in the DOM
        }
    });

    // Start observing
    observer.observe(document.body, { // document.body is node target to observe
        childList: true, //This is a must have for the observer with subtree
        subtree: true //Set to true if changes must also be observed in descendants.
    });

});

function closePopup() {
    // Add cookie and expiration date of 3 days
    setCookieWithExpires(cookie, 3);
    var popup = document.querySelector(".popup-opt");
    var background = document.querySelector(".background-opt");
    popup.parentNode.removeChild(popup);
    background.parentNode.removeChild(background);
}

function setCookieWithExpires(cookie, days) {
    var hours = days * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    var date = new Date();
    date = new Date(date.getTime() + 1000 * seconds);
    document.cookie = cookie + "=true; expires=" + date.toGMTString() + "; path=/";
}

function hasCookie(cookie) {
    var regexText = "(?:(?:^|.*;\\s*)" + cookie + "\\s*\\=\\s*([^;]*).*$)|^.*$";
    var regex = new RegExp(regexText, "g");
    var cookieValue = document.cookie.replace(regex, "$1");
    return cookieValue != "";
}