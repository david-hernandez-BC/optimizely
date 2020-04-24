document.body.addEventListener('change', function () {
    var head = document.querySelectorAll('#head-opt');
    var password = document.querySelector("#password");
    if (!password) {
        head.style.display = "none";
    } else {
        head.style.display = "block";
    }
    console.error('body changed');
});


document.querySelector('fieldset').id = 'new-store-form';