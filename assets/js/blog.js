const btn = document.getElementById('back');
const darkLight = document.getElementById('btn');
let dark = true;

btn.addEventListener('click', function() {
    window.history.back();
});

darkLight.addEventListener('click', function() {
    if (dark) {
        document.querySelector('body').style.backgroundColor = 'purple';
        document.querySelector('body').style.color = 'pink';
        dark = !dark;
    } else {
        document.querySelector('body').style.backgroundColor = 'pink';
        document.querySelector('body').style.color = 'purple';
        dark = !dark;
    }
})