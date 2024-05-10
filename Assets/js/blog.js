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

    // Clear existing content on the webpage
    // article.clear();

    // If data is not null
    if (blogItem !== null){
        for (let i = 0; i < blogItem.length; i++) {
            let article = document.createElement('article');
            article.setAttribute('class', 'article');
            article.id = 'article'+i;

            let titleEntry = document.createElement('p');
            titleEntry.textContent = blogItem[i].titleName;
            titleEntry.setAttribute('class' , 'enteredtitle');
            article.appendChild(titleEntry);

            let contentEntry = document.createElement('p');
            contentEntry.textContent = blogItem[i].userBlogEntry;
            contentEntry.setAttribute('class' , 'blogentry');
            article.appendChild(contentEntry);

            let usernameEntry = document.createElement('p');
            usernameEntry.textContent = "Posted by : " + blogItem[i].userName;
            usernameEntry.setAttribute('class' , 'enteredusername');
            article.appendChild(usernameEntry);


            document.body.appendChild(article);



            // blogItem((element) => {
            //     let card = document.createElement('p');
            //     card.id = 'enteredtitlecard';
            //     card.setAttribute('class', 'enteredtitle')
            //     card.textContent = element.titleName;
            //     document.getElementById('article'+i).appendChild(card);
            //     // console.log(blogItem[i]);
            // });
    
            // blogItem((element) => {
            //     let card = document.createElement('p');
            //     card.id = 'blogentrycard'+i;
            //     card.setAttribute('class','blogentry');
            //     card.textContent = element.userBlogEntry;
            //     document.getElementById('article'+i).appendChild(card);
            //     // console.log(blogItem[i]);
            // });
    
            // blogItem((element) => {
            //     let card = document.createElement('p');
            //     card.id = 'enteredusernamecard'+i;
            //     card.setAttribute('class','enteredusername');
            //     card.textContent = "Posted by: " + element.userName;
            //     document.getElementById('article'+i).appendChild(card);

    // });
}}};


function init() {
  // When the init function is executed, the code inside getPost function will also execute
  getPost();
}
init();
// article.clear();
        // Loop through each item in the retrieved data
        // for each item in blogItem:
            // Create an <article> element for each item
            // Create <article> element

            // Set attributes for the <article> element
            // Set class attribute for <article> element

            // Append the <article> element to the webpage
            // Append <article> element to the webpage

            // Create a <card> element for the title
            // Create <card> element for title

            // Set attributes for the <card> element
            // Set id attribute for <card> element
            // Set class attribute for <card> element

            // Set innerHTML of the <card> element to the title from the item
            // Set innerHTML of <card> element to title from the item

            // Append the <card> element to the <article> element
            // Append <card> element to the <article> element

            // Create a <card> element for the blog entry
            // Create <card> element for blog entry

            // Set attributes for the <card> element
            // Set id attribute for <card> element
            // Set class attribute for <card> element

            // Set innerHTML of the <card> element to the blog entry from the item
            // Set innerHTML of <card> element to blog entry from the item

            // Append the <card> element to the <article> element
            // Append <card> element to the <article> element

            // Create a <card> element for the username
            // Create <card> element for username

            // Set attributes for the <card> element
            // Set id attribute for <card> element
            // Set class attribute for <card> element

            // Set innerHTML of the <card> element to the username from the item
            // Set innerHTML of <card> element to username from the item

    //         // Append the <card> element to the <article> element
    //         Append <card> element to the <article> element
    // if (blogItem !== null) {
    // for (i = 0; i < blogItem.length; ++i) {
    //     let article = document.createElement('article');
    //     article.setAttribute('class', 'article');
    //     article.id = 'article'+i;
    //     document.body.appendChild(article);

    //     // for (var key in blogItem[i]) {
    //     blogItem.forEach((element) => {
    //         let card = document.createElement('card');
    //         card.id = 'card';
    //         card.setAttribute('class', 'enteredtitle')
    //         card.innerHTML = element.titleName;
    //         document.getElementById('article'+i).appendChild(card);
    //         // console.log(blogItem[i]);
    //     })

    //     blogItem.forEach((element) => {
    //         let card = document.createElement('card');
    //         card.id = 'card'+i;
    //         card.setAttribute('class','blogentry');
    //         card.innerHTML = element.userBlogEntry;
    //         document.getElementById('article'+i).appendChild(card);
    //         // console.log(blogItem[i]);
    //     })

    //     blogItem.forEach((element) => {
    //         let card = document.createElement('card');
    //         card.id = 'card'+i;
    //         card.setAttribute('class','enteredusername');
    //         card.innerHTML = element.userName;
    //         document.getElementById('article'+i).appendChild(card);
    //         // console.log(blogItem[i]);
    //     })

    // }

    //for ()
 
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
