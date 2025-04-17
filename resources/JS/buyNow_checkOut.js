/**
 *
 * This code retrieves what was added to localStorage from buyNow_showOnly() on storeLocalStorageImg.js (i.e., buyNow_showOnly_[product]) and ensures that only the buyNow_showOnly_[product] in localStorage will be visible on the buyNow_checkOut page.
 *
 * This completes the purpose of the "Buy Now" option, which will only display one product at a time on the buyNow_checkOut page.
 */

// Define a mapping of product names to the elements that should be hidden
const productHideMapping = {
  pillow: [
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  car: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  camera: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  potatoHead: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  makeupOne: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  beats: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  jbl: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  simon: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  truth: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-ten",
    ".cart-product-details-wrap-eleven",
  ],
  makeupTwo: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-eleven",
  ],
  degreaser: [
    ".cart-product-details-wrap-one",
    ".cart-product-details-wrap-two",
    ".cart-product-details-wrap-three",
    ".cart-product-details-wrap-four",
    ".cart-product-details-wrap-five",
    ".cart-product-details-wrap-six",
    ".cart-product-details-wrap-seven",
    ".cart-product-details-wrap-eight",
    ".cart-product-details-wrap-nine",
    ".cart-product-details-wrap-ten",
  ],
};

// Function to hide elements based on the product name
function hideElements_buyNow_showOnly(productName) {
  const elementsToHide = productHideMapping[productName];
  if (elementsToHide) {
    const elements = document.querySelectorAll(elementsToHide.join(", "));
    elements.forEach((element) => {
      element.style.display = "none";
    });
  }
}

// Call the function for each product
Object.keys(productHideMapping).forEach((productName) => {
  if (localStorage.getItem(`buyNow_showOnly_${productName}`) !== null) {
    hideElements_buyNow_showOnly(productName);
  }
});

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *  */

/**
 *
 * This ensures that when there is no count, or null value, in local storage for the product on the buyNow_checkOut page, then by default the quanity count is 1 due to the nature of always needing at least 1 quanity as a "buy now" feature.
 *
 *
 *  */

function buyNowQuantity_defaultIs1() {
  const products = [
    { id: "countOne", name: "Pillow" },
    { id: "countTwo", name: "Car" },
    { id: "countThree", name: "Camera" },
    { id: "countFour", name: "Potato Head" },
    { id: "countFive", name: "Makeup One" },
    { id: "countSix", name: "Beats by Dre" },
    { id: "countSeven", name: "JBL Speaker" },
    { id: "countEight", name: "Simon Rabbit" },
    { id: "countNine", name: "Truth Hoodie" },
    { id: "countTen", name: "Makeup Two" },
    { id: "countEleven", name: "Automotive Degreaser" },
  ];

  products.forEach((product) => {
    const count = localStorage.getItem(product.id) || 1;
    document.getElementById(
      `productCount${product.id.replace("count", "")}`
    ).innerText = count;
  });
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * This code retrieves specific key names' values from localstorage (i.e., [product]_price_buyNow_ ) only if its #cart-product-img is not displayed as "none" and it sets those values to the subtotal on buyNow_checkOut page.
 */

// Pillow
const pillow_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgOne = document.getElementById("cart-product-img-one");

if (cartProductImgOne.style.display !== "none") {
  const storedPillowPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("pillow_price_buyNow_")
  );

  if (storedPillowPrice) {
    pillow_price_subtotal.innerText = localStorage.getItem(storedPillowPrice);
  }
}

// Car (countTwo)
const car_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgTwo = document.getElementById("cart-product-img-two");

if (cartProductImgTwo.style.display !== "none") {
  const storedCarPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("car_price_buyNow_")
  );

  if (storedCarPrice) {
    car_price_subtotal.innerText = localStorage.getItem(storedCarPrice);
  }
}

// Camera (countThree)
const camera_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgThree = document.getElementById("cart-product-img-three");

if (cartProductImgThree.style.display !== "none") {
  const storedCameraPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("camera_price_buyNow_")
  );

  if (storedCameraPrice) {
    camera_price_subtotal.innerText = localStorage.getItem(storedCameraPrice);
  }
}

// Potato Head (countFour)
const potatoHead_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgFour = document.getElementById("cart-product-img-four");

if (cartProductImgFour.style.display !== "none") {
  const storedPotatoHeadPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("potatoHead_price_buyNow_")
  );

  if (storedPotatoHeadPrice) {
    potatoHead_price_subtotal.innerText = localStorage.getItem(
      storedPotatoHeadPrice
    );
  }
}

// Makeup One (countFive)
const makeupOne_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgFive = document.getElementById("cart-product-img-five");

if (cartProductImgFive.style.display !== "none") {
  const storedMakeupOnePrice = Object.keys(localStorage).find((key) =>
    key.startsWith("makeupOne_price_buyNow_")
  );

  if (storedMakeupOnePrice) {
    makeupOne_price_subtotal.innerText =
      localStorage.getItem(storedMakeupOnePrice);
  }
}

// Beats by Dre
const beats_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgSix = document.getElementById("cart-product-img-six");

if (cartProductImgSix.style.display !== "none") {
  const storedBeatsPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("beats_price_buyNow_")
  );
  if (storedBeatsPrice) {
    beats_price_subtotal.innerText = localStorage.getItem(storedBeatsPrice);
  }
}

// JBL (countSeven)
const jbl_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgSeven = document.getElementById("cart-product-img-seven");

if (cartProductImgSeven.style.display !== "none") {
  const storedJblPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("jbl_price_buyNow_")
  );

  if (storedJblPrice) {
    jbl_price_subtotal.innerText = localStorage.getItem(storedJblPrice);
  }
}

// Simon Rabbit (countEight)
const simon_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgEight = document.getElementById("cart-product-img-eight");

if (cartProductImgEight.style.display !== "none") {
  const storedSimonPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("simon_price_buyNow_")
  );

  if (storedSimonPrice) {
    simon_price_subtotal.innerText = localStorage.getItem(storedSimonPrice);
  }
}

// Truth (countNine)
const truth_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgNine = document.getElementById("cart-product-img-nine");

if (cartProductImgNine.style.display !== "none") {
  const storedTruthPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("truth_price_buyNow_")
  );

  if (storedTruthPrice) {
    truth_price_subtotal.innerText = localStorage.getItem(storedTruthPrice);
  }
}

