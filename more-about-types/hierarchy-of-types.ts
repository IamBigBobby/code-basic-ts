// https://translate.google.com/?hl=ru&sl=ru&tl=en&text=%D0%98%D0%B5%D1%80%D0%B0%D1%80%D1%85%D0%B8%D1%8F%20%D1%82%D0%B8%D0%BF%D0%BE%D0%B2&op=translate

type User = {
    id: number,
    name: string,
    age: number,
  };
  
  type Friends = [number, number];
  
  export type UserResponse = {
    users: User[],
    friends: Friends[]
  };
  
  // BEGIN (write your solution here)
  function getUserFriends(dataString: string, userId: number): User[] | [] {
    const parseData: UserResponse = JSON.parse(dataString);
  
    const friendsList: Friends[] = parseData.friends.filter((friendsArr) =>
      friendsArr.some(id => id === userId)
    );
  
    const arrId: number[] = [];
  
    friendsList.forEach((arr) => {
      arr.forEach((elementArr) => {
        arrId.push(elementArr);
      })
    })
  
    const usersArr: User[] = [...new Set(arrId)].reduce<User[]>((acc, id) => {
      const user = parseData.users.find(user => user.id === id);
      if (user) {
        acc.push(user)
      };
      return acc;
    }, []);
  
    return usersArr.filter((users) => users.id !== userId);
}

const userJson = JSON.stringify(<UserResponse>{
    users: [
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Mary', age: 21 },
      { id: 3, name: 'Peter', age: 22 },
      { id: 4, name: 'Ann', age: 23 },
    ],
    friends: [
      [1, 2],
      [1, 3],
      [3, 2],
    ],
  });

  const friends = getUserFriends(userJson, 10);
  console.log(friends);
  // END