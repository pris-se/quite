const navBar = document.querySelector(".navbar");
if (navBar) {
  navBar.innerHTML = `<button class="navbar__toggler" id="navbarToggler"><span class="material-symbols-outlined"> menu </span></button>
  <a href="#" class="logo">QUIET st.</a>
  <ul class="navbar__list" id="navbarMenu">
    <li class="navbar__item">
      <a href="./index.html" class="navbar__link">About Us</a>
    </li>
    <li class="navbar__item">
      <a href="./catalog.html" class="navbar__link">Shop </a>
    </li>
    <li class="navbar__item">
      <a href="#" class="navbar__link">Delivery</a>
    </li>
  </ul>
  <button class="navbar__shopping-bag"><span class="material-symbols-outlined"> shopping_bag </span></button>
`;
}

const footer = document.querySelector(".footer");
if (footer) {
  footer.innerHTML = `
          <div class="footer__column">
            <div class="footer__logo">Quit st.</div>
          </div>
          <div class="footer__column">
            <h4 class="footer__title">Navigation</h4>
            <ul class="footer__list">
              <li class="footer__item"><a href="#" class="footer__link">About Us</a></li>
              <li class="footer__item"><a href="#" class="footer__link">Shop</a></li>
              <li class="footer__item"><a href="#" class="footer__link">Delivery</a></li>
            </ul>
          </div>
          <div class="footer__column">
            <h4 class="footer__title">Contacts</h4>
            <ul class="footer__list">
              <li class="footer__item">
                <a href="#" class="footer__link"><span class="material-symbols-outlined"> phone_iphone </span>+380 99 000 99 00</a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link"><span class="material-symbols-outlined"> mail </span>@guiet_help@gst.com</a>
              </li>
            </ul>
          </div>
          <div class="footer__column">
            <h4 class="footer__title">Social Networks</h4>
            <ul class="footer__socials">
              <li class="footer__item">
                <a href="#" class="footer__link"><img src="./img/intro/insagram.png" alt="" /></a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link"><img src="./img/intro/facebook.png" alt="" /></a>
              </li>
              <li class="footer__item">
                <a href="#" class="footer__link"><img src="./img/intro/WhatsApp.png" alt="" /></a>
              </li>
            </ul>
          </div>`;
}
