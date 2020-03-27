var heads = document.querySelectorAll('.trialCta-text');
// if there are more than 1 head, that means the the head is duplicated
if (heads.length > 1) {
    // We going to hide the first one
    heads[0].style.display = 'none';
}