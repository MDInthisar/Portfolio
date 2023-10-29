
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let tl = gsap.timeline();
tl.from("#nav .nav-left,#nav .nav-right ",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.5

})
tl.from(".card",{
    y: 15,
    duration:.5,
    scale:1.2,
    opacity:0,
});
tl.from(".second-p1",{
    x:500,
    duration:1,
    opacity:0,
})