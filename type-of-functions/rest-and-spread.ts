// https://code-basics.com/ru/languages/typescript/lessons/rest-spread

function max(firstNumber: number, ...otherNumbers: number[]): number {
    return Math.max(firstNumber, ...otherNumbers);
}
