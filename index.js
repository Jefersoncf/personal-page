
   const typed = new Typed('.name', {
    strings: ['Eliety Aires.', 'Modelo', 'Produtora', 'Maquiadora'],
    typeSpeed: 120,
    backSpeed: 100,
    backDelay: 500,
    loop: true
  });

// menu hamburger
const menuHaburger = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const links = document.querySelector('.nav-list li');

menuHaburger.addEventListener('click', function() {
  this.classList.toggle('click');
  navList.classList.toggle('open');
  navList.classList.toggle('closed');
});
if (navList !== 'open') {
  navList.classList.toggle('closed')
 }