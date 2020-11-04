console.debug("===-> trial 2 variation active");
console.debug("window.enableEnterpriseLogic = ", window.enableEnterpriseLogic);
if (!window.enableEnterpriseLogic) {
    window.enableEnterpriseLogic = true;
    var isOverMillion = false;
    var entChanged = false;
    var button = document.querySelector("button");
    console.debug("isOverMillion Starting...", isOverMillion);
    button.addEventListener("click", function (event) {
        console.debug("Create my Store", entChanged);
        if (entChanged) {
            entChanged = false;
            return true;
        }
        event.preventDefault();
        var annualRevenue = document.querySelector("#projectedAnnualRevenue");
        var ent = document.querySelector("#ent");
        console.debug("annualRevenue changed");
        var option = annualRevenue.value;
        if (
            option == "Maturing business: $1M–20M revenue" ||
            option == "Established business: $20M–100M revenue" ||
            option == "Enterprise: more than $100M revenue"
        ) {
            console.debug("More than 1M selected");
            console.debug("ent checkbox before update", ent.checked);
            console.debug("isOverMillion", isOverMillion);
            if (!isOverMillion && !ent.checked) {
                console.debug("toggle ent");
                isOverMillion = true;
                ent.click();
            }
            console.debug("ent checkbox updated", ent.checked);
        } else {
            console.debug("Less than 1M selected");
            console.debug("ent checkbox before update", ent.checked);
            console.debug("isOverMillion", isOverMillion);
            if (isOverMillion && ent.checked) {
                console.debug("toggle ent");
                isOverMillion = false;
                ent.click();
            }
            console.debug("ent checkbox updated", ent.checked);
        }
        console.debug("isOverMillion after:", isOverMillion);
        entChanged = true;
        button.click();
    });
}
