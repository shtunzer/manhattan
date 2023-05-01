// BURGER

document.getElementById('burger-btn-open').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.add('--show');
});
document.getElementById('burger-btn-hide').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.remove('--show');
});

document.querySelector('.scrollTo2').addEventListener('click', function(){
    document.getElementById('burger__menu').classList.remove('--show');
});

// SCROLL

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}  

var button1 = document.querySelector('.scrollTo1');
var button2 = document.querySelector('.scrollTo2');

var kitchen = document.querySelector('#kitchen');

button1.addEventListener('click' , () => {
    scrollTo(kitchen);
});
button2.addEventListener('click' , () => {
    scrollTo(kitchen);
});

// TABS

const tabItem = document.querySelectorAll('.tabs-btn');
const tabContent = document.querySelectorAll('.tabs__content');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tabs-btn-active');
    })

    tabTarget.classList.add('tabs-btn-active');

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-active')
    })

    document.querySelector(`#${button}`).classList.add('tabs__content-active');
}

// SWIPER

var swiper = new Swiper(".kitchen__swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        1320: {
            slidesPerView: 2
        },
    }
});

// RIDER

document.getElementById('rider-tab-btn-open').addEventListener('click', function(){

    document.getElementById('rider-desc-2').classList.remove('--show');
    document.getElementById('rider-desc-3').classList.remove('--show');
    document.getElementById('rider-desc-4').classList.remove('--show');
    document.getElementById('rider-desc-5').classList.remove('--show');
    document.getElementById('rider-desc-6').classList.remove('--show');

    document.getElementById('rider-tab-btn-hide-2').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-3').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-4').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-5').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-6').classList.add('--hide');

    document.getElementById('rider-tab-2').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-3').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-4').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-5').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-6').classList.remove('rider-tab-active');

    document.getElementById('rider-tab-btn-open-2').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-2').classList.add('--show');
    document.getElementById('rider-tab-btn-open-3').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-3').classList.add('--show');
    document.getElementById('rider-tab-btn-open-4').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-4').classList.add('--show');
    document.getElementById('rider-tab-btn-open-5').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-5').classList.add('--show');
    document.getElementById('rider-tab-btn-open-6').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-6').classList.add('--show');

    document.getElementById('rider-desc').classList.add('--show');
    document.getElementById('rider-tab-btn-open').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open').classList.add('--show');
    document.getElementById('rider-tab').classList.add('rider-tab-active');
});

document.getElementById('rider-tab-btn-hide').addEventListener('click', function(){
    document.getElementById('rider-desc').classList.remove('--show');
    document.getElementById('rider-tab-btn-hide').classList.add('--hide');
    document.getElementById('rider-tab-btn-open').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open').classList.add('--show');
    document.getElementById('rider-tab').classList.remove('rider-tab-active');
});

document.getElementById('rider-tab-btn-open-2').addEventListener('click', function(){

    document.getElementById('rider-desc').classList.remove('--show');
    document.getElementById('rider-desc-3').classList.remove('--show');
    document.getElementById('rider-desc-4').classList.remove('--show');
    document.getElementById('rider-desc-5').classList.remove('--show');
    document.getElementById('rider-desc-6').classList.remove('--show');

    document.getElementById('rider-tab-btn-hide').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-3').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-4').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-5').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-6').classList.add('--hide');

    document.getElementById('rider-tab').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-3').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-4').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-5').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-6').classList.remove('rider-tab-active');

    document.getElementById('rider-tab-btn-open').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open').classList.add('--show');
    document.getElementById('rider-tab-btn-open-3').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-3').classList.add('--show');
    document.getElementById('rider-tab-btn-open-4').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-4').classList.add('--show');
    document.getElementById('rider-tab-btn-open-5').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-5').classList.add('--show');
    document.getElementById('rider-tab-btn-open-6').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-6').classList.add('--show');

    document.getElementById('rider-desc-2').classList.add('--show');
    document.getElementById('rider-tab-btn-open-2').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-2').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-2').classList.add('--show');
    document.getElementById('rider-tab-2').classList.add('rider-tab-active');
});

document.getElementById('rider-tab-btn-hide-2').addEventListener('click', function(){
    document.getElementById('rider-desc-2').classList.remove('--show');
    document.getElementById('rider-tab-btn-hide-2').classList.add('--hide');
    document.getElementById('rider-tab-btn-open-2').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-2').classList.add('--show');
    document.getElementById('rider-tab-2').classList.remove('rider-tab-active');
});

document.getElementById('rider-tab-btn-open-3').addEventListener('click', function(){

    document.getElementById('rider-desc').classList.remove('--show');
    document.getElementById('rider-desc-2').classList.remove('--show');
    document.getElementById('rider-desc-4').classList.remove('--show');
    document.getElementById('rider-desc-5').classList.remove('--show');
    document.getElementById('rider-desc-6').classList.remove('--show');

    document.getElementById('rider-tab-btn-hide').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-2').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-4').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-5').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-6').classList.add('--hide');

    document.getElementById('rider-tab').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-2').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-4').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-5').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-6').classList.remove('rider-tab-active');

    document.getElementById('rider-tab-btn-open').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open').classList.add('--show');
    document.getElementById('rider-tab-btn-open-2').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-2').classList.add('--show');
    document.getElementById('rider-tab-btn-open-4').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-4').classList.add('--show');
    document.getElementById('rider-tab-btn-open-5').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-5').classList.add('--show');
    document.getElementById('rider-tab-btn-open-6').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-6').classList.add('--show');

    document.getElementById('rider-desc-3').classList.add('--show');
    document.getElementById('rider-tab-btn-open-3').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-3').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-3').classList.add('--show');
    document.getElementById('rider-tab-3').classList.add('rider-tab-active');
});

