// script.js
// Asegúrate de que GSAP y ScrollTrigger están cargados correctamente
gsap.registerPlugin(ScrollTrigger);

// Selecciona todos los videos con la clase .video
const videos = document.querySelectorAll('video');

videos.forEach((video) => {
  // Configura ScrollTrigger para cada video
  ScrollTrigger.create({
    trigger: video,
    start: "top center", // Reproduce cuando el video esté en el centro de la pantalla
    end: "bottom center",
    onEnter: () => video.play(),
    onLeave: () => video.pause(),
    onEnterBack: () => video.play(),
    onLeaveBack: () => video.pause(),
  });
});
