/*
 * @Description: 罗马数字转换器
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-07-23 16:45:19
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-07-23 17:14:30
 */ 

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
