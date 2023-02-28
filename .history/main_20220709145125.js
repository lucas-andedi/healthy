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
  menuBtn.style.display = "none"
})