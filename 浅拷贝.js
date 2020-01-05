let obj = {
  id: 1,
  name: "michael",
  msg: {
    age: 30
  }
};

// 浅拷贝 - 传统方法
let o = {};
for (let k in obj) {
  o[k] = obj[k];
}

// 这样赋值会把o里面的age也改了，因为msg的value在这里是一个对象，这样赋值等于把这个对象的地址拷贝过去了，所以是浅拷贝
obj.msg.age = 18;
console.log(o);

// es6新增浅拷贝方法: Object.assign(target, sources)
console.log("---------------");
let o2 = {};
Object.assign(o2, obj);
console.log(o2);
