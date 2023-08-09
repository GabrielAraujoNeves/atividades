import converterCamelCase from "../Algoritmos/converterCamelCase.js";
import chai from "chai";
const expect = chai.expect;

describe("snake_case e retorna string", () => {
    it("retorna string", () => {
        const string = "hello_world_in_js";
        const resultado = converterCamelCase(string);
        expect(resultado).to.deep.equal("helloWorldInJs")
    })
})