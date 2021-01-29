<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-10-28 15:33:08
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-10-28 15:51:41
-->
# NaN 与任何值都不相等，包括它本身

非常硬气的一个 特殊值，我之前也踩过这个坑，所以把它记下来，，，
## 定义
```
NaN 属性用于引用特殊的非数字值。
```

MDN 里面这样描述：
```
The global NaN property is a value representing Not-A-Number.
```
意思是是说：NaN是一个放在 global（浏览器里是window）对象里的一个value，而且是一个代表Not-A-Number的value.
> NaN是一个 value, 这个 value 的 type 是 number。

> 但是跟普通的type是number的value不一样的是，NaN 代表 ‘Not a number’ 这一意义。
## 用法
```JS

console.log(Number("123"))  // 123
console.log(Number("abc"))  // NaN

console.log(isNaN("abc"))  // true
console.log(isNaN("123"))  // false

if(Number(num)==NaN){
　　alert('num不是有效数字!');
　}


if(isNaN(num)){
　　//=>检测是否为有效数字，只有这一种方案
　　alert('num不是有效数字!')
}
```
## 小结

NaN和谁都不相等（即使num确实不是有效数字，转换的结果确实是NaN，但是NaN!=NaN的）

因为NaN 是:Not a number (不是一个数字的缩写)
既然不是一个数字 那么很好理解 'A'不是一个数字 ,'B'也不是一个数字

那么既然他们两个都不是数字 , 所以'A' == 'B'吗? 条件肯定不成立


