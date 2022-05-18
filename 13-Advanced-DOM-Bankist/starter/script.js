'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const allSections = document.querySelectorAll('.section');
const section1 = document.querySelector('#section--1');
const imgTargets = document.querySelectorAll('img[data-src]');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
////////Modal Window/////////

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////SMOOTH SCROLLING//////////

// btnScrollTo.addEventListener('click', function (e) {
//   // const s1coords = section1.getBoundingClientRect();
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//page navigation

//// using event delegation

//1. add event listerner to common parent element
// 2. Determine which element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

////TABBED COMPONENTS

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // remove class from all tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //remove all content
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //guard clause
  if (!clicked) return;
  clicked.classList.add('operations__tab--active');
  //activate content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////MENU FADE ANIMATION/////////

const navFade = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(s => {
      if (s !== link) {
        s.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

//eventhandler functions can only have on argument so use bind to attach it to a this object or in this case just one value.

nav.addEventListener('mouseover', navFade.bind(0.5));

nav.addEventListener('mouseout', navFade.bind(1));

///STICKY NAV////

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//     nav.style.opacity = 0.95;
//   } else {
//     nav.classList.remove('sticky');
//     nav.style.opacity = 1;
//   }
// });

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
    nav.style.opacity = 0.95;
  } else {
    nav.classList.remove('sticky');
    nav.style.opacity = 1;
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

////////SECTIONS APPEARING/////////////

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

// allSections.forEach(s => {
//   sectionObserver.observe(s);
//   s.classList.add('section--hidden');
// });

////lazy loading images//////

const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  else {
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  }
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => {
  imgObserver.observe(img);
});

//////SLIDER////////
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let curSlide = 0;
  const maxSlide = slides.length;

  // slider.style.transform = 'translateX(-800px)';

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class='dots__dot' data-slide='${i}'></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };

  init();

  //event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  //keyboard events

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowRight') {
      nextSlide();
    }
    if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  });

  //slider dots

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////practise//////////////////

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords);
//   // console.log(e.target.getBoundingClientRect());
//   // console.log('current scroll (X/Y', window.scrollX, window.scrollY);
//   // console.log(
//   //   'VW and VH',
//   //   document.documentElement.clientWidth,
//   //   document.documentElement.clientHeight
//   // );
//   // console.log(s1coords.y);
//   // //getting the correct scroll position
//   // window.scrollTo(
//   //   s1coords.left + window.scrollY,
//   //   s1coords.top + window.scrollY
//   // );
//   // //smooth scrolling the oldschool way
//   // window.scrollTo({
//   //   left: s1coords.left + window.scrollY,
//   //   top: s1coords.top + window.scrollY,
//   //   behavior: 'smooth',
//   // });
//   //modern smooth scrolling
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//////////SELECTING, CREATING AND DELETING ELEMENTS
//selecting
///cant do this for other elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections); //gives a node list (doenst live update)

// document.getElementById('section--1');

// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons); //html collection for this selector (live updates)

// document.getElementsByClassName('btn'); //live html collection

// //creating/inserting elements
// // element.insertAdjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality';
// message.innerHTML =
//   'We use cookies for improved functionality <button class="btn btn--close-cookie">Got it!</btn>';

// const header = document.querySelector('.header');
// //add the element as the first child
// header.prepend(message); //adds as child at the end of child list
// header.append(message); //will only be effective for the last one (cant do multiple) - so can be used to move elements later

// //to actually add a copy
// // header.append(message.cloneNode(true)); //true to also copy all children

// // header.before(message); //adds as sibling rather than child

// //deleting elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', () => message.remove());

// //remove is new previouly it would have been message.parentElement.removeChild(message)

// //////////STYLES ATTRIBUTES AND CLASSES

// //styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color); //cant get this way from style sheet - works for inline e.g.
// console.log(message.style.backgroundColor);

// //can get others this way...
// console.log(getComputedStyle(message)); //full style object
// console.log(getComputedStyle(message).color);

// //even if not defined can get default / browser set value

// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src); //gives absolute URL
// console.log(logo.getAttribute('src')); //relative URL
// console.log(logo.className);

// //for non standard attributes - cannot use this
// console.log(logo.designer); //undefined

// //need to use
// console.log(logo.getAttribute('designer'));

// //set attributes (standard attribute)
// logo.alt = 'Nice logo dude';

// //non standard attributes
// logo.setAttribute('company', 'bankist');

// //data attributes
// console.log(logo.dataset.versionNumber);

// //classes
// logo.classList.add('c', "j");
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');
// logo.className = "Scott" //dont use as it will override everything in the classlist

//types of events and handlers

// //removing
// const h1 = document.querySelector('h1');
// const alertH1 = function () {
//   alert('Over the h1');
//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// //oldschool way...will overwrite, the above allows multiple events
// h1.onmouseenter = function (e) {
//   alert('old way');
// };

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(0, 255);
//   console.log('link', e.target, e.currentTarget);
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(0, 255);
//   console.log('links', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor(0, 255);
//     console.log('nav', e.target, e.currentTarget);
//   }
//   // true - third argument is for capturing
// );

///dom traversing////

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));
// //goes deep into the dom ^
// //direct childern only node list so contains all nodes (including text, comments etc)>
// console.log(h1.childNodes);
// //html collection, live and only contains direct children, only contains elements >
// console.log(h1.children);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// //opposite to queryselector as qs goes down the dom no matter how deep, closest goes up the dom >
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// //sideways - elements
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// //sideways - nodes

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// //to get siblings other that prev or next need to go up and get the html collection of children
// console.log(h1.parentElement.children);

// //destructure to an array
// console.log([...h1.parentElement.children]);

// //add style to everything other than the element
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.backgroundColor = 'red';
//   }
// });

/////INTERSECTION API///////

//entries is an array of the thresgold entries
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// //root = the element which the target intersects (null is entire viewport). Theshold = how much of the element intersects to cause and event to be triggered (can be array for multiple thresholds) rootMargin = leeway for triggering the event (see the bankist app at the top of this page for use)
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

////////LOADING EVENTS/////////////

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded (including all imgs/resources', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log('before user leaves', e);
//   e.returnValue = '';
// });
