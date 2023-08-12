function verificarAnagrama(str1, str2) {

    const stri1 = str1.replace(/\s/g, '').toLowerCase();
    const stri2 = str2.replace(/\s/g, '').toLowerCase();
  
    
    if (stri1.length !== stri2.length) {
      return false;
    }
  

    const charCount1 = {};
    const charCount2 = {};
  

    for (let char of stri1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }
  
    for (let char of stri2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }
  
    for (let char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }
  
    return true;
  }

export default verificarAnagrama;
  
  /*
  console.log(verificarAnagrama("listen", "silent"));  
  */