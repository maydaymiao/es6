// 1. 利用RegExp对象来创建（用的比较少）
var regexp = new RegExp(/123/);

// 2. 利用字面量创建（常用），正则表达式不需要加引号
var rg = /abc/;
// test()用于检测字符串是否符合该规则，返回布尔值
// regexObj.test(str), regexObj为正则表达式，str为要检测的文本
console.log(rg.test("abc")); // true
console.log(rg.test("aabcc")); // true
console.log(rg.test("xyz")); // false

// 边界符：^必须以这个开头，$必须以这个结尾
console.log("---------边界符-----------");
var rg2 = /^abc$/;
console.log(rg2.test("abc")); // true
console.log(rg2.test("aabcc")); // false

// 字符类
console.log("---------字符类-----------");
// 字符类表示有一系列字符可供选择，只要匹配其中一个就可以了
// 所以可供选择的字符都放在方括号里
var rg3 = /[abc]/;
console.log(rg3.test("apple")); // true
console.log(rg3.test("bike")); // true
console.log(rg3.test("xyz")); // false

console.log("---------字符类拼接1-----------");
var rg4 = /^[a-z]$/; // 只允许小写26个英文字母，而且不允许其他字符出现，因为前后都做了边界限定
var rg44 = /^[a-zA-Z0-9_-]$/; // 大小写、数字、下划线和横线都可以，但是还是只能输入其中的一个字符
console.log(rg4.test("r")); // true
console.log(rg4.test(3)); // false
console.log(rg4.test("R")); // false

console.log("---------字符类拼接2-----------");
// 如果^在中括号里面代表取反，表示不能取中括号里的字符
var rg5 = /^[^a-z]$/;
console.log(rg5.test("r")); // false
console.log(rg5.test(3)); // true

console.log("--------量词符-----------");
// *代表可以出现0次或者很多次，+代表可以出现1次或者很多次，?代表可以出现0次或者1次
var rg6 = /^a*$/;
var rg66 = /^a+$/;
var rg666 = /^a?$/;
var rg6666 = /^a{3}$/; // 必须重复3次，其余都是false
// 如果写成/^a{3, }$/, 则a要出现大于等于3次
// 如果写成/^a{3,10}$/, 则a要出现大于等于3次，小于等于10次，中间不能有空格
console.log(rg6.test("")); // true
console.log(rg6.test("a")); // true
console.log(rg6.test("aa")); // true
console.log(rg66.test("")); // false
console.log(rg666.test("aa")); // false
console.log(rg6666.test("aaa")); // true

console.log("--------验证用户名-----------");
var rg7 = /^[a-zA-Z1-9_-]{6,10}$/; // 6-16位包含前面字符
console.log(rg7.test("ab1")); // false
console.log(rg7.test("abcdefg")); // true
console.log(rg7.test("abcd_efg")); // true
console.log(rg7.test("abcd!efg")); // false
