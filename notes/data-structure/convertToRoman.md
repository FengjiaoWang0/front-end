<!--
 * @Description: 罗马数字转换器
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-07-23 19:39:20
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-07-23 19:42:42
--> 

# 罗马数字转换器
把传入的数字转变为罗马数字。

转换后的罗马数字字母必须都是大写。


罗马数字使用了7种符号，其中每个符号对应的阿拉伯数字为：I - 1、V - 5、X - 10、L - 50、C - 100、D - 500、M - 1000，其它罗马数字均有这7种符号组合而成。
```js

function convertToRoman(num) {
    var ans = "";
    var k = Math.floor(num / 1000); //Math.floor()向下取整
    var h = Math.floor((num % 1000) / 100);
    var t = Math.floor((num % 100) / 10);
    var o = num % 10;
    console.log(k,h,t,o)
    var one = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var ten = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var hundred = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    var thousand = 'M';
    for (var i = 0; i < k; i++) {
        ans += thousand;
    }
    if (h)
        ans += hundred[h - 1];
    if (t)
        ans += ten[t - 1];
    if (o)
        ans += one[o - 1];
    console.log(ans)
    return ans;
}

convertToRoman(3399);
```