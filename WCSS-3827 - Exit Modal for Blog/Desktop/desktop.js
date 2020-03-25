function callbackFn(activate, options) {
    var getCookie = function (name) {
        var match = document.cookie.match(name + "=([^;]*)");
        return match ? match[1] : undefined;
    };

    if (getCookie("opt-reg-exit-modal-triggered") !== "true") {
        document.addEventListener("mouseleave", function () {
            activate();
        }, false);
    }
}
