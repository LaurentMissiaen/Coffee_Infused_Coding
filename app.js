//fix horiz scrollbar on full width elements:

const setScrollbarWidthProperty = () => {
  document.documentElement.style.setProperty(
    "--scrollbar-width",
    window.innerWidth - document.body.clientWidth + "px"
  );
};

window.addEventListener("load", setScrollbarWidthProperty);
window.addEventListener("resize", setScrollbarWidthProperty);

//hamburger menu

const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !expanded);
  navList.classList.toggle("open");
});
