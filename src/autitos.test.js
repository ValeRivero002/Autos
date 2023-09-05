import { mostrar_posiIni, mostrar_comandos } from "./autitos.js";

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
    const resultado = mostrar_posiIni("3,2 N");
    expect(resultado).toEqual({ x: 3, y: 2, orientacion: "N" });
  });
  it("debería extraer los comandos a partir de la última barra diagonal", () => {
    const cadena = "5,5/1,2 N/IAIAIAIAA";
    const comandosExtraidos = mostrar_comandos(cadena);
    expect(comandosExtraidos).toBe("IAIAIAIAA");
  });
  it("debería devolver las coordenadas y la orientación correcta ingresando cadena completa", () => {
    const resultado = mostrar_posiIni("2,2/3,2 N/IAIAIA");
    expect(resultado).toEqual({"orientacion": "N", x: 3, y: 2 });
  });

});
