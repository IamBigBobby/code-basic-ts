// https://code-basics.com/ru/languages/typescript/lessons/assignability

type Form = {
    age: {
      value: number,
      validator: (val: number) => boolean
    },
    name: {
      value: string,
      validator: (val: string) => boolean
    }
  };
  
  const form: Form = {
    age: {
      value: 30,
      validator: () => false
    },
    name: {
      value: "Denis",
      validator: () => true
    }
  };

  