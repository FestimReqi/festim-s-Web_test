let tl = gsap.timeline();

tl.from("h2 span> span", {
  duration: 0.5,
  y: 150,
  autoAlpha: 0,
  ease: Power3.out,
  stagger: 1
})


tl.from("p span> span", {
    duration: 1,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1
  })
  