document.getElementById('rider-tab-btn-hide-3').addEventListener('click', function(){
    document.getElementById('rider-desc-3').classList.remove('--show');
    document.getElementById('rider-tab-btn-hide-3').classList.add('--hide');
    document.getElementById('rider-tab-btn-open-3').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-3').classList.add('--show');
    document.getElementById('rider-tab-3').classList.remove('rider-tab-active');
});

document.getElementById('rider-tab-btn-open-4').addEventListener('click', function(){

    document.getElementById('rider-desc').classList.remove('--show');
    document.getElementById('rider-desc-2').classList.remove('--show');
    document.getElementById('rider-desc-3').classList.remove('--show');
    document.getElementById('rider-desc-5').classList.remove('--show');
    document.getElementById('rider-desc-6').classList.remove('--show');

    document.getElementById('rider-tab-btn-hide').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-2').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-3').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-5').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-6').classList.add('--hide');

    document.getElementById('rider-tab').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-2').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-3').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-5').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-6').classList.remove('rider-tab-active');

    document.getElementById('rider-tab-btn-open').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open').classList.add('--show');
    document.getElementById('rider-tab-btn-open-2').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-2').classList.add('--show');
    document.getElementById('rider-tab-btn-open-3').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-3').classList.add('--show');
    document.getElementById('rider-tab-btn-open-5').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-5').classList.add('--show');
    document.getElementById('rider-tab-btn-open-6').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-6').classList.add('--show');

    document.getElementById('rider-desc-4').classList.add('--show');
    document.getElementById('rider-tab-btn-open-4').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-4').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-4').classList.add('--show');
    document.getElementById('rider-tab-4').classList.add('rider-tab-active');
});

document.getElementById('rider-tab-btn-hide-4').addEventListener('click', function(){
    document.getElementById('rider-desc-4').classList.remove('--show');
    document.getElementById('rider-tab-btn-hide-4').classList.add('--hide');
    document.getElementById('rider-tab-btn-open-4').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-4').classList.add('--show');
    document.getElementById('rider-tab-4').classList.remove('rider-tab-active');
});

document.getElementById('rider-tab-btn-open-5').addEventListener('click', function(){

    document.getElementById('rider-desc').classList.remove('--show');
    document.getElementById('rider-desc-2').classList.remove('--show');
    document.getElementById('rider-desc-3').classList.remove('--show');
    document.getElementById('rider-desc-4').classList.remove('--show');
    document.getElementById('rider-desc-6').classList.remove('--show');

    document.getElementById('rider-tab-btn-hide').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-2').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-3').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-4').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-6').classList.add('--hide');

    document.getElementById('rider-tab').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-2').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-3').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-4').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-6').classList.remove('rider-tab-active');

    document.getElementById('rider-tab-btn-open').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open').classList.add('--show');
    document.getElementById('rider-tab-btn-open-2').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-2').classList.add('--show');
    document.getElementById('rider-tab-btn-open-3').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-3').classList.add('--show');
    document.getElementById('rider-tab-btn-open-4').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-4').classList.add('--show');
    document.getElementById('rider-tab-btn-open-6').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-6').classList.add('--show');

    document.getElementById('rider-desc-5').classList.add('--show');
    document.getElementById('rider-tab-btn-open-5').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-5').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-5').classList.add('--show');
    document.getElementById('rider-tab-5').classList.add('rider-tab-active');
});

document.getElementById('rider-tab-btn-hide-5').addEventListener('click', function(){
    document.getElementById('rider-desc-5').classList.remove('--show');
    document.getElementById('rider-tab-btn-hide-5').classList.add('--hide');
    document.getElementById('rider-tab-btn-open-5').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-5').classList.add('--show');
    document.getElementById('rider-tab-5').classList.remove('rider-tab-active');
});

document.getElementById('rider-tab-btn-open-6').addEventListener('click', function(){

    document.getElementById('rider-desc').classList.remove('--show');
    document.getElementById('rider-desc-2').classList.remove('--show');
    document.getElementById('rider-desc-3').classList.remove('--show');
    document.getElementById('rider-desc-4').classList.remove('--show');
    document.getElementById('rider-desc-5').classList.remove('--show');

    document.getElementById('rider-tab-btn-hide').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-2').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-3').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-4').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-5').classList.add('--hide');

    document.getElementById('rider-tab').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-2').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-3').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-4').classList.remove('rider-tab-active');
    document.getElementById('rider-tab-5').classList.remove('rider-tab-active');

    document.getElementById('rider-tab-btn-open').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open').classList.add('--show');
    document.getElementById('rider-tab-btn-open-2').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-2').classList.add('--show');
    document.getElementById('rider-tab-btn-open-3').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-3').classList.add('--show');
    document.getElementById('rider-tab-btn-open-4').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-4').classList.add('--show');
    document.getElementById('rider-tab-btn-open-5').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-5').classList.add('--show');

    document.getElementById('rider-desc-6').classList.add('--show');
    document.getElementById('rider-tab-btn-open-6').classList.add('--hide');
    document.getElementById('rider-tab-btn-hide-6').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-6').classList.add('--show');
    document.getElementById('rider-tab-6').classList.add('rider-tab-active');
});

document.getElementById('rider-tab-btn-hide-6').addEventListener('click', function(){
    document.getElementById('rider-desc-6').classList.remove('--show');
    document.getElementById('rider-tab-btn-hide-6').classList.add('--hide');
    document.getElementById('rider-tab-btn-open-6').classList.remove('--hide');
    document.getElementById('rider-tab-btn-open-6').classList.add('--show');
    document.getElementById('rider-tab-6').classList.remove('rider-tab-active');
});
