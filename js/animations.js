ScrollReveal().reveal(".first-conteiner-welcome  ", {
  duration: 600,
  distance: "0px",
  easing: "ease-out",
  origin: "bottom",
  reset: true,
  scale: 1,
  viewFactor: 0,
});

ScrollReveal().reveal(".second-conteiner-welcome  ", {
  duration: 600,
  distance: "0px",
  easing: "ease-out",
  origin: "bottom",
  reset: true,
  scale: 1,
  viewFactor: 0,
});

ScrollReveal().reveal(".third-conteiner-welcome", {
  duration: 1000,
  distance: "0px",
  easing: "ease-out",
  origin: "bottom",
  reset: true,
  scale: 1,
  viewFactor: 0,
});

ScrollReveal().reveal(".whoim", {
  duration: 600,
  easing: "ease-out",
  origin: "bottom",
  reset: true,
  scale: 1,
  viewFactor: 0,
});

const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  
    mobile: {
      breakpoint: 0,
      smooth: true,

    },
    tablet: {
      breakpoint: 0,
      smooth: true,
     
    },
});


ScrollReveal().reveal(".info", { reset: true, duration: 600 });


barba.init({
  // ...
})

