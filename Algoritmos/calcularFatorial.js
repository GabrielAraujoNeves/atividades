function calcularFatorial(n){
    if (n === 0 && n === 1){
        return 1;
    }

    let resultado = 1
    for(let i = 2; i <= n; i++){
        resultado *= i;
    }    

    return resultado;
}

const resultado = calcularFatorial(5);
console.log(resultado);