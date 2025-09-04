// ============================
// Mobile Menu Toggle
// ============================
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("header nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    // Agar hidden hai toh dikhado
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      nav.classList.add("flex", "flex-col", "bg-gray-900", "absolute", "top-16", "right-6", "p-6", "rounded-lg", "shadow-lg");
    } else {
      nav.classList.add("hidden");
      nav.classList.remove("flex", "flex-col", "bg-gray-900", "absolute", "top-16", "right-6", "p-6", "rounded-lg", "shadow-lg");
    }
  });
}

// ============================
// Smooth Scroll (extra polish)
// ============================
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // header ke niche stop hoga
        behavior: "smooth"
      });
    }
  });
});

// ============================
// Portfolio Video Hover Effect
// ============================
const portfolioVideos = document.querySelectorAll(".portfolio-video");

portfolioVideos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.muted = false; // hover pe sound chalu
    video.play().catch(() => {}); // autoplay allow karega
  });

  video.addEventListener("mouseleave", () => {
    video.muted = true;
    video.pause();
    video.currentTime = 0; // reset start se
  });
});
