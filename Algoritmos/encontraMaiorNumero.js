function encontrarMaiorNumero(array){
    if(array.length === 0){
        return null; // retorna undefined se o array estiver vazio
    }

    let maior = array[0]; // Assumimos que o primeiro alemento e maior
    
    for(let i = 1; i < array.length; i++){
        if(array[i] > maior){
            maior = array[i]; // Atualzar o valor do maior numero caso encontre um maior
        }
    }

    return maior;
}

export default encontrarMaiorNumero;


/*const numeros = [10,3,5,8,2];
const maiorNumero = encontrarMaiorNumero(numeros);
console.log("o maior numero e:", maiorNumero);*/