/* eslint-disable @typescript-eslint/no-namespace */

// https://code-basics.com/ru/languages/typescript/lessons/modules

// BEGIN (write your solution here)
namespace Company {
    export function isEmployeeEmail(email: string, companyDomain: string): boolean{
      return email.endsWith(companyDomain) ? true : false;
    }
  }
  // END
  
  type UserModule = {
    email: string
  };
  
  function authorize(user: UserModule | null): boolean {
    const companyDomain = 'hexlet.io';
  
    const email = user?.email ?? '';
  
    return Company.isEmployeeEmail(email, companyDomain);
}

