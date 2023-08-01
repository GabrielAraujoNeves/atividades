function ordenarArray (){
    let n = array.length;
    let troca;

    do{
        troca = false;

        for(let i = 0; i < n - 1; i++){
          if(array[i] > array[i + 1]){
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          troca = true;
          }
        }
    }while(troca);

    return array;
}

const array = [5, 2, 9, 1, 5];
const arrayOrdenado = ordenarArray(array);

console.log(arrayOrdenado);