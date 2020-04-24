var yearly = document.querySelector('#store_upgrade_package_61');
var monthly = document.querySelector('#store_upgrade_package_59');
var checkbox = document.querySelector('#opt-yearly');
var spanPrice = document.querySelector('#yearly-price');
spanPrice.innerText = '($' + yearly.dataset.price + ')';

checkbox.addEventListener('click', function () {
    if (checkbox.checked) {
        yearly.click();
    } else {
        monthly.click();
    }
});