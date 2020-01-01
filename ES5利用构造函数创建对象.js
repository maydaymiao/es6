// 构造函数存在内存浪费的问题。比如下面的info方法，每创建一个对象，都会在内存里开辟一个新空间来创建这个info

function Student(name, age) {
  this.name = name;
  this.age = age;
  //   this.info = function() {
  //     console.log(`I am ${this.name}, and I am ${this.age}`);
  //   };
}

// 一般情况下，公共属性定义到构造函数里，公共的方法放到原型对象上
// 如果共有方法多了，一个个定义会很麻烦，所以我们用对象来对prototype进行设置
// Student.prototype.info = function() {
//   console.log(`I am ${this.name}, and I am ${this.age}`);
// };
//  如果我们修改了原来的原型对象，给原型对象赋值的是一个对象，则必须手动利用constructor指回原来的构造函数
Student.prototype = {
  constructor: Student,
  info: function() {
    console.log(`I am ${this.name}, and I am ${this.age}`);
  },
  study: function() {
    console.log("我在学习");
  },
  eat: function() {
    console.log("我在吃饭");
  }
};

let s1 = new Student("Michael", 30);
s1.info();

// 静态成员，在构造函数本身添加的成员，只能通过构造函数来访问(不能通过对象来访问)
Student.teacher = "Jenny";
// console.log(Student.teacher);
// 对象身上系统自动添加一个__proto__指向我们的构造函数的原型对象Student.prototype
// 下面两个都有一个共同的constructor属性，指向构造函数本身
// console.log(s1.__proto__ === Student.prototype); // true
console.log(s1.__proto__);
console.log(s1.__proto__.constructor);
s1.study();
