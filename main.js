gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollToPlugin);
gsap.set(".train_model_note", { y: '10vh', opacity: 0 });

const lottieMap = document.querySelector('#lottieMap');
const formButton = document.querySelector('.form__button');
const labels = document.querySelectorAll('.radio-container label');

const navbar = document.querySelector('.navbar');
const textElements = document.querySelectorAll(".text");

const icons = document.querySelectorAll('.icon');
const planeIcon = document.querySelector('.icon__plane');
const trainIcon = document.querySelector('.icon__train');
const carIcon = document.querySelector('.icon__car');
const durationResult = document.querySelector('.duration__result');
const priceResult = document.querySelector('.price__result');

let prevScrollPos = window.scrollY;

const durations = {
  plane: '1 h',
  train: '1,5 h',
  car: '4 h',
};

const prices = {
  plane: '€ 180-210',
  train: '€ 60-110',
  car: '€ 35-55',
};




const showNavbar = () => {
  // console.log('scroll');
  const currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }
  prevScrollPos = currentScrollPos;
};

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
  console.log('submit')  
  labels.forEach(label => {
    const radioInput = label.querySelector('input[type="radio"]');
    const span = label.querySelector('span');

    if (radioInput.checked) {
      if (span.textContent === 'All of mentioned above') {
        console.log('correct');
        gsap.to(label, { backgroundColor: '#94de71', duration: 0.1, onComplete: () => rightLabel(label) });
        formButton.disabled = true;
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

  // tl.to(document, {
  //   scrollTo: {
  //     y: 400, 
  //     autoKill: true
  //   },
  //   ease: "power4.out",
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

const updateTravelInfo = (transport) => {
  durationResult.textContent = durations[transport];
  priceResult.textContent = prices[transport];
}

const changeState = (element) => {
  icons.forEach(icon => icon.classList.remove('icon--active'));
  element.classList.add('icon--active');
};

const handleIconClick = (transport, element) => {
  updateTravelInfo(transport);
  changeState(element);
};

const gsapAnimations = () => {

  gsap.to(".note-desiro", {
    scrollTrigger: {
      trigger: ".train-desiro",
      start: "top 70%",
      end: "top 70%"
    },
    y: 0,
    ease: "power4.out",
    opacity: 1,
    duration: 1,
    stagger: 0.2,
  });

  gsap.to(".note-m7", {
    scrollTrigger: {
      trigger: ".train-m7",
      start: "top 70%",
      end: "top 70%"
    },
    y: 0,
    ease: "power4.out",
    opacity: 1,
    duration: 1,
    stagger: 0.2,
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
        scrub: true
      },
      x: 0,
      ease: "power4.out",
      // duration: 1,
      stagger: 0.1,
    });

  textElements.forEach((textElement) => {
    gsap.from(textElement, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      scrollTrigger: {
        trigger: textElement,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none reverse"
      },
    });
  });
};

const init = () => {
  gsapAnimations();
  
  window.addEventListener('scroll', showNavbar);
  planeIcon.addEventListener('click', () => handleIconClick('plane', planeIcon));
  trainIcon.addEventListener('click', () => handleIconClick('train', trainIcon));
  carIcon.addEventListener('click', () => handleIconClick('car', carIcon));
  formButton.addEventListener('click', quizSubmit);


};

init();