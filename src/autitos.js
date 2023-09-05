export function mostrar_posiIni(cadena) {
  const partes = cadena.split("/");
  
  if (partes.length >= 2) {
    const coordenadas = partes[1].split(" ");
    
    if (coordenadas.length == 2) {
      const xy = coordenadas[0].split(","); 
      const x = parseInt(xy[0]);
      const y = parseInt(xy[1]);
      const orientacion = coordenadas[1];

      if (['N', 'S', 'E', 'O'].includes(orientacion)) {
        return { x, y,orientacion };
      }
     
    }
  }
  
  return null;
}


export function mostrar_comandos(cadena)
{
  const indiceUltimaBarra = cadena.lastIndexOf('/');

  if (indiceUltimaBarra !== -1) {
    const comandos = cadena.slice(indiceUltimaBarra + 1);

    if (/^[IAD]*$/.test(comandos)) {
      return comandos;
    }
    else {
      return null;
   }


  } else {
     return null;
  }
}
export function validarCoordenadas(coordenadas) {
  const coordenadasIniciales = coordenadas.split("/")[0];
  const [x, y] = coordenadasIniciales.split(",");
  if (coordenadas.includes(",") && Number.isInteger(parseInt(x)) && Number.isInteger(parseInt(y)) && parseInt(x) >= 0 && parseInt(y) >= 0) {
 
    return coordenadas;
  }
  return false;
}
export function validarFormatoCadena(cadena) {
  const slashCount = cadena.split("/").length - 1; 

  if(slashCount == 2)
  {
    return true;
  }
  else{
    return false;
  }
}
export function ejecutarComandos(cadenaComandos, posicionInicial) {
  let x = posicionInicial.x;
  let y = posicionInicial.y;
  let orientacion = posicionInicial.orientacion;

  // Recorre cada carácter de la cadena de comandos
  for (const comando of cadenaComandos) {
    switch (comando) {
      case 'I':
      
        switch (orientacion) {
          case 'N':
            orientacion = 'O';
            break;
          case 'O':
            orientacion = 'S';
            break;
          case 'S':
            orientacion = 'E';
            break;
          case 'E':
            orientacion = 'N';
            break;
        }
        break;
        case 'D':
          switch (orientacion) {
            case 'N':
              orientacion = 'E';
              break;
            case 'E':
              orientacion = 'S';
              break;
            case 'S':
              orientacion = 'O';
              break;
            case 'O':
              orientacion = 'N';
              break;
          }
          break;
          case 'A':
        switch (orientacion) {
          case 'N':
            y++;
            break;
          case 'E':
            x++;
            break;
          case 'S':
            y--;
            break;
          case 'O':
            x--;
            break;
        }
        break;
      default:
        
        break;
    }
  }

  return { x, y, orientacion };
}
