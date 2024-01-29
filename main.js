gsap.registerPlugin(ScrollTrigger);
gsap.set(".train_model_note", { y: '10vh', opacity: 0 });

const lottieMap = document.querySelector('#lottieMap');
const formButton = document.querySelector('.form__button');
const labels = document.querySelectorAll('.radio-container label');

console.log(lottieMap);



// lottieMap.addEventListener('click', () => {
//     console.log('clicked');

//     LottieInteractivity.create({
//                 player: '#lottieMap',
//                 mode: "cursor",
//                 actions: [
//                     {
//                         type: "click",
//                         forceFlag: false
//                     }
//                 ]
//     });  
// });

const quizSubmit = () => {

  // console.log('submit');
  labels.forEach(label => {
    const radioInput = label.querySelector('input[type="radio"]');
    const span = label.querySelector('span');

    if (radioInput.checked) {
      if (span.textContent === 'All of mentioned above') {
        console.log('correct');
        gsap.to(label, { backgroundColor: '#94de71', duretion: 0.1, onComplete: () => rightLabel(label)});
      } else {
        gsap.to(label, { backgroundColor: '#ec7355', duration: 0.1, onComplete: () => shakeLabel(label) });
        console.log('incorrect');
      }
    }
  });

}

const rightLabel = (label) => {
  const tl = gsap.timeline();

  tl.to(label, {
    scale: 1.1,
    duration: 0.2,
    ease: "in",
  });

  tl.to(label, {
    scale: 1,
    duration: 0.2,
    ease: "out",
  });

  // tl.to(label, {
  //   backgroundColor: '#ECB055',
  //   duration: 0.2,
  // });

}

const shakeLabel = (label) => {
  const tl = gsap.timeline();

  tl.to(label, {
    rotation: -1,
    duration: 0.1,
    ease: "inOut",
    transformOrigin: "center center",
    repeat: 5,
    yoyo: true
  });

  tl.to(label, {
    backgroundColor: '#ECB055',
    duration: 0.1,
  });
}


const init = () => {

  formButton.addEventListener('click', quizSubmit);


  gsap.to(".note-desiro", {
    scrollTrigger: {
      trigger: ".train-desiro",
      start: "top 70%",
      end: "top 70%",
      //   scrub: true,
      // ToggleActions: 'play none none reset',
      // markers: true,
    },
    y: 0,
    ease: "power4.out",
    opacity: 1,
    duration: 1.5,
    stagger: 1,
  });

  gsap.to(".note-m7", {
    scrollTrigger: {
      trigger: ".train-m7",
      start: "top 70%",
      end: "top 70%",
      //   scrub: true,
      // ToggleActions: 'play none none reset',
      // markers: true,
    },
    y: 0,
    ease: "power4.out",
    opacity: 1,
    duration: 1,
    stagger: 1,
  });



  gsap.fromTo(".paris ",
    { y: '-150%' },
    {
      y: 0, duration: 1.5,
      ease: "power4.out",
    }
  );
  gsap.fromTo(".brussels ",
    { x: '-100%' },
    {
      delay: 0.5,
      x: 0, duration: 2,
      ease: "power4.out",
    }
  );

  gsap.fromTo(".amst ",
    { y: '-150%' },
    {
      delay: 1,
      y: 0, duration: 1.5,
      ease: "power4.out",
    }
  );

  gsap.fromTo(".cologne ",
    { x: '120%' },
    {
      delay: 1.5,
      x: 0, duration: 0.7,
      ease: "power4.out",
    }
  );


  gsap.fromTo(".channel-tunnel__img",
    { x: '70%' },
    {
      scrollTrigger: {
        trigger: ".channel-tunnel__animation-cont",
        start: "top 80%",
        end: "top 20%",
        //   pin: true,
        //   pinSpacing: false,
        scrub: true,
        markers: true,
      },
      x: 0,
      ease: "power4.out",
      // duration: 1,
      stagger: 0.1,
    });

};

init();