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
        let article = document.createElement('div');
        article.setAttribute('class', 'div');
        article.id = 'div'+i;
        document.body.appendChild(div);

        //for (var key in blogItem[i]) {
        // blogItem.forEach((element) => {
        //     let card = document.createElement('card');
        //     card.id = 'card';
        //     card.setAttribute('class', 'enteredusername')
        //     card.innerHTML = element.titleName;
        //     document.getElementById('div'+i).appendChild(card);
        //     console.log(blogItem[i]);
        // })

        // blogItem.forEach((element) => {
        //     let card = document.createElement('card');
        //     card.id = 'card'+i;
        //     card.setAttribute('class', 'enteredtitle');
        //     card.innerHTML = element.userBlogEntry;
        //     document.getElementById('div'+i).appendChild(card);
        //     console.log(blogItem[i]);
        // })

        // blogItem.forEach((element) => {
        //     let card = document.createElement('card');
        //     card.id = 'card'+i;
        //     card.setAttribute('class', 'blogentry');
        //     card.innerHTML = element.userName;
        //     document.getElementById('article'+i).appendChild(card);
        //     console.log(blogItem[i]);
        // })

    }

    //for ()
  }}

  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    getPost();
  }
  init();
// function getPost() {
//     // Use JSON.parse() to convert text to JavaScript object
//     const blogItem = JSON.parse(localStorage.getItem('userInput'));

//     // Check if data is returned, if not exit out of the function
//     if (blogItem !== null) {
//         for (i = 0; i < blogItem.length; ++i) {
//             let article = document.createElement('article');
//             article.setAttribute('class', 'article');
//             article.id = 'article';
//             // let card = document.createElement('card');
//             // card.id = 'card';
//             // card.setAttribute('class', 'card');
//             // card.innerHTML = titleName + userBlogEntry + userName;
//             document.body.appendChild(article);
//             // document.articleCreated.appendChild(card);
//         }
//             for (var key in blogItem[i]) {
//             blogItem.forEach((element) => {
//                 let card = document.createElement('card');
//                 card.id = 'enteredusername';
//                 card.setAttribute('class', 'enteredusername');
//                 card.innerHTML = element.userName;
//                 document.getElementById('article').appendChild(card);



//             })
//             blogItem.forEach((element) => {
//                 let card = document.createElement('card');
//                 card.id = 'enteredtitle';
//                 card.setAttribute('class', 'enteredtitle');
//                 card.innerHTML = element.titleName;
//                 document.getElementById('article').appendChild(card);


//             })
//             blogItem.forEach((element) => {
//                 let card = document.createElement('card');
//                 card.id = 'blogentry';
//                 card.setAttribute('class', 'blogentry');
//                 card.innerHTML = element.userBlogEntry;
//                 document.getElementById('article').appendChild(card);


//         })

//     }

//     //for ()
// }}

// function init() {
//     // When the init function is executed, the code inside renderLastGrade function will also execute
//     getPost();
// }
// init();
