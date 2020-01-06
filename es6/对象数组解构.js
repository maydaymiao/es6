const Michael = {
    name: 'Michael Miao',
    age: 30,
    favorite: {
        color: 'blue',
        team: 'MU',
        car: 'BMW'
    }
}

// 对象解构
const {
    name,
    age
} = Michael

// 重命名
const {
    color: c,
    team: t,
    car,
    person = 'son' //设置默认值，如果不传参（注意不传参意味着是undefined，只有undefined才会打印默认值，否则如null,0等还是会打印传过来的参数），则打印默认值
} = Michael.favorite;

console.log(name);
console.log(age);
console.log(c);
console.log(t);
console.log(car);
console.log(person) // 输出son

console.log('============数组解构===============')
let languages = ['Java', 'Python', 'JS', 'PHP', 'C++'];
const [one, two, ...others] = languages;
console.log(one); //Java
console.log(two); //Python
console.log(others); //[ 'JS', 'PHP', 'C++' ]

console.log('============交换值===============')
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a); // 20
console.log(b); //10