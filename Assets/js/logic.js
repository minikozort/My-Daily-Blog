const nav = document.querySelector('nav')
const toggle = document.getElementById('togglemode');
toggle.onclick = function () {
    toggle.classList.toggle('active')
    nav.classList.toggle('active')
}