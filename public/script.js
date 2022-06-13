const navbarToggler = document.querySelector("#navbarToggler");
const navbarMenu = document.querySelector("#navbarMenu");

if (navbarToggler) {
  navbarToggler.addEventListener("click", () => {
    navbarMenu.classList.toggle("toggled");
  });
}

const catalogButton = [...document.querySelectorAll(".shop__item-button")];

// catalog ============================================================

const storage = window.localStorage;
let title;
goToCatalog = function (e) {
  key = e.target.getAttribute("key");
  console.log(title);
  storage.setItem("key", title);
  location.href += "/catalog.html";
};

if (catalogButton) {
  catalogButton.forEach((e) => e.addEventListener("click", goToCatalog));
}

// window.localStorage.clear();
// "http://127.0.0.1:5500/catalog.html";
// fetch("../catalog.html")
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     catalog = data;
//   });
