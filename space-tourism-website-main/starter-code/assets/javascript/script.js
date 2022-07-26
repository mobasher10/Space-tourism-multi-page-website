const header = document.querySelector(".header");
const humberger = document.querySelector(".humberger-menu");

humberger.addEventListener("click", () => {
  header.classList.toggle("nav-active");
});
