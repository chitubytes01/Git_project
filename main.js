const courses = ["Java", "Python", "C", "C++", "HTML", "CSS"];
let i = 0;

const courseText = document.getElementById("courseText");

setInterval(() => {
  courseText.textContent = courses[i];
  i = (i + 1) % courses.length;
}, 1000);

// ================= SCROLL ANIMATION =================
const cards = document.querySelectorAll(".showcase-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


// ==== for login sigh up ====
const modal = document.getElementById("authModal");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

document.querySelector(".login").onclick = () => {
  modal.style.display = "flex";
  showLogin();
};

document.querySelector(".signup").onclick = () => {
  modal.style.display = "flex";
  showSignup();
};

function closeAuth() {
  modal.style.display = "none";
}

function showLogin() {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
}

function showSignup() {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
}
