import { mostrar_posiIni, mostrar_comandos } from "./autitos";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#comandos-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado2-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadenaEntrada = first.value.trim();

  const resultado = mostrar_posiIni(cadenaEntrada);

  if (resultado) {
    div.innerHTML = `<p>Posicion Inicial : ${resultado.x},${resultado.y} ${resultado.orientacion}</p>`;

  } else {
    div.innerHTML = "<p>Formato de entrada incorrecto o orientación inválida.</p>";
  }
  div2.innerHTML = "<p>Comandos: "+ mostrar_comandos(cadenaEntrada)+"</p>";
});
