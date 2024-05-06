const body = document.querySelector('body');
const toggle = document.getElementById('togglemode');
const toggleback = document.querySelector('header');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    toggleback.classList.toggle('active');
    
}