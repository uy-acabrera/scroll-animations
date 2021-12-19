const flightPath = {
  curviness: 1.25,
  autoRotate: true,
  path: [
    { x: 100, y: -20 },
    { x: 300, y: 10 },
    { x: 500, y: 100 },
    { x: 750, y: -100 },
    { x: 350, y: -50 },
    { x: 600, y: 100 },
    { x: 800, y: 0 },
    { x: window.innerWidth, y: 50 },
  ]
};

const tween = gsap.timeline();
tween
  .to(".paper-plane", {
    duration: 1,
    ease: "power1.inOut",
    motionPath: flightPath,
    scale: 5,
  })
  // .to('.paper-plane', {
  //   duration: 1,
  //   scale: 5,
  // })
;

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  triggerHook: 0,
  duration: 1000
})
  .setTween(tween)
  .addIndicators()
  .setPin('.animation')
  .addTo(controller);
