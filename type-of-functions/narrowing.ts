// https://code-basics.com/ru/languages/typescript/lessons/type-narrowing

function last(value: number | string): string | number {
    return typeof value === "string" ? value.split('').pop() || '' : Number(value.toString().split('').pop()) || '';
}

