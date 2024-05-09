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


    if (userName.value == "" || titleName.value == "" || userBlogEntry.value == "") {

        const alertMessage = ('Please Complete All Form');
        let error = document.getElementById('error');
        error.textContent = alertMessage;
        setTimeout(alertMessage, 3000);
        return;
    }


    const existingUserInput = localStorage.getItem('userInput');

    let newInput = []

    if (existingUserInput) {
        newInput = JSON.parse(existingUserInput);

    }

    newInput.push(userInput);

    localStorage.setItem('userInput', JSON.stringify(newInput));

    window.location.href = "blog.html"





});