// https://code-basics.com/ru/languages/typescript/lessons/type-annotations

function unique(array: (string | number)[]): (string | number)[] {
    const result: (string | number)[] = [];
  
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (array.indexOf(element) === i) {
        result.push(element);
      }
    }
  
    return result;
}
