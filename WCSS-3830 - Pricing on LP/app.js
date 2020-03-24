window.addEventListener('load', function () {
    var button = document.querySelector('#contentBlock67017 .gtm_trial_start');
    var newButton = document.createElement('div');
    newButton.innerHTML = '<a id="newButtonID" href="#" class="button button--action gtm_trial_start">Start your free 15-day trial</a>';
    document.querySelector('.CTA-button').appendChild(newButton);

    // Adding click event
    document.querySelector('#newButtonID').addEventListener('click', function () {
        button.click();
    });
});