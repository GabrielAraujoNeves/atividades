import removerDuplicadas from "../Algoritmos/removerDuplicatas.js";
import chai from "chai";
const expect = chai.expect;


describe('Remover Numeros duplicados', () => {
    it('Remover numeros Duplicados', () => {
        const numeros = [1, 2, 2, 3, 3, 4, 5, 5];
        const resultado = removerDuplicadas(numeros);
        expect(resultado).to.deep.equal([ 1, 2, 3, 4, 5 ]);
    })
})