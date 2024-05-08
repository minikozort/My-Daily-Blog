const body = document.querySelector('body');
const toggle = document.getElementById('togglemode');
const toggleback = document.querySelector('header');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    toggleback.classList.toggle('active');
    
}

function getPost() {
    // Use JSON.parse() to convert text to JavaScript object
    const blogItem = JSON.parse(localStorage.getItem('userInput'));

    console.log(blogItem);
    // Check if data is returned, if not exit out of the function
    if (blogItem !== null) {
    for (i = 0; i < blogItem.length; ++i) {
        let article = document.createElement('article');
        article.setAttribute('class', 'article');
        article.id = 'article'+i;
        document.body.appendChild(article);

        //for (var key in blogItem[i]) {
        blogItem.forEach((element) => {
            let card = document.createElement('card');
            card.id = 'card'+i;
            card.setAttribute('class', 'card');
            card.innerHTML = element.firstName;
            document.getElementById('article'+i).appendChild(card);
            console.log(blogItem[i])
        })

    }

    //for ()
  }}

  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    getPost();
  }
  init();
