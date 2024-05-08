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
    var blogItem = JSON.parse(localStorage.getItem('userInput'));

    console.log(blogItem);
    // Check if data is returned, if not exit out of the function
    if (blogItem !== null) {
    

    //   document.getElementById('user_first_name') = blogItem.firstName;
    //   document.getElementById('user_last_name') = blogItem.lastName;
    //   document.getElementById('userblog') = blogItem.userBlogEntry;

    }


  }

  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    getPost();
  }
  init();
  
