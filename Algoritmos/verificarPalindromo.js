function verificarPalindromo(str){

    str = str.replace(/\s/g, "").toLowerCase();
    
    for(let i = 0; i < Math.floor(str.length / 2); i++){
      if(str[i] !== str[str.length - 1 - i]){
        return false;
      }
    }
    return true;
}

export default verificarPalindromo;
//console.log(verificarPalindromo("hello"));