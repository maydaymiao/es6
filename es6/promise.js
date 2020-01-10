const basic = [
  {
    id: 1,
    name: "Michael",
    age: 30
  },
  {
    id: 2,
    name: "Webber",
    age: 28
  },
  {
    id: 3,
    name: "Jenny",
    age: 35
  }
];

const scores = [
  {
    name: "Michael",
    score: 100
  },
  {
    name: "Webber",
    score: 80
  },
  {
    name: "Jenny",
    score: 90
  }
];

function getBasic(id) {
  return new Promise((resolve, reject) => {
    // setTimeout这里模拟从云端获取数据的延时
    setTimeout(() => {
      let targetObj = basic.find(obj => obj.id == id);
      if (targetObj) {
        resolve(targetObj);
      } else {
        reject(Error("Cannot find that id!"));
      }
    }, 2000);
  });
}

function getScore(o) {
  return new Promise((resolve, reject) => {
    let targetObj = scores.find(obj => obj.name == o.name);
    if (targetObj) {
      resolve(targetObj);
    } else {
      reject(Error("Cannot find that person!"));
    }
  });
}

getBasic(1)
  .then(obj => {
    // 这里要注意加return，否则再传到下一个then会输出undefined
    return getScore(obj);
  })
  .then(obj => {
    console.log(obj.score);
  })
  .catch(err => {
    console.error(err);
  });
