function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

var crsr = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 10+"px"
    crsr.style.top = dets.y + 10+"px"
})

var crsr2 = document.querySelector(".curser2");
var video = document.querySelector(".page1 video");

document.addEventListener("mousemove", function(e){
  crsr2.style.left = e.pageX + 10 + "px";
  crsr2.style.top = e.pageY + 10 + "px";
});

video.addEventListener("mouseenter", function(){
  crsr2.style.display = "flex";
});

video.addEventListener("mouseleave", function(){
  crsr2.style.display = "none";
});

// For page 3 Video

var crsr2 = document.querySelector(".curser2");
var video = document.querySelector(".page3-part1 video");

document.addEventListener("mousemove", function(e){
  crsr2.style.left = e.pageX + 10 + "px";
  crsr2.style.top = e.pageY + 10 + "px";
});

video.addEventListener("mouseenter", function(){
  crsr2.style.display = "flex";
});

video.addEventListener("mouseleave", function(){
  crsr2.style.display = "none";
});



// Gsap

gsap.from(".page1 h1,.page1 h2", {
    y: 10,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 25%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "90%"
}, "anim")

gsap.registerPlugin(ScrollTrigger);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    scroller: ".main",
    start: "top -120%",
    end: "top -130",
    scrub: 3
  }
});

tl2.to(".main", {
  backgroundColor: "#ffffff",
  duration: 1,
  ease: "power1.inOut"
});

tl2.to(".main *", {  
  color: "#000000ff",
  duration: 1,
  ease: "power1.inOut"
}, "<"); 


// ============================

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
});

tl3.to(".main", {
  backgroundColor: "#000000ff",
  duration: 1,
  ease: "power1.inOut"
});

tl3.to(".main *", {  
  color: "#ffffffff",
  duration: 1,
  ease: "power1.inOut"
}, "<"); 




// =======================



var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "370px"
        crsr.style.height = "270px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})





// This is for Nav hover effect


// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         purple.style.display = "block"   
//         purple.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave",function(){
//         purple.style.display = "none"   
//         purple.style.opacity = "0"
//     })
// })