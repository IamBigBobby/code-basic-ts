// https://code-basics.com/ru/languages/typescript/lessons/function-overloads

function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(arg1: string | number, arg2?: string): string {
  if (typeof arg1 === "string") {
    return `Hi ${arg1}! Happy New Year!`;
  }
  return `Hi ${arg2}! Happy New Year ${arg1}!`;
}
