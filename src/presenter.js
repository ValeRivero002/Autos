import mostrar from "./autitos";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#comandos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = first.value;

  div.innerHTML = "<p>" +"Posicion Inicial: "+ mostrar(firstNumber) + "</p>";
});
