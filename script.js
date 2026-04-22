gsap.registerPlugin(ScrollTrigger);

let valorMaskSize = "2700vw"

if(window.innerWidth < 1000){
    valorMaskSize = "4000vw"
}

gsap.to(".mask", {
    maskSize: valorMaskSize,
    maskPosition: "53% center",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        start: "top top",
        end: "bottom 30%",
        scrub: 2
    }
})

const tl = gsap.timeline({defaults:{duration: .5}});


tl.from(".txtEfeito1", {
    y: 40,
    opacity: 0,
    filter: "blur(20px)",
    scrollTrigger: {
        trigger: ".txtEfeito1",
        start: "80% 50%",
        scrub: 2,
    }
}, "+=1").from(".txtEfeito2", {
    y:40,
    opacity: 0,
    filter: "blur(20px)",
    scrollTrigger: {
        trigger: ".txtEfeito2",
        start: "80% 50%",
        scrub: 2,
    }
}, "+=.1")