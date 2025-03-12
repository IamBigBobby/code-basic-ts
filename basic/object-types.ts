// https://translate.google.com/?hl=ru&sl=ru&tl=en&text=%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5%20%D1%82%D0%B8%D0%BF%D1%8B&op=translate

function isComplete(course: {name: string, lessons: string[]}): boolean{
    return course.lessons.length >= 4 ? true : false;
}
