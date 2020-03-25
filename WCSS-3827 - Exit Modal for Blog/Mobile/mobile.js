function callbackFn(activate, options) {
    var getCookie = function (name) {
        var match = document.cookie.match(name + "=([^;]*)");
        return match ? match[1] : undefined;
    };

    if (getCookie("opt-reg-exit-modal-triggered") !== "true") {
        var lastScrollTop = 0;
        window.addEventListener("scroll", function () {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st < lastScrollTop) {
                activate();
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    }
}
