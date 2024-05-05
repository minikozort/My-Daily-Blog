const body = document.querySelector('body');
const toggle = document.getElementById('togglemode');
const form = document.querySelector('form');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    form.classList.toggle('active');
    
    
}