//pull the thing we want to manipulate(the submit button)
const formSubmit = document.querySelector('button');
//create a function to run on click of sub button that will save input to local storage
formSubmit.addEventListener('click', function(event) {
    event.preventDefault;
    const Title = document.getElementById('title').value;
    const user = document.getElementById('userName').value;
    const Content = document.getElementById('content').value;
//add to localStorage
localStorage.setItem('title', Title);
localStorage.setItem('user', user);
localStorage.setItem('content', Content);

//force reset form after submission
formSubmit.reset();
} )

