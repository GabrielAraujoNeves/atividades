import verificarPalindromo from "../Algoritmos/verificarPalindromo.js";
import chai from 'chai';
const expect = chai.expect;

describe('palidrome esta funcionando', () => {
    it('retorna true se e for palidrome', () => {
        const letra = "radar";
        const resultado = verificarPalindromo(letra);
        expect(resultado).to.deep.equal(true)
    });

    it('retornar false se nao for palidrome ', () => {
        const palavraErrada = "radr";
        const resultado = verificarPalindromo(palavraErrada);
        expect(resultado).to.deep.equal(false);
    })
});