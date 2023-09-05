export function mostrar_posiIni(cadena) {
  const partes = cadena.split("/");
  
  if (partes.length >= 2) {
    const coordenadas = partes[1].split(" ");
    
    if (coordenadas.length === 2) {
      const xy = coordenadas[0].split(","); // Dividir las coordenadas por coma
      const x = parseInt(xy[0]);
      const y = parseInt(xy[1]);
      const orientacion = coordenadas[1];
      
      return { x, y,orientacion };
    }
  }
  
  return null;
}


export function mostrar_comandos(cadena)
{
  const indiceUltimaBarra = cadena.lastIndexOf('/');

  if (indiceUltimaBarra !== -1) {
    const comandos = cadena.slice(indiceUltimaBarra + 1);

    return comandos;


  } else {
     return null;
  }
}
