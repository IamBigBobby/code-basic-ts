// https://code-basics.com/ru/languages/typescript/lessons/multi-dimensional-arrays

function getField(weidt: number): null[][]{
    const rows: null[] = [];
    const field: null[][] = [];
  
    for (let i = 0; i < weidt; i++){
      rows.push(null);
    }
  
    for (let i = 0; i < weidt; i++) {
      field.push(rows);
    }
  
    return field;
}

