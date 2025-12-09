// ====================== PRELOADER ===========================
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// ====================== NAVBAR SCROLL EFFECT =================
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ====================== BACK TO TOP ==========================
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ====================== DARK MODE ============================
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkToggle.textContent = "☀️";
    document.body.style.background = "linear-gradient(135deg, #000, #222)";
  } else {
    darkToggle.textContent = "🌙";
    document.body.style.background = "linear-gradient(135deg, #0a0f1f, #111b31, #162238)";
  }
});

// ====================== TYPING ANIMATION ======================
const text = "Halo, Saya augustav brillyan sinduartha";
let index = 0;

function typing() {
  const span = document.querySelector(".hero-left h1 span");
  span.textContent = text.slice(0, index);
  index++;

  if (index <= text.length) {
    setTimeout(typing, 80);
  }
}

typing();

// ====================== SCROLL REVEAL ========================
const fadeElements = document.querySelectorAll(".fade-in");

function reveal() {
  fadeElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// ====================== POPUP PROJECT =========================
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <img id="modalImg" src="">
    <p id="modalTitle"></p>
    <button id="closeModal">Tutup</button>
  </div>
`;
document.body.appendChild(modal);

const projectImages = document.querySelectorAll(".project-img");

projectImages.forEach((img) => {
  img.addEventListener("click", () => {
    document.getElementById("modalImg").src = img.src;
    document.getElementById("modalTitle").textContent = img.alt;
    modal.style.display = "flex";
  });
});

document.getElementById("closeModal").onclick = () => {
  modal.style.display = "none";
};

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// ====================== HAMBURGER MENU =========================
// Optional jika nanti kamu ingin buat menu mobile
