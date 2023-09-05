import mostrar from "./autitos.js";

describe("Mostrar", () => {
  /*it("deberia mostrar posicion inicial x, y, orientacion", () => {
   
    expect(mostrar('3,2 N')).toEqual('3,2 N');
  });*/
  it("debería devolver null si la orientación no es válida, no existe X", () => {
    const resultado = mostrar("3,2 X"); 
    expect(resultado).toBe(null);
  });


  it("debería devolver null si el formato de entrada es incorrecto, no hay coma", () => {
    const resultado = mostrar("3 2 N"); 
    expect(resultado).toBe(null);
  });
  it("debería devolver las coordenadas y la orientación correcta", () => {
    const resultado = mostrar("3,2 N");
    expect(resultado).toEqual({ x: 3, y: 2, orientacion: "N" });
  });
});
