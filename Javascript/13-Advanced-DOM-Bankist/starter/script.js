'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// console.log(document.querySelectorAll('.section'));

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies to improve functionality and analytics';
// message.innerHTML = `We use cookies to improve functionality and analytics<butto class='btn-close-cookie'>Got it!</butto>`;

// // header.prepend(message);
// header.append(message);

// // header.before(message);
// // header.after(message);
// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// // Styles: inline styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height); // likely, it only loads inline styles
// console.log(getComputedStyle(message).color); // this will return all the styles we want

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered');
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// console.log(logo.dataset.versionNumber);

// Scroll button
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.scrollX, window.scrollY);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });
  section1.scrollIntoView({ behavior: 'smooth' });
});
// const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
  h1.removeEventListener('mouseenter', alertH1);
};

// h1.addEventListener('mouseenter', alertH1);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(e.target, e.currentTarget);
//   },
//   true
// );

//////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  Scrolling;
  window.scrollTo(
    s1coords.left + window.scrollX,
    s1coords.top + window.scrollY
  );

  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation
// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to the common parent element
// 2. Determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const h1 = document.querySelector('h1');
// returns all child elements of h1 with that className, no matter how deep
console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); // only direct children, including text and comment
// console.log(h1.children); // html collection, live
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'grey';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// // Closest parent element: closest(). Important for event delegation
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
// Close sibling elements
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
// Close siblings
console.log(h1.previousSibling);
console.log(h1.nextSibling);
// All siblings including itself
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // Guard clause
  if (!clicked) return;

  // Active tab
  tabs.forEach(t => {
    t.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');

  // Active content area
  tabsContent.forEach(c => {
    c.classList.remove('operations__content--active');
  });
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
// The handler function can just have one REAL parameter: the event
const changeOpacity = function (e, opacity) {
  // mouseenter doesn't bubble
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this; // this keyword is pointing to the argument of .bind()
  }
};

// Passing other arguments to an handler with .bind()
nav.addEventListener('mouseover', changeOpacity.bind(0.5));

nav.addEventListener('mouseout', changeOpacity.bind(1));

// Sticky navigation

// // scroll event: bad performance
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Better solution: intersection observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null, // the entire viewport
//   threshold: [0, 0.2], // The ratio we have this section in our viewport. When never the observed element intersects the viewport with 10%, call the calback function
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imageTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};
const imageObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '500px',
});

imageTargets.forEach(function (image) {
  imageObserver.observe(image);
});

// Slider

const slider = () => {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let currSlide = 0;
  const maxSlide = slides.length - 1;

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class = 'dots__dot' data-slide="${i}"></button>`
      );
    });
  };

  const activeDot = function (slide) {
    const dots = document.querySelectorAll('.dots__dot');
    dots.forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (curr) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curr)}%)`)
    );
  };

  const nextSlide = function () {
    if (currSlide === maxSlide) {
      currSlide = 0;
    } else {
      currSlide++;
    }
    goToSlide(currSlide);
    activeDot(currSlide);
  };

  const lastSlide = function () {
    if (currSlide === 0) {
      currSlide = maxSlide;
    } else {
      currSlide--;
    }
    goToSlide(currSlide);
    activeDot(currSlide);
  };

  const init = function () {
    createDots();
    activeDot(0);
    goToSlide(0);
  };

  init();

  // next slide
  btnRight.addEventListener('click', nextSlide);

  btnLeft.addEventListener('click', lastSlide);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && lastSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  document.querySelector('.dots__dot').classList.add('dots__dot--active');
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });
};
slider();
