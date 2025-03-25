// https://code-basics.com/ru/languages/typescript/lessons/class-

type TypeFile = {
    name: string;
    size: number;
}

class CustomFile{
    name: string;
    size: number;

    constructor(file: TypeFile){
        this.name = file.name;
        this.size = file.size;
    }
    
    toString(): string {
        return `${this.name} (${this.size} bytes)`;
    }
}

const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString()); 
