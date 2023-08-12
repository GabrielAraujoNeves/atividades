import removerDuplicadas from "../Algoritmos/removerDuplicatas.js";
import chai from "chai";
const expert = chai.expect;

describe("Numeros Duplicados", () => {
    it("Remove numeros duplicados", () => {
        const numeros = [1, 2, 2, 3, 3, 4, 5, 5];
        const resultado = removerDuplicadas(numeros);
        expert(resultado).to.deep.equal([1,2,3,4,5]);
    });
});


