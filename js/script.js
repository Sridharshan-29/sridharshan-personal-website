
const root=document.documentElement;
const toggle=document.querySelector(".theme-toggle");
const saved=localStorage.getItem("theme");
const preferred=saved || "dark";
root.dataset.theme=preferred;

function updateThemeButton(){
  if(!toggle)return;
  const light=root.dataset.theme==="light";
  toggle.innerHTML=light ? "🌙 <span>Dark mode</span>" : "☀️ <span>Light mode</span>";
}
updateThemeButton();
toggle?.addEventListener("click",()=>{
  root.dataset.theme=root.dataset.theme==="light"?"dark":"light";
  localStorage.setItem("theme",root.dataset.theme);
  updateThemeButton();
});

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");
menuBtn?.addEventListener("click",()=>navLinks.classList.toggle("open"));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
