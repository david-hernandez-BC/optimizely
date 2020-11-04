addMargin();
window.addEventListener("resize", addMargin);

function addMargin() {
    var footer = document.querySelector(".footer");
    footer.style.marginTop = 0;
    var bodyHeight = document.querySelector(".bodyWrapper").getBoundingClientRect().height;
    var topPosition = footer.offsetTop;
    var footerHeight = footer.getBoundingClientRect().height;
    var margin = bodyHeight - topPosition - footerHeight;
    if (bodyHeight > 1265) {
        footer.style.marginTop = margin + "px";
    }
}
