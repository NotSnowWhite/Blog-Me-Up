const btn = document.getElementById('back');
const darkLight = document.getElementById('dark-light');
let dark = false;

btn.addEventListener('click', function() {
    window.history.back();
});

darkLight.addEventListener('click', function(event) {
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

