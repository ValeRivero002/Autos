import { mostrar_posiIni, mostrar_comandos,validarCoordenadas,validarFormatoCadena,ejecutarComandos,CoordenadasSuperficie } from "./autitos";

const first = document.querySelector("#primer-numero");
const form = document.querySelector("#comandos-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado2-div");
const div3 = document.querySelector("#resultado3-div");
const div4 = document.querySelector("#resultado4-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cadenaEntrada = first.value.trim();

  const Posi_Final = mostrar_posiIni(cadenaEntrada);
  const Validar_Coordenada = validarCoordenadas(cadenaEntrada);
  const Comandos = mostrar_comandos(cadenaEntrada);
  const Validar_Cadenaa = validarFormatoCadena(cadenaEntrada);
  const superficie=CoordenadasSuperficie(cadenaEntrada);
  const posicionFinal= ejecutarComandos(Comandos,Posi_Final,superficie);
  if(Validar_Cadenaa!=false)
  {
    if (Posi_Final) {
      div.innerHTML = `<p>Posicion Inicial : ${Posi_Final.x},${Posi_Final.y} ${Posi_Final.orientacion}</p>`;
  
    } else {
      div.innerHTML = "<p>Formato de entrada de la Posicion Inicial incorrecto o orientación inválida.</p>";
    }
    if (Comandos) {
      div2.innerHTML = "<p>Comandos: "+ mostrar_comandos(cadenaEntrada)+"</p>";
  
    } else {
      div2.innerHTML = "<p>Formato de entrada de los Comandos incorrecto o orientación inválida.</p>";
    }
    if (Validar_Coordenada!=false) {
      div3.innerHTML = "<p></p>";
  
    } else {
      div3.innerHTML = "<p>Formato de entrada de la Superficie incorrecto o orientación inválida.</p>";
    }
    div4.innerHTML = `<p>Posicion Final : ${posicionFinal.x},${posicionFinal.y} ${posicionFinal.orientacion}</p>`;
  }
  else{
    div3.innerHTML = "<p>Formato de entrada de la Cadena incorrecto o orientación inválida.</p>";
  }
  
  
});
