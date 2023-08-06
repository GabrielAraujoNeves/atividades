import calcularMediaAritmetica from "../Algoritmos/calcularMediaAritmetica.js";
import chai from "chai";
const expect = chai.expect;


describe("calcular Media Aritmetica", () => {
    it("Deve calcular corretamente a media aritmetica para um arrry não vazio", () => {
        const arrayNumeros = [10, 20, 30, 40, 50];
        const media = calcularMediaAritmetica(arrayNumeros);
        expect(media).to.deep.equal(30);
    })
})