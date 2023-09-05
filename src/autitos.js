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
export function CoordenadasSuperficie(cadenaComandos) {
 
  const partes = cadenaComandos.split("/");

  if (partes.length >= 1) {
 
    const coordenadasSuperficie = partes[0];

   
    const [x, y] = coordenadasSuperficie.split(",");

    if (x && y) {
      
      const dimensionX = parseInt(x);
      const dimensionY = parseInt(y);

     
        return { dimensionX, dimensionY };
      }
    }
    return null;
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
export function ejecutarComandos(cadenaComandos, posicionInicial, dimensionSuperficie) {
  let x = posicionInicial.x;
  let y = posicionInicial.y;
  let nuevoX = x;
  let nuevoY = y;
  let orientacion = posicionInicial.orientacion;

  for (let i = 0; i < cadenaComandos.length; i++) {
    const comando = cadenaComandos[i];
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
            nuevoY++;
            break;
          case 'E':
            nuevoX++;
            break;
          case 'S':
            nuevoY--;
            break;
          case 'O':
            nuevoX--;
            break;
        }

        
        if ((nuevoX <= dimensionSuperficie.dimensionX) && ( nuevoY <= dimensionSuperficie.dimensionY)) {
          x = nuevoX;
          y = nuevoY;
        }
        break;
      default:
        
        break;
    }
  }

  return { x, y, orientacion };
}

