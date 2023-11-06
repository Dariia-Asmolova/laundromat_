const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

let navbar = document.getElementById("navbar").classList;
let active_class = "navbar_scrolled";
let mobnav = document.getElementById("burger").classList;
let mob_active = "mob_active";

window.addEventListener("scroll", (e) => {
  if (scrollY > 400) {
    navbar.add(active_class);
    mobnav.add(mob_active);
  } else {
    navbar.remove(active_class);
    mobnav.remove(mob_active);
  }
});

const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav__list");
const scroll = document.querySelector("body");

burger.addEventListener("click", openNav);

function openNav() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
  scroll.classList.toggle("active");
}
