function mostrar(cadena) {
  const partes = cadena.split(" ");
  if (partes.length === 2) {
    const coordenadas = partes[0].split(",");
    if (coordenadas.length === 2) {
      const x = parseInt(coordenadas[0]);
      const y = parseInt(coordenadas[1]);
      const orientacion = partes[1];
      
    
      if (['N', 'S', 'E', 'O'].includes(orientacion)) {
        return { x, y, orientacion };
      }
    }
  }
  return null;
}

export default mostrar;