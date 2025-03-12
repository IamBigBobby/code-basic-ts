// https://code-basics.com/ru/languages/typescript/lessons/any

function getParams(request: string): any {
    const initial: any = {};
  
    const result = request.split('&').reduce((acc, part) => {
      const splitPart = part.split('=');
      acc[splitPart[0]] = splitPart[1];
      return acc;
    }, initial)
  
    return result;
}

