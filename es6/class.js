class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`My name is ${this.name}, and I am ${this.age}`);
  }

  static description() {
    console.log("这是一个静态函数，只能由类名直接调用");
  }

  //   这里函数名和变量名不能一样
  set score(value) {
    this.value = value;
  }

  get score() {
    return this.value;
  }
}

class Primary extends Student {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  attendClass() {
    console.log(
      `My name is ${this.name}, and I am ${this.age}, and I like ${this.course}`
    );
  }
}

let s1 = new Student("Michael", 30);
s1.info();
Student.description();
s1.score = 100;
console.log(s1.score);

let p1 = new Primary("Webber", 20, "语文");
p1.attendClass();
