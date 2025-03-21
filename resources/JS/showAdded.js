/**
 * FOR ALL PAGES
 * 
 * Show an "Added!" notification on the given element.
 * The notification will be displayed for a duration of 1000 milliseconds. The user will not be able to click the product imgs during the function duration using the overlay wrapper.
 *
 */

// Add-on icons (all)
function showAdded(element) {
  const wrapper = element.closest('.page-container'); // the wrapper is the whole page container to engulf all add-on icons and their pictures (verify the size of the .page-container by changing the background to a color)

  if (wrapper) {
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'transparent'; 
    overlay.style.zIndex = '1';
    overlay.style.cursor = 'default';
    wrapper.appendChild(overlay);

    overlay.addEventListener('click', function (event) {
      event.stopPropagation();
    });

    overlay.addEventListener('click', function (event) {
      event.preventDefault();
    });

    element.style.backgroundColor = 'lightgreen';
    element.style.backgroundImage = 'none';
    element.querySelector('.notification-text').innerText = "Added!";

    setTimeout(() => {
      element.querySelector('.notification-text').innerText = "";
      element.style.backgroundImage = 'url("/resources/images/plus-icon-black.png")';
      element.style.backgroundColor = '';
      wrapper.removeChild(overlay);
    }, 1000);
  } else {
    console.error('Could not find .add-on-icon-wrapper element');
  }
}

/**
 *
 *
 *
 */

/**
 * FOR PRODUCT PAGES
 *
 * Show an "Added!" notification on the given element.
 * The notification will be displayed for a duration of 1000 milliseconds for the "Add to Cart" button.
 *
 * @param {HTMLElement} element - The element on which the notification will be displayed.
 */

// "Add to Cart" button (product page)
function showAdded_addToCartBtn(element) {
  element.style.backgroundColor = 'lightgreen';
  element.style.backgroundImage = 'none';
  element.style.pointerEvents = 'none';

  setTimeout(() => {
    element.querySelector('.notification-text-add-to-cart-button').innerText = "";
    element.style.backgroundImage = 'url("/resources/images/plus-icon-black.png")';
    element.style.backgroundColor = '';
    element.style.pointerEvents = 'auto';
  }, 1000);
}

const addToCart_textChange = document.querySelector('.add-to-cart-wrap');

addToCart_textChange.addEventListener('click', function () {
  const addToCartText = addToCart_textChange.querySelector('.add-to-cart-text');
  addToCartText.textContent = 'Added!';

  setTimeout(() => {
    addToCartText.textContent = 'Add to Cart';
  }, 1000);
});