// Swiper Js ( testimonial section )

const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  // open anc close nav menu

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');

// open sidebar 
menuBtn.addEventListener('click' , () => {
  menu.style.display = "block";
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
});

// close sidebar 
closeBtn.addEventListener('click' , () => {
  menu.style.display = "none";
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
});

// change active class to cliked nav item
const navItems = document.querySelectorAll('nav ul li');

// remove active class from other items

const removeActiveClass = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}
// add active class to clicked nav item
  navItems.forEach(item => {
    const link = item.querySelector('a');
    removeActiveClass();
    linkj
    link.classList.add('active');
  })
