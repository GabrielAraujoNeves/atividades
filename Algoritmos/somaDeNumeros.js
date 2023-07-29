function somarNumeros(arr){
     //verifica se o argumento passado e um array e se o array nao esta vazio
    if(Array.isArray(arr) && arr.length === 0){
        return 0
    }

    const soma = arr.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    
    return soma;
}


export default somarNumeros;

/*const numeros = [1,2,3,4,5];

const resultado = somarNumeros(numeros);

console.log(resultado);*/