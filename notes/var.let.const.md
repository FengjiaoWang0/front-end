<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-07-03 17:13:35
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-07-03 18:23:44
--> 

# var let const 的区别[ES6]
## 简单概述
1. var定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
2. let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
3. const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。
```html
<script type="text/javascript">
    // 块作用域
    {
        var a = 1;
        let b = 2;
        const c = 3;
        // c = 4; // 报错
        var aa;
        let bb;
        // const cc; // 报错
        console.log(a); // 1
        console.log(b); // 2
        console.log(c); // 3
        console.log(aa); // undefined
        console.log(bb); // undefined
    }
    console.log(a); // 1
    // console.log(b); // 报错
    // console.log(c); // 报错
 
    // 函数作用域
    (function A() {
        var d = 5;
        let e = 6;
        const f = 7;
        console.log(d); // 5
        console.log(e); // 6  
        console.log(f); // 7 
 
    })();
    // console.log(d); // 报错
    // console.log(e); // 报错
    // console.log(f); // 报错
</script>

```
## 块级作用域{}
   - ES5 中作用域有：全局作用域、函数作用域。没有块作用域的概念。

    - ES6 中新增了块级作用域。块作用域由 { } 包括，if语句和 for语句里面的{ }也属于块作用域。
  ```html
    <script type="text/javascript">
	
        {
            var a = 1;
            console.log(a); // 1
        }
        console.log(a); // 1
        // 通过var定义的变量可以跨块作用域访问到。
    
        (function A() {
            var b = 2;
            console.log(b); // 2
        })();
        // console.log(b); // 报错，
        // 可见，通过var定义的变量不能跨函数作用域访问到
    
        if(true) {
            var c = 3;
        }
        console.log(c); // 3
        for(var i = 0; i < 4; i ++) {
            var d = 5;
        };
        console.log(i); // 4   (循环结束i已经是4，所以此处i为4)
        console.log(d); // 5
        // if语句和for语句中用var定义的变量可以在外面访问到，
        // 可见，if语句和for语句属于块作用域，不属于函数作用域。
 
    </script>

  ```

## const 定义的对象属性不可改变 ?
先来看一下代码：
```js
const person = {
    name: 'Yonah',
    job: 'web development'
}
person.name = 'fengjiao'
console.log(person.name)
```
- 运行上述代码，没报错？ person对象的name属性确实被修改了, Why ?

因为对象是引用类型的，person中保存的仅是对象的指针，这就意味着，const仅保证指针不发生改变，修改对象的属性不会改变对象的指针，所以是被允许的。也就是说const定义的引用类型只要指针不发生改变，其他的不论如何改变都是允许的。

- 如果让person 指向一个新对象，果然会**报错**

```js
const person = {
    name: 'Yonah',
    job: 'web development'
}
 
 person = {
    name: 'fengjiao',
    job: 'web development'
}
```
