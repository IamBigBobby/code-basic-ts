// https://code-basics.com/ru/languages/typescript/lessons/class-as-types
interface NewFile {
    name: string,
    size: number
}


class CustomFile2 {
    public name: string;
    public size: number;
    private isCopy: boolean;

    constructor(newfile: NewFile | CustomFile2) {
        if (newfile instanceof CustomFile2) {
            this.isCopy = true;
            this.name = newfile.name;
            this.size = newfile.size;
        } else {
            this.isCopy = false;
            this.name = newfile.name;
            this.size = newfile.size;
        }
    }

    toString(): string {
        return `${this.isCopy ? "(copy) " : ""}${this.name} (${this.size} bytes)`;
    }
}


const file2 = new CustomFile2({ name: 'foo.txt', size: 4000 });
console.log(file2.toString()); 

const file3 = new CustomFile2(file2);
console.log(file3.toString());

const file4 = new CustomFile2(file3);
console.log(file4.toString());
