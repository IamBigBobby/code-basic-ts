// https://translate.google.com/?hl=ru&sl=ru&tl=en&text=%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20%D0%BA%D0%B0%D0%BA%20%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B&op=translate

type callbackFilter = (element: number) => boolean;
function filter(array: number[], callback: callbackFilter): number[] {
  const result: number[] = [];
  for(let digit of array){
    if(callback(digit)) {
      result.push(digit);
    }
  }

  return result;
}

