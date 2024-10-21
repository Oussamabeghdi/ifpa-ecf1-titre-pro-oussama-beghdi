let hero = document.querySelector(".hero");
let footer = document.querySelector(".footer");
let portrait = document.querySelector(".section-col1 img");
let portraitUser = document.querySelector(".portrait");
let buttonSend = document.querySelector(".boutton-envoyer-message");
let titles = document.querySelectorAll(".text-style");
document.getElementById("change-to-blue").addEventListener("click", function () {
  titles.forEach((title) => {
    title.style.textDecorationColor = "#1d4ed8";
  });
  hero.style.background = "#1d4ed8";
  portrait.style.borderColor = " #1d4ed8";
  footer.style.background = "#1d4ed8";
  buttonSend.style.background = "#1d4ed8";
  buttonSend.addEventListener("mouseover", function () {
    buttonSend.style.backgroundColor = "#3b82f6"; // Couleur bleue au survol
  });
  buttonSend.addEventListener("mouseout", function () {
    buttonSend.style.backgroundColor = "#1d4ed8";
  });
});

document.getElementById("change-to-green").addEventListener("click", function () {
  titles.forEach((title) => {
    title.style.textDecorationColor = "#16a34a";
  });
  hero.style.background = "#16a34a";
  portraitUser.style.borderColor = "#16a34a";
  footer.style.background = "#16a34a";
  buttonSend.style.background = "#16a34a";
  buttonSend.addEventListener("mouseover", function () {
    buttonSend.style.backgroundColor = " #22c55e"; // Couleur bleue au survol
  });
  buttonSend.addEventListener("mouseout", function () {
    buttonSend.style.backgroundColor = "#16a34a";
  });
});
