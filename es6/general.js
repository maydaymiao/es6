console.log("--------箭头函数的this----------");

var obj = {
  age: 30,
  say1: function() {
    console.log(this.age);
  },
  say2: () => {
    console.log(this.age);
  }
};

obj.say1();
// 因为箭头函数不绑定this关键字，箭头函数中的this，指向的是函数定义位置的上下文this
// 但是obj是一个对象，对象不产生作用于，因此在这个箭头函数里，this指向的是window
obj.say2(); // undefined

console.log("--------剩余参数----------");

let sum = (...args) => {
  let result = 0;
  args.forEach(element => {
    result += element;
  });
  return result;
};

console.log(sum(1, 2));
console.log(sum(1, 2, 3));

let names = ["张三", "李四", "王五"];
let [n1, ...n2] = names;
console.log(n1); //张三
console.log(n2); //[ '李四', '王五' ]

console.log("--------默认值----------");
function multiply(a = 5, b = 3) {
  return a * b;
}

console.log(multiply(2)); // 6
console.log(multiply(undefined, 2)); //10, 如果不是最后一个参数省略，则一定要加undefined