// Makeup Two (countTen)
const makeupTwo_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgTen = document.getElementById("cart-product-img-ten");

if (cartProductImgTen.style.display !== "none") {
  const storedMakeupTwoPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("makeupTwo_price_buyNow_")
  );

  if (storedMakeupTwoPrice) {
    makeupTwo_price_subtotal.innerText =
      localStorage.getItem(storedMakeupTwoPrice);
  }
}

// Automotive Degreaser (countEleven)
const degreaser_price_subtotal = document.getElementById(
  "multiplied-subtotal_buyNow"
);
const cartProductImgEleven = document.getElementById("cart-product-img-eleven");

if (cartProductImgEleven.style.display !== "none") {
  const storedDegreaserPrice = Object.keys(localStorage).find((key) =>
    key.startsWith("degreaser_price_buyNow_")
  );

  if (storedDegreaserPrice) {
    degreaser_price_subtotal.innerText =
      localStorage.getItem(storedDegreaserPrice);
  }
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// Increment functions
function incrementProductCountOne() {
  const productCountOne = document.getElementById("productCountOne");
  const currentCount = parseInt(productCountOne.textContent);
  productCountOne.textContent = currentCount + 1;
}

function incrementProductCountTwo() {
  const productCountTwo = document.getElementById("productCountTwo");
  const currentCount = parseInt(productCountTwo.textContent);
  productCountTwo.textContent = currentCount + 1;
}

function incrementProductCountThree() {
  const productCountThree = document.getElementById("productCountThree");
  const currentCount = parseInt(productCountThree.textContent);
  productCountThree.textContent = currentCount + 1;
}

function incrementProductCountFour() {
  const productCountFour = document.getElementById("productCountFour");
  const currentCount = parseInt(productCountFour.textContent);
  productCountFour.textContent = currentCount + 1;
}

function incrementProductCountFive() {
  const productCountFive = document.getElementById("productCountFive");
  const currentCount = parseInt(productCountFive.textContent);
  productCountFive.textContent = currentCount + 1;
}

function incrementProductCountSix() {
  const productCountSix = document.getElementById("productCountSix");
  const currentCount = parseInt(productCountSix.textContent);
  productCountSix.textContent = currentCount + 1;
}

function incrementProductCountSeven() {
  const productCountSeven = document.getElementById("productCountSeven");
  const currentCount = parseInt(productCountSeven.textContent);
  productCountSeven.textContent = currentCount + 1;
}

function incrementProductCountEight() {
  const productCountEight = document.getElementById("productCountEight");
  const currentCount = parseInt(productCountEight.textContent);
  productCountEight.textContent = currentCount + 1;
}

function incrementProductCountNine() {
  const productCountNine = document.getElementById("productCountNine");
  const currentCount = parseInt(productCountNine.textContent);
  productCountNine.textContent = currentCount + 1;
}

function incrementProductCountTen() {
  const productCountTen = document.getElementById("productCountTen");
  const currentCount = parseInt(productCountTen.textContent);
  productCountTen.textContent = currentCount + 1;
}

function incrementProductCountEleven() {
  const productCountEleven = document.getElementById("productCountEleven");
  const currentCount = parseInt(productCountEleven.textContent);
  productCountEleven.textContent = currentCount + 1;
}

// Decrement functions
function decrementProductCountOne() {
  const productCountOne = document.getElementById("productCountOne");
  const currentCount = parseInt(productCountOne.textContent);
  if (currentCount > 1) {
    productCountOne.textContent = currentCount - 1;
  }
}

function decrementProductCountTwo() {
  const productCountTwo = document.getElementById("productCountTwo");
  const currentCount = parseInt(productCountTwo.textContent);
  if (currentCount > 1) {
    productCountTwo.textContent = currentCount - 1;
  }
}

function decrementProductCountThree() {
  const productCountThree = document.getElementById("productCountThree");
  const currentCount = parseInt(productCountThree.textContent);
  if (currentCount > 1) {
    productCountThree.textContent = currentCount - 1;
  }
}

function decrementProductCountFour() {
  const productCountFour = document.getElementById("productCountFour");
  const currentCount = parseInt(productCountFour.textContent);
  if (currentCount > 1) {
    productCountFour.textContent = currentCount - 1;
  }
}

function decrementProductCountFive() {
  const productCountFive = document.getElementById("productCountFive");
  const currentCount = parseInt(productCountFive.textContent);
  if (currentCount > 1) {
    productCountFive.textContent = currentCount - 1;
  }
}

function decrementProductCountSix() {
  const productCountSix = document.getElementById("productCountSix");
  const currentCount = parseInt(productCountSix.textContent);
  if (currentCount > 1) {
    productCountSix.textContent = currentCount - 1;
  }
}

function decrementProductCountSeven() {
  const productCountSeven = document.getElementById("productCountSeven");
  const currentCount = parseInt(productCountSeven.textContent);
  if (currentCount > 1) {
    productCountSeven.textContent = currentCount - 1;
  }
}

function decrementProductCountEight() {
  const productCountEight = document.getElementById("productCountEight");
  const currentCount = parseInt(productCountEight.textContent);
  if (currentCount > 1) {
    productCountEight.textContent = currentCount - 1;
  }
}

function decrementProductCountNine() {
  const productCountNine = document.getElementById("productCountNine");
  const currentCount = parseInt(productCountNine.textContent);
  if (currentCount > 1) {
    productCountNine.textContent = currentCount - 1;
  }
}

function decrementProductCountTen() {
  const productCountTen = document.getElementById("productCountTen");
  const currentCount = parseInt(productCountTen.textContent);
  if (currentCount > 1) {
    productCountTen.textContent = currentCount - 1;
  }
}

function decrementProductCountEleven() {
  const productCountEleven = document.getElementById("productCountEleven");
  const currentCount = parseInt(productCountEleven.textContent);
  if (currentCount > 1) {
    productCountEleven.textContent = currentCount - 1;
  }
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**

This code applies styles to the "+" and "-" button elements.

When a product count is 1, its corresponding minus icon (.quantity-minus-icons-radius-co) is set to 50% opacity and its cursor is changed to "not-allowed" on hover.

When a product count is 1 and the user clicks the plus icon (.quantity-plus-icons-radius-co), the styles are removed. 

*/

function updateIconStyles_buyNow_checkOut(productCount, minusIcon) {
  minusIcon.style.opacity =
    parseInt(productCount.textContent) === 1 ? "0.5" : "1";
  minusIcon.style.cursor =
    parseInt(productCount.textContent) === 1 ? "not-allowed" : "";
}

function initProductCount_checkOut(
  productCountId,
  plusIconClass,
  minusIconClass
) {
  const productCount = document.getElementById(productCountId);
  const plusIcon = document.querySelector(`.${plusIconClass}`);
  const minusIcon = document.querySelector(`.${minusIconClass}`);

  updateIconStyles_buyNow_checkOut(productCount, minusIcon);
  productCount.addEventListener("DOMSubtreeModified", () =>
    updateIconStyles_buyNow_checkOut(productCount, minusIcon)
  );

  [plusIcon, minusIcon].forEach((icon) =>
    icon.addEventListener("click", () =>
      updateIconStyles_buyNow_checkOut(productCount, minusIcon)
    )
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const numbers = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
  ];
  const productCounts = numbers.map((number, index) => ({
    id: `productCount${number}`,
    plusIconClass: `quantity-plus-icons-radius-co-${number.toLowerCase()}`,
    minusIconClass: `quantity-minus-icons-radius-co-${number.toLowerCase()}`,
  }));

  productCounts.forEach((productCount) =>
    initProductCount_checkOut(
      productCount.id,
      productCount.plusIconClass,
      productCount.minusIconClass
    )
  );
});

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * ProductCounts on page match localstorage counts, and their values change in real time together.
 *
 * This code also prevents both productCounts and counts in localstorage to go below 1.
 *
 */

// Pillow (countOne_Temp)
const productCountOne_buyNow = document.getElementById("productCountOne");

const countOne = localStorage.getItem("countOne_TEMP");
productCountOne_buyNow.innerHTML = countOne;

function updateCountOne() {
  const countOne = productCountOne_buyNow.textContent;
  const countOneValue = Math.max(1, parseInt(countOne));
  localStorage.setItem("countOne_TEMP", countOneValue.toString());
}

productCountOne_buyNow.addEventListener("DOMSubtreeModified", updateCountOne);

window.addEventListener("storage", () => {
  const newCountOne = localStorage.getItem("countOne_TEMP");
  productCountOne_buyNow.innerHTML = newCountOne;
});

function incrementProductCountOne() {
  const currentValue = parseInt(productCountOne_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountOne_buyNow.textContent = newValue.toString();
  updateCountOne();
}

function decrementProductCountOne() {
  const currentValue = parseInt(productCountOne_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountOne_buyNow.textContent = newValue.toString();
  updateCountOne();
}

// Car (countTwo_Temp)
const productCountTwo_buyNow = document.getElementById("productCountTwo");

const countTwo = localStorage.getItem("countTwo_TEMP");
productCountTwo_buyNow.innerHTML = countTwo;

function updateCountTwo() {
  const countTwo = productCountTwo_buyNow.textContent;
  const countTwoValue = Math.max(1, parseInt(countTwo));
  localStorage.setItem("countTwo_TEMP", countTwoValue.toString());
}

productCountTwo_buyNow.addEventListener("DOMSubtreeModified", updateCountTwo);

window.addEventListener("storage", () => {
  const newCountTwo = localStorage.getItem("countTwo_TEMP");
  productCountTwo_buyNow.innerHTML = newCountTwo;
});

function incrementProductCountTwo() {
  const currentValue = parseInt(productCountTwo_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountTwo_buyNow.textContent = newValue.toString();
  updateCountTwo();
}

function decrementProductCountTwo() {
  const currentValue = parseInt(productCountTwo_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountTwo_buyNow.textContent = newValue.toString();
  updateCountTwo();
}

// Camera (countThree_Temp)
const productCountThree_buyNow = document.getElementById("productCountThree");

const countThree = localStorage.getItem("countThree_TEMP");
productCountThree_buyNow.innerHTML = countThree;

function updateCountThree() {
  const countThree = productCountThree_buyNow.textContent;
  const countThreeValue = Math.max(1, parseInt(countThree));
  localStorage.setItem("countThree_TEMP", countThreeValue.toString());
}

productCountThree_buyNow.addEventListener(
  "DOMSubtreeModified",
  updateCountThree
);

window.addEventListener("storage", () => {
  const newCountThree = localStorage.getItem("countThree_TEMP");
  productCountThree_buyNow.innerHTML = newCountThree;
});

function incrementProductCountThree() {
  const currentValue = parseInt(productCountThree_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountThree_buyNow.textContent = newValue.toString();
  updateCountThree();
}

function decrementProductCountThree() {
  const currentValue = parseInt(productCountThree_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountThree_buyNow.textContent = newValue.toString();
  updateCountThree();
}

// Potato Head (countFour_Temp)
const productCountFour_buyNow = document.getElementById("productCountFour");

const countFour = localStorage.getItem("countFour_TEMP");
productCountFour_buyNow.innerHTML = countFour;

function updateCountFour() {
  const countFour = productCountFour_buyNow.textContent;
  const countFourValue = Math.max(1, parseInt(countFour));
  localStorage.setItem("countFour_TEMP", countFourValue.toString());
}

productCountFour_buyNow.addEventListener("DOMSubtreeModified", updateCountFour);

window.addEventListener("storage", () => {
  const newCountFour = localStorage.getItem("countFour_TEMP");
  productCountFour_buyNow.innerHTML = newCountFour;
});

function incrementProductCountFour() {
  const currentValue = parseInt(productCountFour_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountFour_buyNow.textContent = newValue.toString();
  updateCountFour();
}

function decrementProductCountFour() {
  const currentValue = parseInt(productCountFour_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountFour_buyNow.textContent = newValue.toString();
  updateCountFour();
}

// Makeup One (countFive_Temp)
const productCountFive_buyNow = document.getElementById("productCountFive");

const countFive = localStorage.getItem("countFive_TEMP");
productCountFive_buyNow.innerHTML = countFive;

function updateCountFive() {
  const countFive = productCountFive_buyNow.textContent;
  const countFiveValue = Math.max(1, parseInt(countFive));
  localStorage.setItem("countFive_TEMP", countFiveValue.toString());
}

productCountFive_buyNow.addEventListener("DOMSubtreeModified", updateCountFive);

window.addEventListener("storage", () => {
  const newCountFive = localStorage.getItem("countFive_TEMP");
  productCountFive_buyNow.innerHTML = newCountFive;
});

function incrementProductCountFive() {
  const currentValue = parseInt(productCountFive_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountFive_buyNow.textContent = newValue.toString();
  updateCountFive();
}

function decrementProductCountFive() {
  const currentValue = parseInt(productCountFive_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountFive_buyNow.textContent = newValue.toString();
  updateCountFive();
}

// Beats by Dre (countSix_Temp)
const productCountSix_buyNow = document.getElementById("productCountSix");

const countSix = localStorage.getItem("countSix_TEMP");
productCountSix_buyNow.innerHTML = countSix;

function updateCountSix() {
  const countSix = productCountSix_buyNow.textContent;
  const countSixValue = Math.max(1, parseInt(countSix));
  localStorage.setItem("countSix_TEMP", countSixValue.toString());
}

productCountSix_buyNow.addEventListener("DOMSubtreeModified", updateCountSix);

window.addEventListener("storage", () => {
  const newCountSix = localStorage.getItem("countSix_TEMP");
  productCountSix_buyNow.innerHTML = newCountSix;
});

function incrementProductCountSix() {
  const currentValue = parseInt(productCountSix_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountSix_buyNow.textContent = newValue.toString();
  updateCountSix();
}

function decrementProductCountSix() {
  const currentValue = parseInt(productCountSix_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountSix_buyNow.textContent = newValue.toString();
  updateCountSix();
}

// JBL (countSeven_Temp)
const productCountSeven_buyNow = document.getElementById("productCountSeven");

const countSeven = localStorage.getItem("countSeven_TEMP");
productCountSeven_buyNow.innerHTML = countSeven;

function updateCountSeven() {
  const countSeven = productCountSeven_buyNow.textContent;
  const countSevenValue = Math.max(1, parseInt(countSeven));
  localStorage.setItem("countSeven_TEMP", countSevenValue.toString());
}

productCountSeven_buyNow.addEventListener(
  "DOMSubtreeModified",
  updateCountSeven
);

window.addEventListener("storage", () => {
  const newCountSeven = localStorage.getItem("countSeven_TEMP");
  productCountSeven_buyNow.innerHTML = newCountSeven;
});

function incrementProductCountSeven() {
  const currentValue = parseInt(productCountSeven_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountSeven_buyNow.textContent = newValue.toString();
  updateCountSeven();
}

function decrementProductCountSeven() {
  const currentValue = parseInt(productCountSeven_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountSeven_buyNow.textContent = newValue.toString();
  updateCountSeven();
}

// Simon Rabbit (countEight_Temp)
const productCountEight_buyNow = document.getElementById("productCountEight");

const countEight = localStorage.getItem("countEight_TEMP");
productCountEight_buyNow.innerHTML = countEight;

function updateCountEight() {
  const countEight = productCountEight_buyNow.textContent;
  const countEightValue = Math.max(1, parseInt(countEight));
  localStorage.setItem("countEight_TEMP", countEightValue.toString());
}

productCountEight_buyNow.addEventListener(
  "DOMSubtreeModified",
  updateCountEight
);

window.addEventListener("storage", () => {
  const newCountEight = localStorage.getItem("countEight_TEMP");
  productCountEight_buyNow.innerHTML = newCountEight;
});

function incrementProductCountEight() {
  const currentValue = parseInt(productCountEight_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountEight_buyNow.textContent = newValue.toString();
  updateCountEight();
}

function decrementProductCountEight() {
  const currentValue = parseInt(productCountEight_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountEight_buyNow.textContent = newValue.toString();
  updateCountEight();
}

// Truth (countNine_Temp)
const productCountNine_buyNow = document.getElementById("productCountNine");

const countNine = localStorage.getItem("countNine_TEMP");
productCountNine_buyNow.innerHTML = countNine;

function updateCountNine() {
  const countNine = productCountNine_buyNow.textContent;
  const countNineValue = Math.max(1, parseInt(countNine));
  localStorage.setItem("countNine_TEMP", countNineValue.toString());
}

productCountNine_buyNow.addEventListener("DOMSubtreeModified", updateCountNine);

window.addEventListener("storage", () => {
  const newCountNine = localStorage.getItem("countNine_TEMP");
  productCountNine_buyNow.innerHTML = newCountNine;
});

function incrementProductCountNine() {
  const currentValue = parseInt(productCountNine_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountNine_buyNow.textContent = newValue.toString();
  updateCountNine();
}

function decrementProductCountNine() {
  const currentValue = parseInt(productCountNine_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountNine_buyNow.textContent = newValue.toString();
  updateCountNine();
}

// Makeup Two (countTen_Temp)
const productCountTen_buyNow = document.getElementById("productCountTen");

const countTen = localStorage.getItem("countTen_TEMP");
productCountTen_buyNow.innerHTML = countTen;

function updateCountTen() {
  const countTen = productCountTen_buyNow.textContent;
  const countTenValue = Math.max(1, parseInt(countTen));
  localStorage.setItem("countTen_TEMP", countTenValue.toString());
}

productCountTen_buyNow.addEventListener("DOMSubtreeModified", updateCountTen);

window.addEventListener("storage", () => {
  const newCountTen = localStorage.getItem("countTen_TEMP");
  productCountTen_buyNow.innerHTML = newCountTen;
});

function incrementProductCountTen() {
  const currentValue = parseInt(productCountTen_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountTen_buyNow.textContent = newValue.toString();
  updateCountTen();
}

function decrementProductCountTen() {
  const currentValue = parseInt(productCountTen_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountTen_buyNow.textContent = newValue.toString();
  updateCountTen();
}

// Automotive Degreaser (countEleven_Temp)
const productCountEleven_buyNow = document.getElementById("productCountEleven");

const countEleven = localStorage.getItem("countEleven_TEMP");
productCountEleven_buyNow.innerHTML = countEleven;

function updateCountEleven() {
  const countEleven = productCountEleven_buyNow.textContent;
  const countElevenValue = Math.max(1, parseInt(countEleven));
  localStorage.setItem("countEleven_TEMP", countElevenValue.toString());
}

productCountEleven_buyNow.addEventListener(
  "DOMSubtreeModified",
  updateCountEleven
);

window.addEventListener("storage", () => {
  const newCountEleven = localStorage.getItem("countEleven_TEMP");
  productCountEleven_buyNow.innerHTML = newCountEleven;
});

function incrementProductCountEleven() {
  const currentValue = parseInt(productCountEleven_buyNow.textContent);
  const newValue = currentValue + 1;
  productCountEleven_buyNow.textContent = newValue.toString();
  updateCountEleven();
}

function decrementProductCountEleven() {
  const currentValue = parseInt(productCountEleven_buyNow.textContent);
  const newValue = Math.max(1, currentValue - 1);
  productCountEleven_buyNow.textContent = newValue.toString();
  updateCountEleven();
}

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * Calculates and updates the multiplied subtotal based on values retrieved from local storage.
 * The function is called multiple times with different price keys to handle various scenarios.
 */

// Pillow (countOne_TEMP)
function pillow_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-one") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countOne = parseInt(localStorage.getItem("countOne_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countOne * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountOne = parseInt(localStorage.getItem("countOne_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountOne * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

pillow_buyNow_subtotal("pillow_price_buyNow_reg_TEMP");
pillow_buyNow_subtotal("pillow_price_buyNow_fiftyOff_TEMP");
pillow_buyNow_subtotal("pillow_price_buyNow_underTwo_TEMP");
pillow_buyNow_subtotal("pillow_price_buyNow_superDeals_TEMP");

// Car (countTwo_TEMP)
function car_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-two") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countTwo = parseInt(localStorage.getItem("countTwo_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countTwo * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountTwo = parseInt(localStorage.getItem("countTwo_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountTwo * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

car_buyNow_subtotal("car_price_buyNow_reg_TEMP");
car_buyNow_subtotal("car_price_buyNow_fiftyOff_TEMP");
car_buyNow_subtotal("car_price_buyNow_underTwo_TEMP");
car_buyNow_subtotal("car_price_buyNow_superDeals_TEMP");

// Camera (countThree_TEMP)
function camera_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-three") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countThree = parseInt(localStorage.getItem("countThree_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countThree * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountThree = parseInt(localStorage.getItem("countThree_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountThree * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

camera_buyNow_subtotal("camera_price_buyNow_reg_TEMP");
camera_buyNow_subtotal("camera_price_buyNow_fiftyOff_TEMP");
camera_buyNow_subtotal("camera_price_buyNow_underTwo_TEMP");
camera_buyNow_subtotal("camera_price_buyNow_superDeals_TEMP");

// Potato Head (countFour_TEMP)
function potatoHead_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-four") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countFour = parseInt(localStorage.getItem("countFour_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countFour * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountFour = parseInt(localStorage.getItem("countFour_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountFour * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

potatoHead_buyNow_subtotal("potatoHead_price_buyNow_reg_TEMP");
potatoHead_buyNow_subtotal("potatoHead_price_buyNow_fiftyOff_TEMP");
potatoHead_buyNow_subtotal("potatoHead_price_buyNow_underTwo_TEMP");
potatoHead_buyNow_subtotal("potatoHead_price_buyNow_superDeals_TEMP");

// Makeup One (countFive_TEMP)
function makeupOne_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-five") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countFive = parseInt(localStorage.getItem("countFive_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countFive * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountFive = parseInt(localStorage.getItem("countFive_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountFive * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

makeupOne_buyNow_subtotal("makeupOne_price_buyNow_reg_TEMP");
makeupOne_buyNow_subtotal("makeupOne_price_buyNow_fiftyOff_TEMP");
makeupOne_buyNow_subtotal("makeupOne_price_buyNow_underTwo_TEMP");
makeupOne_buyNow_subtotal("makeupOne_price_buyNow_superDeals_TEMP");

// Beats by Dre (countSix_TEMP)
function beats_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-six") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countSix = parseInt(localStorage.getItem("countSix_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countSix * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountSix = parseInt(localStorage.getItem("countSix_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountSix * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

beats_buyNow_subtotal("beats_price_buyNow_reg_TEMP");
beats_buyNow_subtotal("beats_price_buyNow_fiftyOff_TEMP");
beats_buyNow_subtotal("beats_price_buyNow_underTwo_TEMP");
beats_buyNow_subtotal("beats_price_buyNow_superDeals_TEMP");

// JBL (countSeven_TEMP)
function jbl_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-seven") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countSeven = parseInt(localStorage.getItem("countSeven_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countSeven * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountSeven = parseInt(localStorage.getItem("countSeven_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountSeven * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

jbl_buyNow_subtotal("jbl_price_buyNow_reg_TEMP");
jbl_buyNow_subtotal("jbl_price_buyNow_fiftyOff_TEMP");
jbl_buyNow_subtotal("jbl_price_buyNow_underTwo_TEMP");
jbl_buyNow_subtotal("jbl_price_buyNow_superDeals_TEMP");

// Simon Rabbit (countEight_TEMP)
function simon_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-eight") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countEight = parseInt(localStorage.getItem("countEight_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countEight * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountEight = parseInt(localStorage.getItem("countEight_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountEight * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

simon_buyNow_subtotal("simon_price_buyNow_reg_TEMP");
simon_buyNow_subtotal("simon_price_buyNow_fiftyOff_TEMP");
simon_buyNow_subtotal("simon_price_buyNow_underTwo_TEMP");
simon_buyNow_subtotal("simon_price_buyNow_superDeals_TEMP");

// Truth (countNine_TEMP)
function truth_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-nine") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countNine = parseInt(localStorage.getItem("countNine_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countNine * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountNine = parseInt(localStorage.getItem("countNine_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountNine * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

truth_buyNow_subtotal("truth_price_buyNow_reg_TEMP");
truth_buyNow_subtotal("truth_price_buyNow_fiftyOff_TEMP");
truth_buyNow_subtotal("truth_price_buyNow_underTwo_TEMP");
truth_buyNow_subtotal("truth_price_buyNow_superDeals_TEMP");

// Makeup Two (countTen_TEMP)
function makeupTwo_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-ten") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countTen = parseInt(localStorage.getItem("countTen_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countTen * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountTen = parseInt(localStorage.getItem("countTen_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountTen * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

makeupTwo_buyNow_subtotal("makeupTwo_price_buyNow_reg_TEMP");
makeupTwo_buyNow_subtotal("makeupTwo_price_buyNow_fiftyOff_TEMP");
makeupTwo_buyNow_subtotal("makeupTwo_price_buyNow_underTwo_TEMP");
makeupTwo_buyNow_subtotal("makeupTwo_price_buyNow_superDeals_TEMP");

// Automotive Degreaser (countEleven_TEMP)
function degreaser_buyNow_subtotal(priceKey) {
  if (
    document.querySelector(".cart-product-details-wrap-eleven") !== null &&
    localStorage.getItem(priceKey) !== null
  ) {
    const countEleven = parseInt(localStorage.getItem("countEleven_TEMP"));
    const price = parseFloat(localStorage.getItem(priceKey));
    const multipliedSubtotal = countEleven * price;

    document.getElementById("multiplied-subtotal_buyNow").innerHTML =
      multipliedSubtotal.toFixed(2);

    setInterval(() => {
      const newCountEleven = parseInt(localStorage.getItem("countEleven_TEMP"));
      const newPrice = parseFloat(localStorage.getItem(priceKey));
      const newMultipliedSubtotal = newCountEleven * newPrice;

      document.getElementById("multiplied-subtotal_buyNow").innerHTML =
        newMultipliedSubtotal.toFixed(2);
    }, 0);
  }
}

degreaser_buyNow_subtotal("degreaser_price_buyNow_reg_TEMP");
degreaser_buyNow_subtotal("degreaser_price_buyNow_fiftyOff_TEMP");
degreaser_buyNow_subtotal("degreaser_price_buyNow_underTwo_TEMP");
degreaser_buyNow_subtotal("degreaser_price_buyNow_superDeals_TEMP");

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 *
 * When on the buyNow_checkOut page, only the keys in local storage with _TEMP at the end of their names will display on the page.
 *
 * Because the _TEMP keys are temporary and used specifically for the buyNow_checkOut page, the other keys that don't have _TEMP attached to them remain hidden from the page but still available in local storage for the shoppingCart page.
 *
 */

const noneTEMPkeys_displayNone_buyNow = [
  {
    id: "One",
    temp: "imgDataOne_TEMP",
    selector: ".cart-product-details-wrap-one",
  },
  {
    id: "Two",
    temp: "imgDataTwo_TEMP",
    selector: ".cart-product-details-wrap-two",
  },
  {
    id: "Three",
    temp: "imgDataThree_TEMP",
    selector: ".cart-product-details-wrap-three",
  },
  {
    id: "Four",
    temp: "imgDataFour_TEMP",
    selector: ".cart-product-details-wrap-four",
  },
  {
    id: "Five",
    temp: "imgDataFive_TEMP",
    selector: ".cart-product-details-wrap-five",
  },
  {
    id: "Six",
    temp: "imgDataSix_TEMP",
    selector: ".cart-product-details-wrap-six",
  },
  {
    id: "Seven",
    temp: "imgDataSeven_TEMP",
    selector: ".cart-product-details-wrap-seven",
  },
  {
    id: "Eight",
    temp: "imgDataEight_TEMP",
    selector: ".cart-product-details-wrap-eight",
  },
  {
    id: "Nine",
    temp: "imgDataNine_TEMP",
    selector: ".cart-product-details-wrap-nine",
  },
  {
    id: "Ten",
    temp: "imgDataTen_TEMP",
    selector: ".cart-product-details-wrap-ten",
  },
  {
    id: "Eleven",
    temp: "imgDataEleven_TEMP",
    selector: ".cart-product-details-wrap-eleven",
  },
];

function toggleCartProductDetails_buyNow(productId) {
  const imgDataTemp = localStorage.getItem(productId.temp);
  const cartProductDetails = document.querySelector(productId.selector);
  if (imgDataTemp !== null) {
    cartProductDetails.style.display = "block";
  } else {
    cartProductDetails.style.display = "none";
  }
}

// Call the function for each product ID
noneTEMPkeys_displayNone_buyNow.forEach((productId) =>
  toggleCartProductDetails_buyNow(productId)
);

// Function to dynamically display products in the cart-list based on _TEMP keys
function renderCartProducts_buyNow() {
  noneTEMPkeys_displayNone_buyNow.forEach((product) => {
    const imgDataTemp = localStorage.getItem(product.temp);
    const cartProductDetails = document.querySelector(product.selector);
    const cartProductImg = document.querySelector(`${product.selector} img`);

    if (imgDataTemp && cartProductDetails && cartProductImg) {
      cartProductDetails.style.display = "block"; // Show the product container
      cartProductImg.src = imgDataTemp; // Set the image source
    } else if (cartProductDetails) {
      cartProductDetails.style.display = "none"; // Hide the product container
    }
  });
}

// Call the function on page load
document.addEventListener("DOMContentLoaded", renderCartProducts_buyNow);

// Update products when navigating back/forward to this page
window.addEventListener("pageshow", () => {
  renderCartProducts_buyNow();
});

// Force a reload when navigating back/forward to this page
window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**

This code synchronizes the values of the #cp-prices elements on the buyNow_checkOut page with their corresponding storageKeys_buyNow_CO values.

For example, the value of #cp-price-one will be updated to match the value of pillow_price_buyNow_reg_TEMP, pillow_price_buyNow_fiftyOff_TEMP, etc.

*/

function updatePriceElement_buyNow_checkOut(elementId, storageKeys_buyNow_CO) {
  const priceElement = document.getElementById(elementId);
  const storedPrices = storageKeys_buyNow_CO.map((storageKey) =>
    localStorage.getItem(storageKey)
  );

  if (storedPrices.some((price) => price)) {
    priceElement.textContent = storedPrices.find((price) => price);
  }
}

const storageKeys_buyNow_CO = {
  "cp-price-one": [
    "pillow_price_buyNow_reg_TEMP",
    "pillow_price_buyNow_fiftyOff_TEMP",
    "pillow_price_buyNow_underTwo_TEMP",
    "pillow_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-two": [
    "car_price_buyNow_reg_TEMP",
    "car_price_buyNow_fiftyOff_TEMP",
    "car_price_buyNow_underTwo_TEMP",
    "car_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-three": [
    "camera_price_buyNow_reg_TEMP",
    "camera_price_buyNow_fiftyOff_TEMP",
    "camera_price_buyNow_underTwo_TEMP",
    "camera_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-four": [
    "potatoHead_price_buyNow_reg_TEMP",
    "potatoHead_price_buyNow_fiftyOff_TEMP",
    "potatoHead_price_buyNow_underTwo_TEMP",
    "potatoHead_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-five": [
    "makeupOne_price_buyNow_reg_TEMP",
    "makeupOne_price_buyNow_fiftyOff_TEMP",
    "makeupOne_price_buyNow_underTwo_TEMP",
    "makeupOne_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-six": [
    "beats_price_buyNow_reg_TEMP",
    "beats_price_buyNow_fiftyOff_TEMP",
    "beats_price_buyNow_underTwo_TEMP",
    "beats_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-seven": [
    "jbl_price_buyNow_reg_TEMP",
    "jbl_price_buyNow_fiftyOff_TEMP",
    "jbl_price_buyNow_underTwo_TEMP",
    "jbl_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-eight": [
    "simon_price_buyNow_reg_TEMP",
    "simon_price_buyNow_fiftyOff_TEMP",
    "simon_price_buyNow_underTwo_TEMP",
    "simon_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-nine": [
    "truth_price_buyNow_reg_TEMP",
    "truth_price_buyNow_fiftyOff_TEMP",
    "truth_price_buyNow_underTwo_TEMP",
    "truth_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-ten": [
    "makeupTwo_price_buyNow_reg_TEMP",
    "makeupTwo_price_buyNow_fiftyOff_TEMP",
    "makeupTwo_price_buyNow_underTwo_TEMP",
    "makeupTwo_price_buyNow_superDeals_TEMP",
  ],
  "cp-price-eleven": [
    "degreaser_price_buyNow_reg_TEMP",
    "degreaser_price_buyNow_fiftyOff_TEMP",
    "degreaser_price_buyNow_underTwo_TEMP",
    "degreaser_price_buyNow_superDeals_TEMP",
  ],
};

Object.keys(storageKeys_buyNow_CO).forEach((elementId) => {
  updatePriceElement_buyNow_checkOut(
    elementId,
    storageKeys_buyNow_CO[elementId]
  );
});

window.addEventListener("storage", () => {
  Object.keys(storageKeys_buyNow_CO).forEach((elementId) => {
    updatePriceElement_buyNow_checkOut(
      elementId,
      storageKeys_buyNow_CO[elementId]
    );
  });
});

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * Calculates the subtotal from the values in local storage
 *
 * Updates the value of the #multiplied-subtotal_buyNow element by adding together all the values of items in local storage with "_price_buyNow_" in their name.
 */

// Function to calculate subtotal for buyNow
function buyNow_prices_subtotal() {
  const keys = Object.keys(localStorage).filter((key) =>
    key.includes("_price_buyNow_")
  );
  let subtotal = 0;
  keys.forEach((key) => {
    const value = parseFloat(localStorage.getItem(key));
    if (!isNaN(value)) {
      subtotal += value;
    }
  });
  document.getElementById("multiplied-subtotal_buyNow").innerHTML =
    subtotal.toFixed(2);
}

// Call the function
buyNow_prices_subtotal();

// Function to ensure total price is always the sum of subtotal and shipping price
function buyNow_updateTotalPrice() {
  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  const shippingElement = document.querySelector(".summary-shipping-price");
  const totalElement = document.getElementById("multiplied-total");

  const subtotal = parseFloat(subtotalElement.textContent) || 0;
  const shipping =
    shippingElement.textContent.trim().toLowerCase() === "free"
      ? 0
      : parseFloat(shippingElement.textContent) || 0;

  const total = subtotal + shipping;
  totalElement.textContent = total.toFixed(2);
}

// Call buyNow_updateTotalPrice on page load
document.addEventListener("DOMContentLoaded", buyNow_updateTotalPrice);

// Observe changes in subtotal and shipping price to update total price
const buyNow_subtotalObserver = new MutationObserver(buyNow_updateTotalPrice);
buyNow_subtotalObserver.observe(
  document.getElementById("multiplied-subtotal_buyNow"),
  {
    childList: true,
  }
);

const buyNow_shippingObserver = new MutationObserver(buyNow_updateTotalPrice);
buyNow_shippingObserver.observe(
  document.querySelector(".summary-shipping-price"),
  {
    childList: true,
  }
);

// Example: Update subtotal and trigger tax calculation
function updateBuyNowSubtotal() {
  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  const keys = Object.keys(localStorage).filter((key) =>
    key.includes("_price_buyNow_")
  );
  let subtotal = 0;
  keys.forEach((key) => {
    const value = parseFloat(localStorage.getItem(key));
    if (!isNaN(value)) {
      subtotal += value;
    }
  });
  subtotalElement.textContent = subtotal.toFixed(2);

  // Trigger tax and total calculation
  calculateTaxAndTotalBuyNow();
}

// Call updateBuyNowSubtotal on page load
document.addEventListener("DOMContentLoaded", updateBuyNowSubtotal);

/**
 * Calculates and updates the tax and total prices based on the current subtotal.
 */
function calculateTaxAndTotalBuyNow() {
  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  const taxElement = document.getElementById("calculated-tax");
  const totalElement = document.getElementById("multiplied-total");

  if (subtotalElement && taxElement && totalElement) {
    const subtotal = parseFloat(subtotalElement.textContent) || 0;
    const taxRate = 8.875 / 100; // 8.875% tax rate
    const tax = parseFloat((subtotal * taxRate).toFixed(2));
    const total = parseFloat((subtotal + tax).toFixed(2));

    taxElement.textContent = tax;
    totalElement.textContent = total;
  }
}

// Observe changes in the subtotal to dynamically update tax and total prices
const subtotalObserver = new MutationObserver(calculateTaxAndTotalBuyNow);
subtotalObserver.observe(
  document.getElementById("multiplied-subtotal_buyNow"),
  { childList: true, subtree: true, characterData: true }
);

// Call calculateTaxAndTotalBuyNow on page load
document.addEventListener("DOMContentLoaded", calculateTaxAndTotalBuyNow);

// Add event listener to update total price when tax or shipping changes
document.addEventListener("DOMContentLoaded", () => {
  const taxElement = document.getElementById("calculated-tax");
  const shippingElement = document.querySelector(".summary-shipping-price");

  if (taxElement) {
    const taxObserver = new MutationObserver(buyNow_updateTotalPrice);
    taxObserver.observe(taxElement, { childList: true });
  }

  if (shippingElement) {
    const shippingObserver = new MutationObserver(buyNow_updateTotalPrice);
    shippingObserver.observe(shippingElement, { childList: true });
  }
});

// Save _TEMP keys to sessionStorage before leaving the page
window.addEventListener("beforeunload", () => {
  Object.keys(localStorage).forEach((key) => {
    if (key.endsWith("_TEMP")) {
      sessionStorage.setItem(key, localStorage.getItem(key));
    }
  });
});

// Restore _TEMP keys from sessionStorage to localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
  Object.keys(sessionStorage).forEach((key) => {
    if (key.endsWith("_TEMP")) {
      localStorage.setItem(key, sessionStorage.getItem(key));
    }
  });
});

// Restore _TEMP keys when navigating back/forward to this page
window.addEventListener("pageshow", () => {
  Object.keys(sessionStorage).forEach((key) => {
    if (key.endsWith("_TEMP")) {
      localStorage.setItem(key, sessionStorage.getItem(key));
    }
  });
});

// Function to update product counts dynamically
function updateProductCounts_buyNow() {
  const productCounts = [
    { id: "productCountOne", tempKey: "countOne_TEMP" },
    { id: "productCountTwo", tempKey: "countTwo_TEMP" },
    { id: "productCountThree", tempKey: "countThree_TEMP" },
    { id: "productCountFour", tempKey: "countFour_TEMP" },
    { id: "productCountFive", tempKey: "countFive_TEMP" },
    { id: "productCountSix", tempKey: "countSix_TEMP" },
    { id: "productCountSeven", tempKey: "countSeven_TEMP" },
    { id: "productCountEight", tempKey: "countEight_TEMP" },
    { id: "productCountNine", tempKey: "countNine_TEMP" },
    { id: "productCountTen", tempKey: "countTen_TEMP" },
    { id: "productCountEleven", tempKey: "countEleven_TEMP" },
  ];

  productCounts.forEach(({ id, tempKey }) => {
    const element = document.getElementById(id);
    const count = localStorage.getItem(tempKey) || 1;
    if (element) {
      element.textContent = count;
    }
  });
}

// Function to update product prices dynamically
function updateProductPrices_buyNow() {
  const priceMappings = {
    "cp-price-one": [
      "pillow_price_buyNow_reg_TEMP",
      "pillow_price_buyNow_fiftyOff_TEMP",
      "pillow_price_buyNow_underTwo_TEMP",
      "pillow_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-two": [
      "car_price_buyNow_reg_TEMP",
      "car_price_buyNow_fiftyOff_TEMP",
      "car_price_buyNow_underTwo_TEMP",
      "car_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-three": [
      "camera_price_buyNow_reg_TEMP",
      "camera_price_buyNow_fiftyOff_TEMP",
      "camera_price_buyNow_underTwo_TEMP",
      "camera_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-four": [
      "potatoHead_price_buyNow_reg_TEMP",
      "potatoHead_price_buyNow_fiftyOff_TEMP",
      "potatoHead_price_buyNow_underTwo_TEMP",
      "potatoHead_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-five": [
      "makeupOne_price_buyNow_reg_TEMP",
      "makeupOne_price_buyNow_fiftyOff_TEMP",
      "makeupOne_price_buyNow_underTwo_TEMP",
      "makeupOne_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-six": [
      "beats_price_buyNow_reg_TEMP",
      "beats_price_buyNow_fiftyOff_TEMP",
      "beats_price_buyNow_underTwo_TEMP",
      "beats_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-seven": [
      "jbl_price_buyNow_reg_TEMP",
      "jbl_price_buyNow_fiftyOff_TEMP",
      "jbl_price_buyNow_underTwo_TEMP",
      "jbl_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-eight": [
      "simon_price_buyNow_reg_TEMP",
      "simon_price_buyNow_fiftyOff_TEMP",
      "simon_price_buyNow_underTwo_TEMP",
      "simon_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-nine": [
      "truth_price_buyNow_reg_TEMP",
      "truth_price_buyNow_fiftyOff_TEMP",
      "truth_price_buyNow_underTwo_TEMP",
      "truth_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-ten": [
      "makeupTwo_price_buyNow_reg_TEMP",
      "makeupTwo_price_buyNow_fiftyOff_TEMP",
      "makeupTwo_price_buyNow_underTwo_TEMP",
      "makeupTwo_price_buyNow_superDeals_TEMP",
    ],
    "cp-price-eleven": [
      "degreaser_price_buyNow_reg_TEMP",
      "degreaser_price_buyNow_fiftyOff_TEMP",
      "degreaser_price_buyNow_underTwo_TEMP",
      "degreaser_price_buyNow_superDeals_TEMP",
    ],
  };

  Object.keys(priceMappings).forEach((id) => {
    const element = document.getElementById(id);
    const prices = priceMappings[id].map((key) => localStorage.getItem(key));
    const validPrice = prices.find((price) => price !== null);
    if (element) {
      element.textContent = validPrice || "0.00";
    }
  });
}

// Function to update subtotal, tax, and total dynamically
function updateSummaryValues_buyNow() {
  const subtotalElement = document.getElementById("multiplied-subtotal_buyNow");
  const taxElement = document.getElementById("calculated-tax");
  const totalElement = document.getElementById("multiplied-total");

  // Calculate subtotal
  const keys = Object.keys(localStorage).filter((key) =>
    key.includes("_price_buyNow_")
  );
  let subtotal = 0;
  keys.forEach((key) => {
    const value = parseFloat(localStorage.getItem(key));
    if (!isNaN(value)) {
      subtotal += value;
    }
  });
  subtotalElement.textContent = subtotal.toFixed(2);

  // Calculate tax
  const taxRate = 8.875 / 100; // 8.875% tax rate
  const tax = parseFloat((subtotal * taxRate).toFixed(2));
  taxElement.textContent = tax;

  // Calculate total
  const shippingElement = document.querySelector(".summary-shipping-price");
  const shipping =
    shippingElement.textContent.trim().toLowerCase() === "free"
      ? 0
      : parseFloat(shippingElement.textContent) || 0;
  const total = subtotal + tax + shipping;
  totalElement.textContent = total.toFixed(2);
}

// Update products, prices, and summary values when navigating back/forward to this page
window.addEventListener("pageshow", () => {
  updateProductCounts_buyNow();
  updateProductPrices_buyNow();
  updateSummaryValues_buyNow();
});

// Update products and prices when navigating back/forward to this page
window.addEventListener("pageshow", () => {
  updateProductCounts_buyNow();
  updateProductPrices_buyNow();
});
