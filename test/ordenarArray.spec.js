import ordenarArray from "../Algoritmos/ordenarArray.js";
import chai from "chai";
const expect  = chai.expect;


describe("Ordenar Array", () =>{
    it("Mostra Numeros Ordenados do Array", () => {
        const array = [5, 2, 9, 1, 5];
        const resultado = ordenarArray(array);
        expect(resultado).to.deep.equal([1, 2, 5, 5, 9]);
    });
});