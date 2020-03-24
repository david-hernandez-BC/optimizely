window.addEventListener('load', function () {
    var cookieKey = "showCard";

    // Read cookie
    var regexText = "(?:(?:^|.*;\\s*)" + cookieKey + "\\s*\\=\\s*([^;]*).*$)|^.*$";
    var regex = new RegExp(regexText, "g");
    var cookieValue = document.cookie.replace(regex, "$1");
    // If there is not cookie add to the browser
    if (cookieValue == "") {
        // Set cookie
        document.cookie = cookieKey + "=true";
        // Validate for inactivity
        inactivityTime();
    }
});


var inactivityTime = function () {
    var time;
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.ontouchstart = resetTimer;
    document.onkeypress = resetTimer;

    function showTooltip() {
        // Show card
        var div = document.createElement("div");
        div.id = "fixedBoxId";
        div.innerHTML = '<a id="closeFixedBox" href="#" class="fixedBoxClose">X</a><div class="fixedBoxTitle">Just getting started?</div><br><a href="/essentials/" class="button button--textCta--dark button--textCta">VIEW ESSENTIALS</a>';
        div.classList.add('fixedBox');
        document.querySelector('footer').appendChild(div);
        // Add close event
        document.querySelector('#closeFixedBox').addEventListener('click', function () {
            // Remove fixedBox
            var element = document.querySelector("#fixedBoxId");
            element.parentNode.removeChild(element);
        });

        // Disable events
        window.onload = null;
        document.onmousemove = null;
        document.ontouchstart = null;
        document.onkeypress = null;
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(showTooltip, 10000);
        // 1000 milliseconds = 1 second
    }
};


// New method
window.addEventListener('load', function () {
    var div = document.createElement("div");
    div.id = "fixedBoxId";
    div.innerHTML = '<a id="closeFixedBox" href="#" class="fixedBoxClose">X</a><div class="fixedBoxTitle">Just getting started?</div><br><a href="/essentials/" class="button button--textCta--dark button--textCta">VIEW ESSENTIALS</a>';
    div.classList.add('fixedBox');
    document.querySelector('footer').appendChild(div);
    // Add close event
    document.querySelector('#closeFixedBox').addEventListener('click', function () {
        // Remove fixedBox
        var element = document.querySelector("#fixedBoxId");
        element.parentNode.removeChild(element);
    });
});

// Delete cookie
document.cookie = "showCard=";