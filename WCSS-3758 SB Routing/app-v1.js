window.addEventListener('load', function () {
    var cookieKey = "showToolTip";

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
        // Show tooltip
        var div = document.createElement("div");
        div.innerHTML = '<div class="arrowExp"></div><div class="tooltipExp">Just getting started?</div>';
        div.classList.add('tooltipContainer');
        document.querySelector('.contextNav-tabs').appendChild(div);

        // Disable events
        window.onload = null;
        document.onmousemove = null;
        document.ontouchstart = null;
        document.onkeypress = null;
    }

    function resetTimer() {
        clearTimeout(time);
        time = setTimeout(showTooltip, 3000);
        // 1000 milliseconds = 1 second
    }
};


// New method
window.addEventListener('load', function () {
    var div = document.createElement("div");
    div.innerHTML = '<div class="arrowExp"></div><div class="tooltipExp">Just getting started?</div>';
    div.classList.add('tooltipContainer');
    document.querySelector('.contextNav-tabs').appendChild(div);
});


// Delete cookie
document.cookie = "showToolTip=";