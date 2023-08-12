import verificarAnagrama from "../Algoritmos/verificarAnagrama.js";
import chai from "chai";
const expect = chai.expect;

describe("Verificar Anagrama", () => {
    it("Verifica  se 'listen' e 'silent' são anagramas", () => {
       const str1 = 'listen';
       const str2 = 'silent';
       const resultado = verificarAnagrama(str1, str2);
       expect(resultado).to.deep.equal(true);    
    });

    it("Verifica se 'hello' e 'world' não são anagramas", () => {
      const str1 = "hello";
      const str2 = "world";
      const resultado = verificarAnagrama(str1, str2);
      expect(resultado).to.deep.equal(false);
    });
});