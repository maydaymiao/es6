var data = [
  {
    id: 1,
    name: "手机",
    goods: [
      {
        id: 11,
        gname: "小米"
      },
      {
        id: 12,
        gname: "华为"
      }
    ]
  },
  {
    id: 2,
    name: "平板"
  }
];

// 输入id号，返回数据对象
function getID(json, idName) {
  let obj = {};
  json.forEach(element => {
    if (element.id == idName) {
      obj = element;
      // 我们想要得到里层的数据，可以利用递归
      // 这里恰好有forEach循环，所以递归不用退出条件，因为循环完毕自动退出
    } else if (element.goods) {
      obj = getID(element.goods, idName);
    }
  });
  return obj;
}

let obj = getID(data, 11);
console.log(obj);
