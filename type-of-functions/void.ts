// https://code-basics.com/ru/languages/typescript/lessons/void

type TVoidCallback = (digit: number, index: number) => number;

function forEach(array: number[], callback:TVoidCallback): void {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i);
  }
}

