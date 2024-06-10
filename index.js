let hero = document.querySelector(".hero");
let footer = document.querySelector("footer");
let portrait = document.querySelector(".portait");

document
  .getElementById("change-to-blue")
  .addEventListener("click", function () {
    hero.style.backgroundColor = "#1d4ed8"; // Bleu
    portrait.style.borderColor = "#1d4ed8";
    footer.style.backgroundColor = "#1d4ed8"; // Bleu
  });

document
  .getElementById("change-to-green")
  .addEventListener("click", function () {
    hero.style.backgroundColor = "#16a34a"; // Vert
    portrait.style.borderColor = "#16a34a";
    footer.style.backgroundColor = "#16a34a"; // Vert
  });
