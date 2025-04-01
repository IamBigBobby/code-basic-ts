// https://code-basics.com/ru/languages/typescript/lessons/parameter-properties
  
  class CustomFile4 {
    constructor(private name: string, private size: number) { }
  
    protected toString() {
      return `${this.name} (${this.size} bytes)`;
    }
  }

  const file5 = new CustomFile4('open-world.jpeg', 1000);
console.log(file5); // open-world.jpeg (1000 bytes)