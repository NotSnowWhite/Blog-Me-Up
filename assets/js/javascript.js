//pull the thing we want to manipulate(the submit button)
const formSubmit = document.querySelector('button');
//create a function to run on click of sub button that will save input to local storage
formSubmit.addEventListener('click', function(event) {
    event.preventDefault();
    const Title = document.getElementById('title').value;
    const user = document.getElementById('userName').value;
    const Content = document.getElementById('content').value;
    const formData = {
        title: Title,
        user: user,
        content: Content
    };
console.log(formData);
    let data = JSON.parse(localStorage.getItem('formData')) || [];

    data.push(formData);
    const formDataString = JSON.stringify(data);

//add to localStorage
localStorage.setItem('formData', formDataString);
document.location.href = './blog.html';

} )

