const basic = [
  {
    name: "Michael",
    age: 30
  },
  {
    name: "Webber",
    age: 28
  },
  {
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

function getInfo(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 我一开始用forEach，但是除了第一个数据ok，要查询其他行数据就不ok（返回Reject）
      // 原因是forEach会每一个都循环并直接输出
      let obj = basic.find(obj => obj.name == name);
      if (obj) {
        resolve(obj);
      } else {
        reject(Error("Cannot find the user!"));
      }
    }, 2000);
  });
}

function getScore(name) {
  return new Promise((resolve, reject) => {
    let obj = scores.find(obj => obj.name == name);
    if (obj) {
      resolve(obj);
    } else {
      reject(Error("Cannot get the score"));
    }
  });
}

getInfo("Jenny")
  .then(ele => {
    return getScore(ele);
  })
  .then(ele => {
    console.log(ele);
  });
