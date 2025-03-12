// https://code-basics.com/ru/languages/typescript/lessons/intersection-types

enum Permission {
    READ,
    WRITE,
    DELETE,
  }
  
  type UserApp = {
    login: string,
  };
  
  type AdminPermission = {
    permission: Permission,
  };
  
  // BEGIN (write your solution here)
  type Admin = UserApp & AdminPermission;
  
  function addAdmin(person: UserApp): Admin {
    return {
      login: person.login,
      permission: Permission.READ
    }
  }
  // END
  