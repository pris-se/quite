const catalogList = {
  createItem: function (key) {
    const catalog = document.querySelector(".catalog"); //Получить каталог
    const catalogTitle = document.querySelector("#catalogTitle"); //Получить заголовок
    const product = `<img src="${this[key].img}" alt="catalog_item" class="catalog__image" />
              <h5 class="catalog__name">${this[key].name}</h5>
              <p class="catalog__price">${this[key].price}</p>
              <div class="catalog__color">
                <input type="radio" name="color" />
                <input type="radio" name="color" />
                <input type="radio" name="color" />
              </div>
              `;
    let catalogItem = document.createElement("div"); // Создать блок
    catalogItem.classList.add("catalog__item"); // Добвать класс
    catalogItem.innerHTML = product; // Добавить тело
    document.querySelector(".catalog").append(catalogItem); // Добвать блок в ДОМ
  },
  description: {
    "View All": "We're committed to quality. From bedroom to basement, we'll help you find top quality furniture that's suited to your tastes.",
    Furniture: "Quality materials, excellent fittings. Qualified service. Over 100,000 products. Weekly discounts, promotions and super offers.",
    Lamps: "Light bulbs for residential, office, retail and industrial premises are chosen based on many criteria, but the main thing is that they",
  },
  1: {
    category: "Furniture",
    name: "Double Bed",
    price: "3000 EUR",
    img: "./img/catalog/furniture/double_bed.png",
    id: 1,
  },
  2: {
    category: "Furniture",
    name: "Big Bed",
    price: "5000 EUR",
    img: "./img/catalog/furniture/big_bed.jpg",
    id: 2,
  },
  3: {
    category: "Furniture",
    name: "Sofa",
    price: "9000 EUR",
    img: "./img/catalog/furniture/sofa.jpg",
    id: 3,
  },
  4: {
    category: "Lamps",
    name: "Double lamps",
    price: "3000 EUR",
    img: "./img/catalog/furniture/double_bed.png",
    id: 1,
  },
  5: {
    category: "Lamps",
    name: "Big lamps",
    price: "5000 EUR",
    img: "./img/catalog/furniture/big_bed.jpg",
    id: 2,
  },
  6: {
    category: "Lamps",
    name: "Lamp",
    price: "9000 EUR",
    img: "./img/catalog/furniture/sofa.jpg",
    id: 3,
  },
  7: {
    category: "Bed Linen",
    name: "Large Bed",
    price: "15000 EUR",
    img: "./img/catalog/furniture/sofa.jpg",
    id: 3,
  },
  8: {
    category: "Bed Linen",
    name: "Smoll Bed",
    price: "19000 EUR",
    img: "./img/catalog/furniture/sofa.jpg",
    id: 3,
  },
};

const catalog = document.querySelector(".catalog"); //Получить каталог
const catalogTitle = document.querySelector("#catalogTitle"); //Получить заголовок
// Создать блок с товаром
// function createItem(key) {
//   const catalog = document.querySelector(".catalog"); //Получить каталог
//   const catalogTitle = document.querySelector("#catalogTitle"); //Получить заголовок
//   const product = `<img src="${catalogList[key].img}" alt="catalog_item" class="catalog__image" />
//               <h5 class="catalog__name">${catalogList[key].name}</h5>
//               <p class="catalog__price">${catalogList[key].price}</p>
//               <div class="catalog__color">
//                 <input type="radio" name="color" />
//                 <input type="radio" name="color" />
//                 <input type="radio" name="color" />
//               </div>
//               `;
//   let catalogItem = document.createElement("div"); // Создать блок
//   catalogItem.classList.add("catalog__item"); // Добвать класс
//   catalogItem.innerHTML = product; // Добавить тело
//   document.querySelector(".catalog").append(catalogItem); // Добвать блок в ДОМ
// }

//=====================================//
const mainText = document.querySelector(".main__text");
// Показать категорию
function showItem(e) {
  // Проверка на наличие блоков и совпадение заголовка
  if (e.target.innerHTML !== catalogTitle.innerHTML || catalog.children.length === 0) {
    unChacked(); // Удаление класса checked
    clearCatalog(); // Очистка каталога
    for (id in catalogList) {
      if (catalogList[id].category === e.target.innerHTML) {
        // Проверка категории
        catalogList.createItem(id);
      } else if (e.target.innerHTML === "View All" && catalogList[id].category) {
        // Вывести все элементы
        catalogList.createItem(id);
      }
    }
    catalogTitle.innerHTML = e.target.innerHTML; // Изменить заголовок
    e.target.classList.add("checked"); // Добватиь класс chacked
  }
  e.target.innerHTML in catalogList.description
    ? (mainText.innerHTML = catalogList.description[e.target.innerHTML])
    : (mainText.innerHTML = e.target.innerHTML);
}

// Очистить каталог
function clearCatalog() {
  catalog.innerHTML = null;
}
// Убрать класс chacked
function unChacked() {
  document.querySelectorAll(".checked").forEach((el) => el.classList.remove("checked"));
}

// Добавить событие в список
const asideLink = document.querySelectorAll(".aside__link");
asideLink.forEach((el) => el.addEventListener("click", showItem));
