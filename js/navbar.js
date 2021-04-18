const hamburger = document.querySelector(".hamburger-container");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("clicked");
});
