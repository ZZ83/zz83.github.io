const body      = document.querySelector('body');
const mainNav   = document.querySelector('.c-navigation');
const navToggle = document.querySelector('.f-mobileNavIcons');

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




const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});