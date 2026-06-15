const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton?.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", event => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

document.querySelectorAll(".photo-video").forEach(video => {
  video.muted = true;
  video.playsInline = true;

  const playPromise = video.play();
  if (playPromise) {
    playPromise.catch(() => {
      video.controls = true;
    });
  }
});
