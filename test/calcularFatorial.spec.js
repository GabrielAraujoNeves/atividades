import calcularFatorial from "../Algoritmos/calcularFatorial.js";
import chai from "chai";
const expect = chai.expect;


describe('Numero Fatorial', () => {
    it('Retorna o valor corretor do Fatorial', () => {
        const numero = 5;
        const resultado = calcularFatorial(numero);
        expect(resultado).to.deep.equal(120);
    })
})