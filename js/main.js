const $reaction = document.querySelector(".reaction"),
  $memory = document.querySelector(".memory"),
  $verbal = document.querySelector(".verbal"),
  $visual = document.querySelector(".visual"),
  result = document.querySelectorAll(".result");
let contador = 0;

async function data() {
  fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((capacidades) => {
        result[contador].innerHTML = `
          <img src="${capacidades.icon}" alt="">
          <p>${capacidades.category}</p>
          <p><b>${capacidades.score}</b> / 100</p>
        `;
        contador++;
      });
    });
}

data();
