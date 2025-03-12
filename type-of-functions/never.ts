// https://code-basics.com/ru/languages/typescript/lessons/never

function fail(): never {
    throw new Error('Opps')
}