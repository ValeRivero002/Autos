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