var tl = gsap.timeline();
tl.from("#headnav .nav1, #headnav .nav2, #headnav .nav3, #headnav .nav4", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.5,
  // scrollTrigger:{
  //   trigger:"#headnav .nav1, #headnav .nav2, #headnav .nav3, #headnav .nav4",
  //   scroller:"body"
  // }
});
// tl.from("#sec1 .div1, #sec1 .h1", {
//   scale: 4,
//   duration: 1,
//   delay: 0.5,
//   opacity: 0,
//   stagger: 0.5,
// });
