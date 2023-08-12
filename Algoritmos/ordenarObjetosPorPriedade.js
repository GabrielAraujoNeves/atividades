function ordenarObjetosPorPropriedade(arrayDeObjetos, propriedade){
    return arrayDeObjetos.slice().sort((a, b) => a[propriedade] - b[propriedade]);
}

const pessoas = [
    { nome: "Maria", idade: 30},
    {nome: "João", idade: 25},
    {nome: "Ana", idade: 35}
];

/*const pessoasOrdenadasPorIdade = ordenarObjetosPorPropriedade(pessoas, "idade");
console.log(pessoasOrdenadasPorIdade);*/ 