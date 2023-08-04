import encontrarMaiorNumero from "../Algoritmos/encontraMaiorNumero.js";
import chai from "chai";
const expect = chai.expect;

describe('EncontrarMaiorNumero', () => {
    it('Foi encotrado maior numero', () => {
        const numero = [10,3,5,8,2];
        const resultado = encontrarMaiorNumero(numero);
        expect(resultado).to.deep.equal(10);
    });
});