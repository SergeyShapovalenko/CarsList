// burger-menu

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');
const body = document.body || document.documentElement;
const html = document.documentElement;

function openMenu() {
  setTimeout(() => {
    body.classList.add('menu-open');
    html.classList.add('menu-open');
  }, 0);
}

function closeMenu() {
  setTimeout(() => {
    body.classList.remove('menu-open');
    html.classList.remove('menu-open');
  }, 0);
}

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--active');
  if (menuList.classList.contains('menu__list--active')) {
    openMenu();
  } else {
    closeMenu();
  }
});

document.addEventListener('click', function (e) {
  if (e.target !== menuBtn && e.target !== menuList) {
    menuList.classList.remove('menu__list--active');
    closeMenu();
  }

  console.log(e.target);
});


// tabs

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element) {
  element.addEventListener('click', open)
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function(item) {
    item.classList.remove('tabs__btn-item--active');
  })

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active')
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}


//swiper

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
