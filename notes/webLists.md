<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-07-05 08:43:48
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-07-28 12:05:56
--> 

# Web 前端开发必备知识点概览
##  HTML&CSS：
- [X] 浏览器内核
- [X] 盒模型、flex布局、两/三栏布局、水平/垂直居中；
- [] BFC、清除浮动；
- [] css3动画、H5新特性。
- [] Bootstrap

## JavaScript：

- [] 继承、原型链（prototype,constructor）、设计模式、
- [X] call, apply, bind,this指向；$\color{green}{Completed}$
- [] new实现、防抖节流、
- [X] let, var, const 区别(ES6) $\color{green}{Completed}$
- [] 暂时时性死区、event、loop；
- [] ES6 Generator
- [X] promise使用及实现、promise并行执行和顺序执行； [promise](https://www.cnblogs.com/guoyeqiang/p/8243838.html)
- [] async/await的优缺点；
- [] 闭包、垃圾回收和内存泄漏、数组方法、数组乱序
- [] 数组扁平化、事件委托、事件监听、事件模型
- [X] Sass/Less [Scss/Less]((https://www.cnblogs.com/chenguangliang/p/9540518.html))
- [] webpack 包打包工具

## Vue:

- [] vue数据双向绑定原理；
- [] vue computed原理、computed和watch的区别；
- [] vue编译器结构图、生命周期、vue组件通信；
- [] mvvm模式、mvc模式理解；
- [] vue dom diff、vuex、vue-router


## 网络：

- [] HTTP1, HTTP2, HTTPS、常见的http状态码；
- [] 浏览从输入网址到回车发生了什么；
- [] 前端安全（CSRF、XSS）
- [] 前端跨域、浏览器缓存、cookie, session, - - [] token, localstorage, sessionstorage；
- [] TCP连接(三次握手, 四次挥手)
- [X] cookie, session 和 token [token随机字符串](https://blog.csdn.net/Y_Rachel/article/details/91378059)

## 性能相关

- [] 图片优化的方式
- [] 500 张图片，如何实现预加载优化
- [] 懒加载具体实现
- [] 减少http请求的方式
- [] webpack如何配置大型项目


## JS 知识点题目
下面进入正题：
1. 介绍一下js的数据类型有哪些,值是如何存储的
2. && 、 ||和!! 运算符分别能做什么 
3. JS的数据类型的转换
4. JS中数据类型的判断（ typeof，instanceof，constructor，Object.prototype.toString.call() 
5. 介绍 JS 有哪些内置对象？
6. undefined 与 undeclared 的区别？
7. null 和 undefined 的区别？
8. {}和[]的valueOf和toString的结果是什么？
9. Javascript 的作用域和作用域链？
10. javascript 创建对象的几种方式？
11. JavaScript 继承的几种实现方式？
12. 寄生式组合继承的实现？
13. 谈谈你对this、call、apply和bind的理解
14. JavaScript 原型，原型链？ 有什么特点？
15. js 获取原型的方法？
16. 什么是闭包，为什么要用它？
17. 什么是 DOM 和 BOM？
18. 三种事件模型是什么？
19. 事件委托是什么？
20. 什么是事件传播?
21. 什么是事件捕获？
22. 什么是事件冒泡?
23. DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？
24. js数组和对象有哪些原生方法,列举一下
25. 常用的正则表达式
26. Ajax 是什么? 如何创建一个 Ajax？
27. js 延迟加载的方式有哪些？
28. 谈谈你对模块化开发的理解？
29. js 的几种模块规范？
30. AMD和CMD 规范的区别？
31. ES6 模块与 CommonJS 模块、AMD、CMD 的差异。
32.   requireJS的核心原理是什么？
33. 谈谈JS的运行机制
34. arguments 的对象是什么？
35. 为什么在调用这个函数时，代码中的b会变成一个全局变量?
36.简单介绍一下V8引擎的垃圾回收机制
37. 哪些操作会造成内存泄漏？
38. ECMAScript 是什么？
39. ECMAScript 2015（ES6）有哪些新特性？
40. var,let和const的区别是什么？
41. 什么是箭头函数？
42. 什么是类？
43. 什么是模板字符串？
44. 什么是对象解构？
45 什么是Set对象，它是如何工作的？
46. 什么是Proxy？   
~~··················分割线·····················~~
1.  写一个通用的事件侦听器函数，为什么要用它？
2.  什么是函数式编程? JavaScript的哪些特性使其成为函数式语言的候选语言？
3.  什么是高阶函数？
4.  为什么函数被称为一等公民？
5.  手动实现Array.prototype.map 方法
6.  手动实现Array.prototype.filter方法
7.  手动实现Array.prototype.reduce方法
8.  js的深浅拷贝
9.  手写call、apply及bind函数
10. 函数柯里化的实现
11. js模拟new操作符的实现
12. 什么是回调函数？回调函数有什么缺点
13. Promise是什么，可以手写实现一下吗？
14. Iterator是什么，有什么作用？
15. Generator函数是什么，有什么作用？
16. 什么是 async/await及其如何工作,有什么优缺点？
17. instanceof的原理是什么，如何实现
18. js的节流与防抖
19. 什么是设计模式？
20. 9种前端常见的设计模式








## 参考连接
- 链接：https://juejin.im/post/5ef8377f6fb9a07e693a6061
来源：掘金
- 2019 JS 面试必看 https://www.jianshu.com/p/f1f39d5b2a2e
- ES6 常用语法总结 https://www.jianshu.com/p/b7eb2c3e95bc
