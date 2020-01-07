const arr1 = ['a', 'b', 'c']
const arr2 = ['x', 'y', 'z']


console.log("==========合并数组ES5方法============")
const arr3 = arr1.concat(arr2);
console.log(arr3) //[ 'a', 'b', 'c', 'x', 'y', 'z' ]

console.log("==========合并数组ES6方法============")
const arr4 = [...arr1, ...arr2];
console.log(arr4) //[ 'a', 'b', 'c', 'x', 'y', 'z' ]
arr1.push(...arr2); //如果push的是单纯的arr2，则会把arr2这个数组push进去
console.log(arr1) //[ 'a', 'b', 'c', 'x', 'y', 'z' ]