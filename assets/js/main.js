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
  });