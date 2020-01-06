// 传统for循环写起来比较繁琐
// for...each不能break和return
// for...in遍历的是key值，可以遍历对象和数组
// for...of用法和for...in一样，不过遍历的是value值，可以遍历数组，但是不能遍历普通对象

const colors = ['blue', 'green', 'yellow', 'black'];

for (let element of colors) {
    console.log(element) // 只打印数组的value
}

console.log("==========index和value都获取===========")
// 用到数组解构
for (let [key, value] of colors.entries()) {
    console.log(`${key} ${value}`)
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
    console.log(total)
}

sum(1, 2, 3, 4) //正确输出

console.log("==========字符串循环===========")
let name = "Michael";
for (let char of name) {
    console.log(char)
}