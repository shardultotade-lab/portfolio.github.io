// 🌟 Typing Effect for Header Subtitle
const text = "Mechanical Engineer | Web Learner | Fitness Enthusiast";
let index = 0;

function typeEffect() {
  const subtitle = document.getElementById("subtitle");
  if (index < text.length) {
    subtitle.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// 🌟 Smooth Scroll for Navigation Links
const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
}

// 🌟 Back to Top Button
const topBtn = document.createElement("button");
topBtn.innerText = "↑ Top";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.fontSize = "18px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "8px";
topBtn.style.background = "#0077b6";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 3px 10px rgba(0,0,0,0.2)";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
