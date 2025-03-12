// https://code-basics.com/ru/languages/typescript/lessons/arrays

function filterAnagrams(key: string, arr: string[]): string[] {
    const sortKey: string = key.split('').sort().join('');
  
    const result: string[] = [];
    for (let word of arr) {
      const sortWord = word.split('').sort().join('');
      if (sortKey === sortWord) {
        if (sortWord === sortKey)
          result.push(word)
      }
    }
  
    return result
}
