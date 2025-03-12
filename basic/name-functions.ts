// https://code-basics.com/ru/languages/typescript/lessons/named-functions

function getHiddenCard(cardNumber: string, countStars = 4): string {
    let lastNumbers = cardNumber.slice(-4);
    return `${'*'.repeat(countStars)}${lastNumbers}`;
}
