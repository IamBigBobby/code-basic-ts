// https://code-basics.com/ru/languages/typescript/lessons/members-visibility

type CustomFileOptions = {
    name: string;
    size: number;
  };
  
  class CustomFile3 {
    private name: string;
  
    private size: number;
  
    constructor(options: CustomFileOptions) {
      this.name = options.name;
      this.size = options.size;
    }
  
    protected toString() {
      return `${this.name} (${this.size} bytes)`;
    }
  }

  class ImageCustomFile extends CustomFile3 {
    private width: number;
    private hight: number;

    constructor(options: CustomFileOptions & { width: number; height: number }) {
        super(options);

        this.width = options.width;
        this.hight = options.height;
    }

    public toString(): string {
        return `${super.toString()} ${this.width}x${this.hight}`;
    }
  }

  const imageCustomFile = new ImageCustomFile({
    name: 'image.png',
    size: 100,
    width: 200,
    height: 300,
  });
  console.log(imageCustomFile.toString()); // image.png (100 bytes) 200x300