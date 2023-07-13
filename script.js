const body      = document.querySelector('body');
const mainNav   = document.querySelector('.c-navigation');
const navToggle = document.querySelector('.f-hamburgerMenu');
const navItems  = document.querySelectorAll('.c-navigation__link');

navToggle.addEventListener('click', () => {
    const vis = mainNav.getAttribute("data-visible");
    if (vis === "false") {
        mainNav  .setAttribute("data-visible",  true);
        navToggle.setAttribute("aria-expanded", true);
        // body.style.overflowY = "hidden";

    } else if (vis === "true") {
        mainNav  .setAttribute("data-visible",  false);
        navToggle.setAttribute("aria-expanded", false);
        // body.style.overflowY = "scroll"
    }
})

navItems.forEach(element => {
    element.addEventListener('click', () => {
        const vis = mainNav.getAttribute("data-visible");
        if (vis === "true") {
            mainNav  .setAttribute("data-visible",  false);
            navToggle.setAttribute("aria-expanded", false);
        }
    })
});