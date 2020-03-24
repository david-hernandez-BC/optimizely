function fixedPosition() {

    var th2_1 = document.querySelector("#contentBlock58985 tr:nth-of-type(1) > th:nth-of-type(2)");
    var th3_1 = document.querySelector("#contentBlock58985 tr:nth-of-type(1) > th:nth-of-type(3)");
    var th4_1 = document.querySelector("#contentBlock58985 tr:nth-of-type(1) > th:nth-of-type(4)");

    var th2_2 = document.querySelector("#contentBlock58985 tr:nth-of-type(2) > th:nth-of-type(2)");
    var th3_2 = document.querySelector("#contentBlock58985 tr:nth-of-type(2) > th:nth-of-type(3)");
    var th4_2 = document.querySelector("#contentBlock58985 tr:nth-of-type(2) > th:nth-of-type(4)");

    /* NEW */
    var th2_1_New = document.querySelector(".sticky tr:nth-of-type(1) > th:nth-of-type(2)");
    var th3_1_New = document.querySelector(".sticky tr:nth-of-type(1) > th:nth-of-type(3)");
    var th4_1_New = document.querySelector(".sticky tr:nth-of-type(1) > th:nth-of-type(4)");

    var th2_2_New = document.querySelector(".sticky tr:nth-of-type(2) > th:nth-of-type(2)");
    var th3_2_New = document.querySelector(".sticky tr:nth-of-type(2) > th:nth-of-type(3)");
    var th4_2_New = document.querySelector(".sticky tr:nth-of-type(2) > th:nth-of-type(4)");


    th2_1_New.style.position = "fixed";
    th2_1_New.style.left = th2_1.getBoundingClientRect().left + "px";
    th2_1_New.style.width = th2_1.getBoundingClientRect().width + "px";

    th3_1_New.style.position = "fixed";
    th3_1_New.style.left = th3_1.getBoundingClientRect().left + "px";
    th3_1_New.style.width = th3_1.getBoundingClientRect().width + "px";
    th3_1_New.style.height = th3_1.getBoundingClientRect().height + "px";

    th4_1_New.style.position = "fixed";
    th4_1_New.style.left = th4_1.getBoundingClientRect().left + "px";
    th4_1_New.style.width = th4_1.getBoundingClientRect().width + "px";

    /* Second row */
    th2_2_New.style.position = "fixed";
    th2_2_New.style.left = th2_2.getBoundingClientRect().left + "px";
    th2_2_New.style.width = th2_2.getBoundingClientRect().width + "px";

    th3_2_New.style.position = "fixed";
    th3_2_New.style.left = th3_2.getBoundingClientRect().left + "px";
    th3_2_New.style.width = th3_2.getBoundingClientRect().width + "px";
    th3_2_New.style.height = th3_2.getBoundingClientRect().height + "px";

    th4_2_New.style.position = "fixed";
    th4_2_New.style.left = th4_2.getBoundingClientRect().left + "px";
    th4_2_New.style.width = th4_2.getBoundingClientRect().width + "px";
}

function init() {
    var stickyDiv = document.querySelector(".sticky");
    var table = document.querySelector(".block-container-inner>table");
    var container = document.querySelector(".block-container");
    var tr1 = document.querySelector("#contentBlock58985 tr:nth-of-type(1)");
    var tr2 = document.querySelector("#contentBlock58985 tr:nth-of-type(2)");

    fixedPosition();

    stickyDiv.style.left = tr1.getBoundingClientRect().left + "px";
    stickyDiv.style.width = tr1.getBoundingClientRect().width + "px";
    stickyDiv.style.height = (tr1.getBoundingClientRect().height + tr2.getBoundingClientRect().height) + "px";

    var isFixed = false;

    window.onscroll = function () {
        if (!isFixed && table.getBoundingClientRect().top <= 120) {
            stickyDiv.classList.remove("hide");
            tr1.classList.add("hide");
            tr2.classList.add("hide");
            isFixed = true;
        }

        if (isFixed && table.getBoundingClientRect().top >= 120) {
            tr1.classList.remove("hide");
            tr2.classList.remove("hide");
            stickyDiv.classList.add("hide");
            isFixed = false;
        }
    };
}

init();
