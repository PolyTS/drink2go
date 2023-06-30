/* в этот файл добавляет скрипты*/
let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--close')) {
    navMain.classList.remove('navigation--close');
    navMain.classList.add('navigation--open');
  } else {
    navMain.classList.add('navigation--close');
    navMain.classList.remove('navigation--open');
  }
});