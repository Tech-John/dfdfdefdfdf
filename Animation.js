const searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
}
const userlogin = document.querySelector('.login-form-container');
document.querySelector('#login-btn ').onclick = () => {
    userlogin.classList.toggle('active');
}
const closeLogin = document.querySelector('.login-form-container');
document.querySelector('#close-login-btn').onclick = () => {
    closeLogin.classList.remove('active');
}
window.onscroll = () => {
    searchform.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active')
    }
}
window.onload = () => {
    closeLogin.classList.remove('active');
    searchform.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    } else {
        document.querySelector('.header .header-2').classList.remove('active')
    }
    fadeOut();
}

function loader() {
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut() {
    setTimeout(loader, 4000);
}










