var utils = optimizely.get("utils");

utils.waitForElement("body").then(function (elem) {
    var cookie = "email_capture_ext_cookie";
    // If the browser has cookie then don't show the extension
    if (hasCookie(cookie)) {
        return;
    }

    // Prepend the extension html to the body
    elem.insertAdjacentHTML("afterbegin", extension.$html);

    // Declare css selectors
    var EMAIL = document.querySelector("#emailOptId").value;
    var COUNTRY = document.querySelector("#countryOptId").value;
    var SUBSCRIBE_BUTTON = document.querySelector("#subscribeOptId").value;
    var TITLE = document.querySelector("#titleOptId").value;
    var COLOR = document.querySelector("#colorOptId").value;

    // Getting and Creating elements
    var email = document.querySelector(EMAIL);
    var button = document.querySelector(SUBSCRIBE_BUTTON);
    var container = document.createElement("DIV"); // Main container
    var closeBtn = document.createElement("DIV");
    var title = document.createElement("DIV");
    var divEmail = document.createElement("DIV");
    var divCountry = document.createElement("DV"); // This container save a spot for the country, to keep the same order
    var newCountry; // This variable is undefined at the beginning, it will be created once the email is typed

    // Clone elements
    var newEmail = email.cloneNode(true);
    var newButton = button.cloneNode(true);

    // Add css classes
    container.classList.add("card-opt");
    container.classList.add(COLOR);
    closeBtn.classList.add("close-btn");
    title.classList.add("title");
    divEmail.classList.add("tooltip");
    // newEmail.classList.add("email-opt");
    divCountry.classList.add("tooltip");
    newButton.classList.add("subscribe-opt");

    spacing(true);

    // Add eventListener
    newEmail.addEventListener("change", onEmailChanges, false);
    newButton.addEventListener("click", submitForm, false);
    closeBtn.addEventListener("click", closePopup, false);

    // Add text
    title.innerText = TITLE;

    // Append elements
    document.querySelector("body").appendChild(container);
    container.append(closeBtn);
    container.append(title);
    divEmail.append(newEmail);
    container.append(divEmail);
    container.append(divCountry);
    container.append(newButton);

    function onEmailChanges() {
        email.value = newEmail.value;
        email.addEventListener("change", function () {}, false);
        email.dispatchEvent(new Event("change"));
        // If the email text is empty it's needed to remove the country, following the behavior of the original
        if (newEmail.value == "" && newCountry) {
            spacing(true);
            newCountry.parentNode.removeChild(newCountry);
            newCountry = undefined;
            validateCountry();
        }
        validateEmail();
        // This if prevents create more than one country, and create country when email is empty
        if (newCountry == undefined && newEmail.value != "") {
            cloneCountry();
        }
    }

    function cloneCountry() {
        spacing(false);
        var country = document.querySelector(COUNTRY);
        newCountry = country.cloneNode(true);
        newCountry.addEventListener("change", onCountryChanges, false);
        divCountry.append(newCountry);
    }

    function onCountryChanges() {
        // Getting the country each time because it's dynamic and could change whenever
        country = document.querySelector(COUNTRY);
        country.value = newCountry.value;
        validateCountry();
    }

    function submitForm() {
        if (validateEmail() && validateCountry()) {
            button.click();
        }
    }

    function validateEmail() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var isValid = re.test(String(newEmail.value).toLowerCase());

        var errorEmail = document.querySelector("#errorEmailId");
        // Removing error email only if it exists, to prevent duplicate elements
        if (errorEmail) {
            errorEmail.parentNode.removeChild(errorEmail);
        }

        if (!isValid) {
            errorEmail = document.createElement("DIV");
            errorEmail.id = "errorEmailId";
            errorEmail.classList.add("validation-error");
            errorEmail.innerText = "Must be valid email. example@yourdomain.com";
            errorEmail.appendChild(document.createElement("i"));
            divEmail.append(errorEmail);
        }
        return isValid;
    }

    function validateCountry() {
        var errorCountry = document.querySelector("#errorCountryId");
        if (errorCountry) {
            errorCountry.parentNode.removeChild(errorCountry);
        }

        if (newCountry && newCountry.value == "") {
            errorCountry = document.createElement("DIV");
            errorCountry.id = "errorCountryId";
            errorCountry.classList.add("validation-error");
            errorCountry.innerText = "Country is required.";
            errorCountry.appendChild(document.createElement("i"));
            divCountry.append(errorCountry);
            return false;
        }
        return true;
    }

    function closePopup() {
        // Add cookie and expiration date of 30 days
        setCookie(cookie, 30);
        container.parentNode.removeChild(container);
    }

    function spacing(add) {
        if (add) {
            title.classList.add("spacing");
            divEmail.classList.add("spacing");
            newButton.classList.add("spacing");
        } else {
            title.classList.remove("spacing");
            divEmail.classList.remove("spacing");
            newButton.classList.remove("spacing");
        }
    }

    function hasCookie(cookie) {
        var regexText = "(?:(?:^|.*;\\s*)" + cookie + "\\s*\\=\\s*([^;]*).*$)|^.*$";
        var regex = new RegExp(regexText, "g");
        var cookieValue = document.cookie.replace(regex, "$1");
        return cookieValue != "";
    }

    function setCookie(cookie, days) {
        var hours = days * 24;
        var minutes = hours * 60;
        var seconds = minutes * 60;
        var date = new Date();
        date = new Date(date.getTime() + 1000 * seconds);
        document.cookie = cookie + "=true; expires=" + date.toGMTString() + ";";
    }
});
