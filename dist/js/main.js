//Select DOM items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const leftSide = document.querySelector(".leftSide");
const mainBdy = document.querySelector("#bg-img");
const icons = document.querySelectorAll("#fab");
const navItems = document.querySelectorAll(".nav-item");
const closeIcon = document.querySelector(".menu-close");

let showMenu = false;

window.onload = function () {
  this.setTimeout(() => {
    this.toggleMenu();
  }, 1000);
};
menuBtn.addEventListener("click", toggleMenu);
mainBdy.addEventListener("onscroll", toggleMenu);
document.body.onkeydown = function (e) {
  toggleMenu();
};

//Mobile
const MmenuBtn = document.querySelector(".m-menu-btn");
const Mmenu = document.querySelector(".m-menu");
const MmenuNav = document.querySelector(".m-menu-nav");
const MnavItems = document.querySelectorAll(".m-nav-item");
const Mline = document.querySelectorAll(".m-btn-line");
let MshowMenu = false;

MmenuBtn.addEventListener("click", mobileMenu);
closeIcon.addEventListener("click", mobileMenu);
function mobileMenu() {
  if (!MshowMenu) {
    MmenuBtn.classList.add("close");
    Mmenu.classList.add("show");
    MmenuNav.classList.add("show");
    MnavItems.forEach((item) => item.classList.add("show"));
    Mline.forEach((item) => item.classList.add("close"));

    MshowMenu = true;
  } else {
    MmenuBtn.classList.remove("close");
    Mmenu.classList.remove("show");
    MmenuNav.classList.remove("show");
    MnavItems.forEach((item) => item.classList.remove("show"));
    MnavItems.forEach((item) => item.classList.remove("close"));

    MshowMenu = false;
  }
}

function toggleMenu() {
  if (!showMenu) {
    leftSide.classList.add("half");
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");

    navItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    leftSide.classList.add("half");
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");

    navItems.forEach((item) => item.classList.remove("show"));

    showMenu = false;
  }
}
