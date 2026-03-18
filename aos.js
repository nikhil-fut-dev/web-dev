AOS.init();
window.onload = () => {
  document.getElementById("loader").style.display = "none";
  document.body.style.overflow = "auto";
};

// GSAP Infinite Smooth Carousel (No Jump)
const track = document.getElementById("carouselTrack");

// Duplicate content for seamless loop
track.innerHTML += track.innerHTML;

const totalWidth = track.scrollWidth / 2;

let tween = gsap.to(track, {
  x: -totalWidth,
  duration: 20,
  ease: "none",
  repeat: -1,
});

// Pause on hover (entire carousel area)
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => tween.pause());
carousel.addEventListener("mouseleave", () => tween.resume());

// Drag / Swipe Control
let isDown = false;
let startX;
let currentX = 0;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX;
  tween.pause();
});

track.addEventListener("mouseleave", () => {
  isDown = false;
  tween.resume();
});

track.addEventListener("mouseup", () => {
  isDown = false;
  tween.resume();
});

track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  const walk = e.pageX - startX;
  gsap.set(track, { x: `+=${walk}` });
  startX = e.pageX;
});

// Touch support
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].pageX;
  tween.pause();
});

track.addEventListener("touchmove", (e) => {
  const walk = e.touches[0].pageX - startX;
  gsap.set(track, { x: `+=${walk}` });
  startX = e.touches[0].pageX;
});

track.addEventListener("touchend", () => {
  tween.resume();
});
