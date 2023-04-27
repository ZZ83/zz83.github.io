/***************************************************************************/
const body      = document.querySelector('body');
const mainNav   = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-menu-icons');

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        mainNav  .setAttribute("data-visible",  false);
        navToggle.setAttribute("aria-expanded", false);
        body.style.overflowY = "scroll";
    }
});
navToggle.addEventListener('click', () => {
    const vis = mainNav.getAttribute("data-visible");
    if (vis === "false") {
        mainNav  .setAttribute("data-visible",  true);
        navToggle.setAttribute("aria-expanded", true);
        body.style.overflowY = "hidden";

    } else if (vis === "true") {
        mainNav  .setAttribute("data-visible",  false);
        navToggle.setAttribute("aria-expanded", false);
        body.style.overflowY = "scroll";
    }
})
mainNav.addEventListener("click", () => {
    mainNav  .setAttribute("data-visible",  false);
    navToggle.setAttribute("aria-expanded", false);
    body.style.overflowY = "scroll";
});

/***************************************************************************/
const tabs        = document.querySelector('.tabs');
const btns        = document.querySelectorAll('.btn-projects--p');
const allProjects = document.querySelectorAll('.project');

function showTab(tab, element) {
    btns.forEach(item => {
        item.classList.remove("btn-projects--active");
    })
    allProjects.forEach(element => {
        if (element.classList.contains(tab)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    });
    element.target.classList.add("btn-projects--active");
}
tabs.addEventListener('click', (element) => {
    if(element.target.innerHTML === "All")           showTab("project",      element);
    if(element.target.innerHTML === "Games")         showTab("game",         element);
    if(element.target.innerHTML === "Emails")        showTab("email",        element);
    if(element.target.innerHTML === "Websites")      showTab("website",      element);
    if(element.target.innerHTML === "Web Apps")      showTab("app",          element);
    if(element.target.innerHTML === "Landing Pages") showTab("landing-page", element);
})

/***************************************************************************/
let mybutton = document.querySelector(".btn-top");

window.onscroll = function() {
    if (document.body.scrollTop > 1250 || document.documentElement.scrollTop > 1250) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};