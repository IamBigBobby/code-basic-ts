// https://code-basics.com/ru/languages/typescript/lessons/destructuring

type TLessons = {lessons: number[]};
function lessonsCount(course: TLessons): number {
  return course.lessons.length;
}
