const wishlistItems = [
  {
    id: 0,
    name: "Huiawei Mate X",
    price: "$280.00",
  },
  {
    id: 1,
    name: "Huawei Mate S",
    price: "$270.00",
  },
  {
    id: 2,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 3,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 4,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 5,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 6,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 7,
    name: "Huawei Mate S",
    price: "$250.00",
  },
  {
    id: 8,
    name: "Huawei Mate S",
    price: "$220.00",
  },
  {
    id: 9,
    name: "HTC One X",
    price: "$200.00",
  },
  {
    id: 10,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 11,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 12,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 13,
    name: "HTC One V",
    price: "$280.00",
  },
  {
    id: 14,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 15,
    name: "Huawei Mate S",
    price: "$280.00",
  },
  {
    id: 16,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 17,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 18,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 19,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 20,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 21,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 22,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 23,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 24,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 25,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 26,
    name: "Huawei Mate S",
    price: "$2021.00",
  },
  {
    id: 27,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 28,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
  {
    id: 29,
    name: "Huawei Mate S",
    price: "$2000.00",
  },
];

function generatePages(items) {
  const amountOfPages = Math.ceil(items.length / 8);
  const ul = document.querySelector(".page-container");
  ul.innerHTML = "";
  for (let i = 1; i <= amountOfPages; i++) {
    if (i == currentPage) {
      const li = document.createElement("li");
      li.innerHTML = `<span class="page-link active-page-link m-2">${i}</span>`;
      ul.appendChild(li);
    } else {
      const li = document.createElement("li");
      li.innerHTML = `<span class="page-link m-2">${i}</span>`;
      ul.appendChild(li);
    }
  }
  const pages = document.querySelectorAll(".page-link");
  pages.forEach((page) => {
    page.addEventListener("click", (e) => {
      if (!e.target.classList.contains("active-page-link")) {
        pages.forEach((page) => page.classList.remove("active-page-link"));
        e.target.classList.add("active-page-link", "m-2");
        currentPage = e.target.innerHTML;
        renderWishlist(currentPage - 1, items);
      }
    });
  });
}

function renderWishlist(currentPage, wishlist) {
  const wishlistContainer = document.querySelector(".wishlist-items");
  const firstPageElement = +currentPage === 0 ? 0 : +currentPage * 8;
  if (wishlist.length < firstPageElement + 7) {
    wishlistContainer.innerHTML = "";
    for (let i = firstPageElement; i <= wishlist.length - 1; i++) {
      const itemContainer = document.createElement("div");
      itemContainer.id = i;
      itemContainer.className =
        "m-3 d-flex flex-column justify-content-center align-items-center item-container border";
      itemContainer.innerHTML = `
      <div class="img-container pt-3 d-flex flex-column justify-content-center align-items-center">
        <img src="./img/Huawei-Mate-S-668.jpg" alt="" class="wishlist-img" />
        <hr />  
        <div class="w-100 overlay">
            <button class="border border-2 border-light overlay-btn" onclick=deleteItem()>
              Remove from list
            </button>
        </div>
      </div>
      <div class="item-info w-100 d-flex flex-column justify-content-center align-items-center">  
        <a href="#" class="mt-3 item-name text-decoration-none text-dark text-uppercase fw-bold">
          ${wishlist[i].name}
        </a>
        <div class="mb-2">
          <span class="price text-decoration-none fw-bold">
            ${wishlist[i].price}
          </span>
        </div>
        <div class="actions  d-flex flex-row justify-content-center align-items-center">
          <div class='buy p-3'>
            <i class="fas fa-shopping-cart"></i>
          </div>
          <div class='delete p-3' onclick=deleteItem()>
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
      `;
      wishlistContainer.appendChild(itemContainer);
    }
  } else {
    wishlistContainer.innerHTML = "";
    for (let i = firstPageElement; i <= firstPageElement + 7; i++) {
      const itemContainer = document.createElement("div");
      itemContainer.id = i;
      itemContainer.className =
        "m-3 d-flex flex-column justify-content-center align-items-center item-container border";
      itemContainer.innerHTML = `
        <div class="img-container pt-3 d-flex flex-column justify-content-center align-items-center">
        <img src="./img/Huawei-Mate-S-668.jpg" alt="" class="wishlist-img" />
        <hr />  
        <div class="w-100 overlay">
            <button class="border border-2 border-light overlay-btn" onclick=deleteItem()>
              Remove from list
            </button>
        </div>
      </div>
      <div class="item-info w-100 d-flex flex-column justify-content-center align-items-center">  
        <a href="#" class="mt-3 item-name text-decoration-none text-dark text-uppercase fw-bold">
          ${wishlist[i].name}
        </a>
        <div class="mb-2">
          <span class="price text-decoration-none fw-bold">
            ${wishlist[i].price}
          </span>
        </div>
        <div class="actions  d-flex flex-row justify-content-center align-items-center">
          <div class='buy p-3'>
            <i class="fas fa-shopping-cart"></i>
          </div>
          <div class='delete p-3' onclick=deleteItem()>
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    `;
      wishlistContainer.appendChild(itemContainer);
    }
  }
}

function deleteItem() {
  const e = window.event;
  const itemId = e.target.parentElement.parentElement.id;
  wishlistItems.splice(itemId, 1);
  listContainer = document.querySelector(".wishlist-items");
  generatePages(wishlistItems);
  renderWishlist(currentPage - 1, wishlistItems);
  if (listContainer.hasChildNodes() === false) {
    renderWishlist(currentPage - 2, wishlistItems);
    currentPage -= 1;
    generatePages(wishlistItems);
  }
}
const searchItems = [];
let currentPage = 1;
const searchBar = document.querySelector(".search-items");
const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", () => {
  generatePages(wishlistItems);
  renderWishlist(currentPage - 1, wishlistItems);
  searchBar.value = "";
  clearBtn.classList.add("disabled");
});

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  if (searchString.length > 0) {
    clearBtn.disabled = false;
  } else {
    clearBtn.disabled = true;
  }
  const filteredItems = wishlistItems.filter((item) => {
    return item.name.toLowerCase().includes(searchString);
  });
  generatePages(filteredItems);
  renderWishlist(currentPage - 1, filteredItems);
});

renderWishlist(currentPage - 1, wishlistItems);
generatePages(wishlistItems);
