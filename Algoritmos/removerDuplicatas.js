function removerDuplicadas(arr){
    const uniqueSet = new Set(arr);

    return Array.from(uniqueSet);
}

/*const arraComDuplicatas = [1, 2, 2, 3, 3, 4, 5, 5];
const arraySemDuplicatas = removerDuplicadas(arraComDuplicatas);
console.log(arraySemDuplicatas);*/