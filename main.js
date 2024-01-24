gsap.registerPlugin(ScrollTrigger);
gsap.set(".channel-tunnel__img", { x: 300 });

gsap.to(".channel-tunnel__img",{
    scrollTrigger: {
      trigger: ".channel-tunnel__animation-cont",
      start: "top 80%",
      end: "top 40%",
    //   pin: true,
      pinSpacing: false,
      scrub: true,
      markers: true,
    },
    x: 0,
    ease: "power2.in",
    // duration: 1,
    stagger: 0.007,
});