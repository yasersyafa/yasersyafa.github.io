// navbar fixed
window.onscroll = function(){
    const navbarFixed = document.querySelector('header');
    const fixedNav = navbarFixed.offsetTop;

    if (window.pageYOffset > fixedNav) {
        navbarFixed.classList.add('navbar-fixed');
    }else{
        navbarFixed.classList.remove('navbar-fixed');
    }
}

//hamberger
const humberger = document.querySelector('#humberger');
const nav = document.querySelector('#nav-menu');
humberger.addEventListener('click', function(){
    humberger.classList.toggle('humberger-active');
    nav.classList.toggle('hidden'); 

});