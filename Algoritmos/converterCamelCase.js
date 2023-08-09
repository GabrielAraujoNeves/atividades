function converterCamelCase(snakeCase) {
    const words = snakeCase.split('_');
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return camelCaseWords.join('');
  }
  
  const snakeCaseString = "hello_world_in_js";
  const camelCaseString = converterCamelCase(snakeCaseString);
  console.log(camelCaseString);