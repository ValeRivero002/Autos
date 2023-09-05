import mostrar from "./autitos";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#comandos-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadenaEntrada = first.value.trim();

  const resultado = mostrar(cadenaEntrada);

  if (resultado) {
    div.innerHTML = `<p>Posicion Inicial : ${resultado.x},${resultado.y} ${resultado.orientacion}</p>`;

  } else {
    div.innerHTML = "<p>Formato de entrada incorrecto o orientación inválida.</p>";
  }
});
