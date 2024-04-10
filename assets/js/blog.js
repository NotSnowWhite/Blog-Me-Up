// variables I wanted to change
const btn = document.getElementById('back');
const darkLight = document.getElementById('dark-light');
let dark = false;

// function fires on click and goes back to previous web history page
btn.addEventListener('click', function () {
    window.history.back();
});

// function fires on click and toggles color of background and text every click
darkLight.addEventListener('click', function (event) {
    // prevent default prevents the default action of the button (type:submit) from reloading
    event.preventDefault();
    if (dark) {
        document.querySelector('body').style.backgroundColor = 'purple';
        document.querySelector('body').style.color = 'pink';
    } else {
        document.querySelector('body').style.backgroundColor = 'pink';
        document.querySelector('body').style.color = 'purple';
    }
    dark = !dark;
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
    const h2El = document.createElement('h2');
    h2El.textContent = entry.title;
    const pEl1 = document.createElement('p');
    pEl1.textContent = entry.user;
    const pEl2 = document.createElement('p');
    pEl2.textContent = entry.content;
    postsEl.append(h2El, pEl1, pEl2);

}

// display data
// if (data) {
// titleEl.textContent = data.title;
// userEl.textContent = data.user;
// contentEl.textContent = data.content;

// }
