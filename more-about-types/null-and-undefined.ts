// https://code-basics.com/ru/languages/typescript/lessons/nullable

function formatPrice(price?: number | null): string {
    if (price === null || price === undefined) return '$0.00';
  
    return `$${price.toFixed(2)}`
}

