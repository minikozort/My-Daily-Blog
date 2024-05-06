const body = document.querySelector('body');
const toggle = document.getElementById('togglemode');
const form = document.querySelector('form');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    form.classList.toggle('active');


}

const firstName = document.getElementById('user-first-name');
const lastName = document.getElementById('user-last-name');
const userEmail = document.getElementById('user-email');
const userBlogEntry = document.getElementById('userblog');
const submitButton = document.getElementById('btn');


function showSubmitted(){
    const userInput = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        userEmail: userEmail.value.trim(),
        userBlogEntry: userBlogEntry.value.trim(),
};

localStorage.setItem('userInput', JSON.stringify(userInput));
}

function renderLastInput() {
    // Use JSON.parse() to convert text to JavaScript object
    const lastUserInput = JSON.parse(localStorage.getItem('userInput'));
    // Check if data is returned, if not exit out of the function
    if (lastUserInput !== null) {
      document.getElementById('user-first-name').innerHTML = userInput.firstName;
      document.getElementById('user-last-name').innerHTML = userInput.lastName;
      document.getElementById('user-email').innerHTML = userInput.userEmail;
      document.getElementById('user-blog').innerHTML = userInput.userbl;
    }
  }

//   submitButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     event.currentTarget.showSubmitted();
    console.log(showSubmitted());
    // console.log(renderLastInput());
    
//   });

  // The init() function fires when the page is loaded
// function init() {
//     // When the init function is executed, the code inside renderLastGrade function will also execute
//     renderLastInput();
//   }
//   init();






// container.addEventListener('click', function (event) {
//     const element = event.target;

// const myForm = document.getElementById('blogformsubmit');

// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(blogformsubmit);

// });
// Access toggle switch HTML element
// const themeSwitcher = document.querySelector('#theme-switcher');
// const container = document.querySelector('.container');

// // Set default mode to dark
// let mode = 'dark';

// // Listen for a click event on toggle switch
// themeSwitcher.addEventListener('click', function () {
//   // If mode is dark, apply light background
//   if (mode === 'dark') {
//     mode = 'light';
//     container.setAttribute('class', 'light');
//   }
//   // If mode is light, apply dark background
//   else {
//     mode = 'dark';
//     container.setAttribute('class', 'dark');
//   }
// });
// const myForm = document.getElementById('blogformsubmit');