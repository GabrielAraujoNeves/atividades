import somarNumeros from "../Algoritmos/somaDeNumeros.js";
import chai from "chai";
const expect = chai.expect;


describe('somarNumeros', () => {
    it('deve retornar a soma dos numeros do array', () => {
        const numeros = [1, 2, 3, 4, 5];
        const resultado = somarNumeros(numeros);
        expect(resultado).to.deep.equal(15); // espera que a soma seja igual a 15
    })

     it('retorna numeros negativos', () => {
        const numero = [-1, -2, 3,  4, 5];
        const resultado = somarNumeros(numero);
        expect(resultado).to.deep.equal(9);
     })
});