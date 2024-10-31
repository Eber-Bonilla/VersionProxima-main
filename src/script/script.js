// script.js
gsap.registerPlugin(ScrollTrigger);

const videos = document.querySelectorAll('video');

// Configura ScrollTrigger para cada video
videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      video.play(); // Reproduce el video
    },
    onLeave: () => video.pause(),
    onEnterBack: () => video.play(),
    onLeaveBack: () => video.pause(),
  });
});

// Reproducir el primer video al cargar la página
window.addEventListener('load', () => {
  const firstVideo = videos[0]; // Selecciona el primer video
  firstVideo.play(); // Reproduce el video
});
