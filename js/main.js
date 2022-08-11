
// gsap.set("#demo", {scale: 0.8}); 

let animation = gsap.timeline()
    .from("#demo", {duration: 2, opacity: 0})
    .from("#title", {opacity: 0, scale: 0, ease: "back"})
    .from("#freds img", {y: 160, stagger: 1, duration: 0.8, ease: "back"})
    .add("test") // creates a breakpoint in the animation at this time
    .from("#time", {xPercent: 100, duration: 1, ease: "linear"})

// animation.play("test")

// event listeners

document.getElementById("play").onclick = () => animation.play(); // destructured, curly braces removed - only one line.
document.getElementById("pause").onclick = () => animation.pause(); 
document.getElementById("reverse").onclick = () => animation.reverse(); 
document.getElementById("restart").onclick = () => animation.restart();
document.getElementById("test").onclick = () => animation.play("test");