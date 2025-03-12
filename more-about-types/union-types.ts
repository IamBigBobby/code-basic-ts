// https://code-basics.com/ru/languages/typescript/lessons/union-types

function lastIndex(word: string, char: string): number | null {
    const result: number = word.split('').lastIndexOf(char);
  
    return result === -1 ? null : result;
}
