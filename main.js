let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelector('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.classList.add('active')
    },100)

    setTimeout(()=>{
        logoSpan.classList.remove('active');
        logoSpan.classList.add('fade');
        intro.style.top = '-100vh';
    },1500)

    //setTimeout(()=>{
    //    intro.style.top = '-100vh'
    //},1500)
})