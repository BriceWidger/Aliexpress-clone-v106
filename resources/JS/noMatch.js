// MAKE SURE THIS JAVASCRIPT FILE IS A SCRIPT FOR THE HTML FILES WITH A SEARCH BAR OR THE HTML FILES WITH SEARCH BARS WILL NOT WORK WITH THIS CODE


/**
 * Allows the user to input text into any search bar with the ID #search-bar, which is then saved as "searchText" in localStorage. 
 * The saved input is displayed in noMatch.html if a product is not found.
 */

// Retrieve the search text from local storage
var searchText_noMatch = localStorage.getItem('searchText');

if (searchText_noMatch) {
    document.getElementById('search-bar').value = searchText_noMatch;
    var sorryTxtElement = document.querySelector('.sorry-txt');
    if (sorryTxtElement) {
        sorryTxtElement.innerHTML = 'Sorry, your search "' + searchText_noMatch + '" did not match any products. Please try again.';
    }
}

// Event listener for input event on search bar element
document.getElementById('search-bar').addEventListener('input', function () {
    var searchText_noMatch = this.value;
    localStorage.setItem('searchText', searchText_noMatch);

    var sorryTxtElement = document.querySelector('.sorry-txt');
    if (sorryTxtElement) {
        sorryTxtElement.innerHTML = 'Sorry, your search "' + searchText_noMatch + '" did not match any products. Please try again.';
    }
});

// Check if the current URL path is not noMatch.html 
if (window.location.pathname !== '/noMatch.html') {
    // Remove the searchText and its value from local storage
    localStorage.removeItem('searchText');
    
    // Clear the input value of search-bar
    document.getElementById('search-bar').value = '';
}


