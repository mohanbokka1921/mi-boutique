// main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("M I Boutique website loaded 💕");

  // Simple active link highlight
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = "#b84c65";
      link.style.fontWeight = "bold";
    }
  });
});
