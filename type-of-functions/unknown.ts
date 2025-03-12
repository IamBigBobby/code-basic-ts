// https://code-basics.com/ru/languages/typescript/lessons/unknown

function isPlainObject(value: unknown): boolean {
    return typeof value === "object" && !Array.isArray(value);
}
