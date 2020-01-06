// 传统for循环写起来比较繁琐
// for...each不能break和return
// for...in遍历的是key值，可以遍历对象和数组
// for...of用法和for...in一样，不过遍历的是value值，可以遍历数组，但是不能遍历普通对象

const colors = ["blue", "green", "yellow", "black"];

for (let element of colors) {
  console.log(element); // 只打印数组的value
}

console.log("==========index和value都获取===========");
// 用到数组解构
for (let [key, value] of colors.entries()) {
  console.log(`${key} ${value}`);
}
// 0 blue
// 1 green
// 2 yellow
// 3 black

function sum(...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  console.log(total);
}

sum(1, 2, 3, 4); //正确输出

console.log("==========字符串循环===========");
let name = "Michael";
for (let char of name) {
  console.log(char);
}

console.log("==========数组的find方法===========");
// find()方法返回数组中符合测试函数条件的第一个元素。否则返回undefined
const inventory = [
  { name: "apples", quanitity: 2 },
  { name: "bananas", quanitity: 0 },
  { name: "cherries", quanitity: 5 }
];

const bananas = inventory.find(element => element.name == "bananas"); // callback里返回的是布尔值
console.log(bananas); //{ name: 'bananas', quanitity: 4 }

const bananasIndex = inventory.findIndex(element => element.name == "bananas");
console.log(bananasIndex); //1

console.log("==========some方法===========");
// 至少有一个满足条件
const isEnough = inventory.some(element => element.quanitity > 0);
console.log(isEnough); // true

console.log("==========every===========");
// 所有满足条件
const allEnough = inventory.every(element => element.quanitity > 0);
console.log(allEnough); // false
