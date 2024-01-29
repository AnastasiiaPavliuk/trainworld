gsap.registerPlugin(ScrollTrigger);
gsap.set(".train_model_note", { y: '10vh', opacity: 0 });

const lottieMap = document.querySelector('#lottieMap');

console.log(lottieMap);


lottieMap.addEventListener('click', () => {
    console.log('clicked');
    LottieInteractivity.create({
                player: '#lottieMap',
                mode: "cursor",
                actions: [
                    {
                        type: "click",
                        forceFlag: false
                    }
                ]
    });  
});


const init = () => {


    gsap.to(".note-desiro",{
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

    gsap.to(".note-m7",{
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
                start: "top 100%",
                end: "top 40vh",
                //   pin: true,
                //   pinSpacing: false,
                scrub: true,
                // markers: true,
            },
            x: 0,
            ease: "power4.out",
            // duration: 1,
            stagger: 0.1,
        });

};

init();