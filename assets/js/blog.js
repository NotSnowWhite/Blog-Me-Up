// variables I wanted to change
const btn = document.getElementById('back');
const darkLight = document.getElementById('dark-light');
let dark = false;

// function fires on click and goes back to previous web history page
btn.addEventListener('click', function() {
    window.history.back();
});

// function fires on click and toggles color of background and text every click
darkLight.addEventListener('click', function(event) {
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

// function for retrieving data in storage
const title = localStorage.getItem('Title')
const user = localStorage.getItem('user')
const content = localStorage.getItem('content')

