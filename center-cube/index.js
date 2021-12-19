$(document).ready(function() {
  window.scroll(0, 0);

  let wasAnimated = false;
  let cube = document.querySelector('.cube');
  let nextSection = document.querySelector('.next-section');
  let animationDuration = 1500;
  let maxCubeWidth = 1920;
  let cubeTopTranslation = 600;
  
  $(document).on('scroll', (event) => {
    if (!wasAnimated) {
      event.stopPropagation();
  
      wasAnimated = true;
  
      let scale = document.body.offsetWidth / cube.getBoundingClientRect().width;
      scale = document.body.offsetWidth > maxCubeWidth ? maxCubeWidth / cube.getBoundingClientRect().width : scale;
      
      let x = (document.body.offsetWidth / 2) - (cube.getBoundingClientRect().width / 2) - cube.getBoundingClientRect().left;
      let y = cube.getBoundingClientRect().top +  cubeTopTranslation;
  
      let nextSectionY = cube.getBoundingClientRect().height * scale;
      console.log('event', event)
      
      document.body.style.overflow = 'hidden';
  
      // Keyframes on cube
      cube.animate([
        {
          transform: 'translate(0px, 0px) scale(1)',
        },
        {
          transform: `translate(${x}px, ${y}px) scale(${scale})`,
        }
      ], {
        duration: animationDuration,
      }).finished.then(() => {
        cube.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
      });

      // Keyframes on next section
      nextSection.animate([
        {
          transform: `translate(0px, ${nextSectionY}px)`,
        }
      ], {
        duration: animationDuration,
      }).finished.then(() => {
        nextSection.style.transform = `translate(0px, ${nextSectionY}px)`;
        document.body.style.overflow = 'auto';
      });
     
      $("html, body").stop().animate({
        scrollTop: y
      }, animationDuration, 'linear', function() { });
    }
  });
});
