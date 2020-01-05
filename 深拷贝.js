let obj = {
  id: 1,
  name: "michael",
  msg: {
    age: 30
  },
  color: ["blue", "green"]
};

let o = {};

function deepCopy(newobj, oldobj) {
  for (let i in oldobj) {
    // 要把Array的判断写在Object的前面，否则数组也会被判断成是对象
    if (oldobj[i] instanceof Array) {
      newobj[i] = [];
      deepCopy(newobj[i], oldobj[i]);
    } else if (oldobj[i] instanceof Object) {
      // 这里一定要定义一下newobj[i]为一个空对象，否则下一轮循环newobj[i]程序会认为他是undefined，把一个对象赋值给undefined，会报错
      newobj[i] = {};
      deepCopy(newobj[i], oldobj[i]);
    } else {
      newobj[i] = oldobj[i];
    }
  }
}

deepCopy(o, obj);
// 新对象不会被更改
obj.msg.age = 18;
console.log(o);
