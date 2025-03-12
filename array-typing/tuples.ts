// https://code-basics.com/ru/languages/typescript/lessons/tuples

type Point = [number, number, number];

function isTheSamePoint(p1: Point, p2: Point): boolean {
  for (let i = 0; i < p1.length; i++) {
    if (p1[i] !== p2[i]) return false;
  }

  return true;
}
