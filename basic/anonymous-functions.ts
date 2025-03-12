// https://code-basics.com/ru/languages/typescript/lessons/anonymous-functions

const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

const findOdd = (digit: number):boolean => digit % 2 === 0;
function getEvenNumbers(){
  const arrEvenNumbers = numbers.filter(findOdd);
  return arrEvenNumbers;
}