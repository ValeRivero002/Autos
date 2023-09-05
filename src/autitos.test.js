import mostrar from "./autitos.js";

describe("Mostrar", () => {
  it("deberia mostrar posicion inicial x, y, orientacion", () => {
   
    expect(mostrar('3,2 N')).toEqual('3,2 N');
  });
});
