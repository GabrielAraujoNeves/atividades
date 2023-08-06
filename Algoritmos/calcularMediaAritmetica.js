function calcularMediaAritmetica (array){
    if(array.length === 0){
        return 0; //Evita divisão por zero se array estiver vazio
    }
    const soma = array.reduce((acc, num) => acc + num, 0);
    return soma / array.length;
}

export default calcularMediaAritmetica;

/*const arrayNumeros = [10, 20, 30, 40, 50];
const media = calcularMediaAritmetica(arrayNumeros);
console.log(media);*/
