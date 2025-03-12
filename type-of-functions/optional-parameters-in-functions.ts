// https://code-basics.com/ru/languages/typescript/lessons/optional-parameters-in-callbacks

type TMapCallback = (n: number, index: number) => number;

function map(array: number[], callback: TMapCallback): number[] {
  const result: number[] = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i));
  }

  return result;
}
