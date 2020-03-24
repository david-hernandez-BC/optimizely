function callbackFn(activate, options) {
    var $ = optimizely.get("jquery");

    var getCookie = function(name) {
        var match = document.cookie.match(name + "=([^;]*)");
        return match ? match[1] : undefined;
    };

    if (getCookie("opt-reg-exit-modal-triggered") !== "true") {
        $(document).bind("mouseleave", function() {
            activate();
        });
    }
}