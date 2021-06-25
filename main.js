const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

// toggle on click //
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// when you click on one of the options it will hide the menu  //
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// when it goes beyond the size of the "header" put the shadow //
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// experience swiper,slide //
const swiper = new Swiper('.swiper-container', {
  slidePreview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  // mousewheel: true, // option
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scrollreveal: show itens //
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #moves header, #moves .card,
  #phrases header, #phrases phrase, 
  #contact .text, #contact .links,
  footer .brand, foot .social`,
  { interval: 100 }
)

// button back-to-top //
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// active //
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// when scroll //
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll(), backToTop(), activateMenuAtCurrentSection()
})
