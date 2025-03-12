// https://code-basics.com/ru/languages/typescript/lessons/readonly-arrays

function reverse(array: readonly number[]): number[] {
    const reverseArr: number[] = [];
    for (let i = array.length - 1; i >= 0; i--){
      reverseArr.push(array[i]);
    }
  
    return reverseArr;
}
