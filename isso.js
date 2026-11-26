// Intro Loader
const intro = document.getElementById('intro');
window.addEventListener('load', () => {
  setTimeout(() => {
    intro.classList.add('hide');
    document.body.classList.remove('locked');
  }, 2900);
});

// Cursor glow
const glow = document.querySelector(".cursorGlow");
window.addEventListener("mousemove", (e) => {
  if(glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

// Modal
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const openPlanBtn = document.getElementById("openPlanBtn");
const closeBtns = [document.getElementById("closeModalBtn"), document.getElementById("closeModalBtn2")];

function openModal(){
  modal.classList.add("show");
}
function closeModal(){
  modal.classList.remove("show");
}
openModalBtn?.addEventListener("click", openModal);
openPlanBtn?.addEventListener("click", openModal);
closeBtns.forEach(btn => btn?.addEventListener("click", closeModal));
modal?.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });
window.addEventListener("keydown", (e)=>{ if(e.key==="Escape") closeModal(); });

// Simulação visual de temperatura
const thermoValue = document.getElementById("thermoValue");
const barFill = document.getElementById("barFill");

const temps = [
  {t:-18, label:"-18°C"},
  {t:-16, label:"-16°C"},
  {t:-13, label:"-13°C"},
  {t:-11, label:"-11°C"}
];

let i = 0;
setInterval(() => {
  if (!thermoValue || !barFill) return;
  const item = temps[i % temps.length];
  thermoValue.textContent = item.label;

  const pct = Math.max(20, Math.min(100, ((-18 - item.t) / ( -18 + 11 )) * 100));
  barFill.style.width = pct + "%";

  barFill.style.background =
    item.t >= -12
      ? "linear-gradient(90deg, rgba(255,77,90,.95), rgba(255,210,77,.55))"
      : item.t >= -14
        ? "linear-gradient(90deg, rgba(255,210,77,.95), rgba(138,246,255,.55))"
        : "linear-gradient(90deg, rgba(138,246,255,.95), rgba(106,167,255,.85))";

  i++;
}, 3200);

// Formulário de Contato
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  
  contactForm.reset();
  formSuccess.style.display = "block";
  
  setTimeout(() => {
    formSuccess.style.display = "none";
  }, 5000);
});

// Revela elementos durante a rolagem (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Menu compacto para celular
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));