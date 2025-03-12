// https://translate.google.com/?hl=ru&sl=ru&tl=en&text=%D0%9F%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D0%BD%D0%B8%D0%BC%D1%8B%20%D1%82%D0%B8%D0%BF%D0%BE%D0%B2&op=translate

type User = {
    name: string,
    age: number,
  }
  
  function getOlderUser(user1: User, user2: User): User | null {
    if (user1.age === user2.age) return null;
    return user1.age > user2.age ? user1 : user2;
}

