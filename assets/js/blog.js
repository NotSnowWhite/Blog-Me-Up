// variables I wanted to change
const btn = document.getElementById('back');
const darkLight = document.getElementById('dark-light');
let dark = true;

// function fires on click and goes to the new post (index.html) page
btn.addEventListener('click', function () {
    window.location.href = 'index.html';
});
//  function to be called on page load and on click of toggle button
function toggle() {
    if (dark) {
        // loops through all .container elements and changes card background color for readability
        let cards = document.getElementsByClassName('container');
        for (let index = 0; index < cards.length; index++) {
            const cardColor = cards[index];
            cardColor.style.backgroundColor = 'rgba(0, 0, 0, 0.491)';
        }
        document.querySelector('body').style.backgroundColor = 'purple';
        document.querySelector('body').style.color = 'pink';
        document.querySelector('h1').style.backgroundColor = '';
        document.querySelector('#back').style.backgroundColor = '';
        document.querySelector('#dark-light').style.backgroundColor = '';

    } else {
        let cards = document.getElementsByClassName('container');
        for (let index = 0; index < cards.length; index++) {
            const cardColor = cards[index];
            cardColor.style.backgroundColor = 'plum';
        }
        document.querySelector('body').style.backgroundColor = 'pink';
        document.querySelector('body').style.color = 'purple';
        document.querySelector('h1').style.backgroundColor = 'plum';
        document.querySelector('#back').style.backgroundColor = 'plum';
        document.querySelector('#dark-light').style.backgroundColor = 'plum';

    }
    dark = !dark;

}
// dark appears on load with container colors
document.addEventListener('DOMContentLoaded', function() {
    toggle();
});
// function fires on click and toggles color of page
darkLight.addEventListener('click', function (event) {
    // prevent default prevents the default action of the button (type:submit) from reloading
    event.preventDefault();
  toggle();
});

// retrieving data in Localstorage
let data = JSON.parse(localStorage.getItem('formData')) || [];
// pulling a place to put data
// const titleEl = document.getElementById('title');
// const userEl = document.getElementById('user');
// const contentEl = document.getElementById('content');
const postsEl = document.getElementById('posts');

//  loop through the data array and create an element for each entry/ display data
for (let index = 0; index < data.length; index++) {
    const entry = data[index];
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container');
    const h2El = document.createElement('h2');
    h2El.textContent = entry.title;
    const pEl1 = document.createElement('p');
    pEl1.textContent = entry.user;
    const pEl2 = document.createElement('p');
    pEl2.textContent = entry.content;
    containerDiv.append(h2El, pEl1, pEl2);
    postsEl.appendChild(containerDiv);

}

// display data
// if (data) {
// titleEl.textContent = data.title;
// userEl.textContent = data.user;
// contentEl.textContent = data.content;

// }
