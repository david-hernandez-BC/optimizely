var annualRevenue = document.querySelector('#Projected_Annual_Revenue__c');
annualRevenue.addEventListener("change", function() {
    if (annualRevenue.value === "I haven't started selling yet: no revenue" ||
        annualRevenue.value === "Just starting out: less than $50k revenue" ||
        annualRevenue.value === "Building a business: $50k–250k revenue" ||
        annualRevenue.value === "Growing business: $250k–1M revenue" ||
        annualRevenue.value === "I'm not sure"
    ) {
        console.debug("set cookie: bc_gmv=less; path=/");
        document.cookie = "bc_gmv=less; path=/";
    } else {
        console.debug("set cookie: bc_gmv=more; path=/");
        document.cookie = "bc_gmv=more; path=/";
    }
});