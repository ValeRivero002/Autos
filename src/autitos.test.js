import { mostrar_posiIni, mostrar_comandos,validarCoordenadas,validarFormatoCadena,ejecutarComandos } from "./autitos.js";

describe("Mostrar", () => {
  /*it("deberia mostrar posicion inicial x, y, orientacion", () => {
   
    expect(mostrar('3,2 N')).toEqual('3,2 N');
  });*/
  it("debería devolver null si la orientación no es válida, no existe X", () => {
    const resultado = mostrar_posiIni("3,2 X"); 
    expect(resultado).toBe(null);
  });


  it("debería devolver null si el formato de entrada es incorrecto, no hay coma", () => {
    const resultado = mostrar_posiIni("3 2 N"); 
    expect(resultado).toBe(null);
  });

  it("debería devolver las coordenadas y la orientación correcta", () => {
    const resultado = mostrar_posiIni("2,2/3,2 N/IAIAIA");
    expect(resultado).toEqual({ x: 3, y: 2, orientacion: "N" });
  });
  it("debería extraer los comandos a partir de la última barra diagonal", () => {
    const cadena = "5,5/1,2 N/IAIAIAIAA";
    const comandosExtraidos = mostrar_comandos(cadena);
    expect(comandosExtraidos).toBe("IAIAIAIAA");
  });
  it("debería devolver las coordenadas y la orientación correcta ingresando cadena completa", () => {
    const resultado = mostrar_posiIni('2,2/3,2 N/IAIAIA');
    expect(resultado).toEqual({ x: 3, y: 2,"orientacion": "N" });
  });
 
  it("debería devolver los comandos si son válidos", () => {
    const cadena = "2,2/3,2 N/IAIAIA";
    const resultado = mostrar_comandos(cadena);
    expect(resultado).toEqual("IAIAIA");
  });
  it("debería devolver los comandos son invalidos", () => {
    
    const cadena = "2,2/3,2 N/IAIAIF";
    const resultado = mostrar_comandos(cadena);
    expect(resultado).toEqual(null);
  });
  it("debería devolver las coordenadas por que tienen una coma como separador yson positivos", () => {
    const coordenadas = "2,2/3,2 N/IAIAIF";
    const resultado = validarCoordenadas(coordenadas);
    expect(resultado).toBe(coordenadas);
  });
  it("debería devolver null, las coordenadas no tienen una coma como separador", () => {
    const coordenadas = "22/3,2 N/IAIAIF";
    const resultado = validarCoordenadas(coordenadas);
    expect(resultado).toBe(false);
  });
  it("debería devolver false si las coordenadas no tienen una coma como separador", () => {
    const coordenadas = "2.2/3,2 N/IAIAIF";
    const resultado = validarCoordenadas(coordenadas);
    expect(resultado).toBe(false);
  });

  it("debería devolver false si las coordenadas contienen letras", () => {
    const coordenadas = "abc,def/3,2 N/IAIAIF";
    const resultado = validarCoordenadas(coordenadas);
    expect(resultado).toBe(false);
  });

  it("debería devolver false si las coordenadas no son números enteros positivos", () => {
    const coordenadas = "-1,2/3,2 N/IAIAIF";
    const resultado = validarCoordenadas(coordenadas);
    expect(resultado).toBe(false);
  });
  it("debería devolver true si la cadena tiene 2 slashes", () => {
    const cadena = "5,5/1,2N/IAIAIAIAA";
    const resultado = validarFormatoCadena(cadena);
    expect(resultado).toBe(true);
  });

  it("debería devolver false si la cadena no tiene 2 slashes", () => {
    const cadena1 = "5,5/1,2N";
    const resultado1 = validarFormatoCadena(cadena1);
    expect(resultado1).toBe(false);
  });
  it("debería girar a la izquierda correctamente", () => {
    const cadenaComandos = "III"; 
    const posicionInicial = { x: 1, y: 2, orientacion: 'N' };
    const posicionFinal = ejecutarComandos(cadenaComandos, posicionInicial);
    expect(posicionFinal).toEqual({ x: 1, y: 2, orientacion: 'E' });
  });
  it("debería girar a la izquierda correctamente con la cadena", () => {
    const cadena = "5,5/1,2 N/III"; 
    const comandos=mostrar_comandos(cadena);
    const posicionInicial = mostrar_posiIni(cadena);
    const posicionFinal = ejecutarComandos(comandos, posicionInicial);
    expect(posicionFinal).toEqual({ x: 1, y: 2, orientacion: 'E' });
  });
  it("debería girar a la derecha correctamente", () => {
    const cadenaComandos = "DD"; 
    const posicionInicial = { x: 1, y: 2, orientacion: 'N' };
    const posicionFinal = ejecutarComandos(cadenaComandos, posicionInicial);
    expect(posicionFinal).toEqual({ x: 1, y: 2, orientacion: 'S' });
  });
  it("debería girar a la derecha correctamente con la cadena", () => {
    const cadena = "5,5/1,2 N/DDD"; 
    const comandos=mostrar_comandos(cadena);
    const posicionInicial = mostrar_posiIni(cadena);
    const posicionFinal = ejecutarComandos(comandos, posicionInicial);
    expect(posicionFinal).toEqual({ x: 1, y: 2, orientacion: 'O' });
  });
  it("debería avanzar correctamente varias veces hacia el norte", () => {
    const cadenaComandos = "AAAA"; 
    const posicionInicial = { x: 1, y: 2, orientacion: 'N' };
    const posicionFinal = ejecutarComandos(cadenaComandos, posicionInicial);
    expect(posicionFinal).toEqual({ x: 1, y: 6, orientacion: 'N' });
  });
  it("debería avanzar correctamente con la cadena", () => {
    const cadena = "5,5/1,2 E/AAAA"; 
    const comandos=mostrar_comandos(cadena);
    const posicionInicial = mostrar_posiIni(cadena);
    const posicionFinal = ejecutarComandos(comandos, posicionInicial);
    expect(posicionFinal).toEqual({ x: 5, y: 2, orientacion: 'E' });
  });
});

