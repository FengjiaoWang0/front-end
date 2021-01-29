/*
 * @Description: 字符串回文检查，排除特殊字符
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-07-23 11:51:46
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-07-23 20:24:30
 */ 

// 字符串回文检查，排除特殊字符
function palindrome(str) {
    // Good luck!
    console.log("正在计算回文");
    str = str.toLowerCase(); //全部转化成小写
    str = str.replace(/[- _,.():\/|]/g,"")
    console.log(str)
    let newStr = "";
    for(let len = str.length, i = len - 1; i >= 0 ; i--) {
        newStr += str[i]
        // console.log(str[i]);
      }
    console.log(newStr)
    return newStr === str;
  }
  
  // console.log(palindrome("five|\_/|four"));




  function telephoneCheck(str) {
    // Good luck!
    str = str.replace(/[- ()]/g,"")

    console.log(isNaN(123) );
    return true;
  }
  
  telephoneCheck("555-555-5555");