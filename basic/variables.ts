// https://code-basics.com/ru/languages/typescript/lessons/variables

function repeat(text: string, count: number) {
    let result: string = '';
  
    for(let i = 0; i < count; i++) {
      result += text;
    }
  
    return result;
}