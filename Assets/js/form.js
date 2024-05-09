const userName = document.getElementById('user-name');
const titleName = document.getElementById('title-name');
const userBlogEntry = document.getElementById('userblog');
const submitButton = document.getElementById('btn');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    const userInput = {
        userName: userName.value.trim(),
        titleName: titleName.value.trim(),
        userBlogEntry: userBlogEntry.value.trim(),

    }


    if( userName.value == "" || titleName.value == "" || userBlogEntry.value == ""){
       alert ("Please Complete Form")
        return;
    }
  

const existingUserInput = localStorage.getItem('userInput');

    let newInput = []

    if (existingUserInput) {
    newInput =JSON.parse(existingUserInput);

    }

    newInput.push(userInput);

    localStorage.setItem('userInput', JSON.stringify(newInput));
    
        window.location.href = "blog.html"

   

    

  });