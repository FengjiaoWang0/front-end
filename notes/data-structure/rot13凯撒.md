<!--
 * @Description: 解码ROT13 凯撒密码
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-07-23 19:16:00
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-07-23 19:21:42
--> 
# 解码ROT13 凯撒密码


- 移位密码也就是密码中的字母会按照指定的数量来做移位。

- 一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔ 'O'，以此类推。

- 写一个ROT13函数，实现输入加密字符串，输出解密字符串。

- 所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，跳过它们。

(两种方法)

- 方法一
```js
function rot13(str) { // LBH QVQ VG!
    // 请把你的代码写在这里
    var newstr = [];
    for(var i =0 ;i<str.length;++i){
      if(str.charCodeAt(i)<65||str.charCodeAt(i)>90){
        newstr.push(str[i]);
      }else if(str.charCodeAt(i)<=77){
        newstr.push(String.fromCharCode(str.charCodeAt(i)+13));
      }else{
        newstr.push(String.fromCharCode(str.charCodeAt(i)-13));
      }
  }
  return newstr.join('');
}
 
rot13("SERR PBQR PNZC"); 
```
---------------
- 方法二
  直接使用字符串拼接（个人觉得这个方法简单一点）
```js
//   A~Z 的编码是65～90
function rot13(str) { 
    str = str.toUpperCase(); //全部转化成大写
    // console.log('A'.charCodeAt()); 
    // console.log(String.fromCharCode(65+13));
    console.log(str);
    let newStr = "";
    for(var i = 0; i < str.length; i++){
        if(str.charCodeAt(i)<65||str.charCodeAt(i)>90){
            newStr += str[i];
        }else if(str.charCodeAt(i)<=77){
            newStr += String.fromCharCode(str.charCodeAt(i)+13);
        }else{
            newStr += String.fromCharCode(str.charCodeAt(i)-13);
        }

    }

    console.log(newStr);
    return newStr;
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR pnzc");
  rot13("SERR CVMMN!");
  rot13("FREE LOVE?");
  ```