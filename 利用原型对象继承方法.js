function People(name, age) {
  this.name = name;
  this.age = age;
}

People.prototype.info = function() {
  console.log(`My name is ${this.name}, and I am ${this.age}`);
};

function Student(name, age, score) {
  People.call(this, name, age);
  this.score = score;
}

Student.prototype = new People();
Student.prototype.constructor = Student;

let s1 = new Student("Michael", 30, 100);
console.log(Student.prototype);
s1.info();
