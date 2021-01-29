# 回调地狱
## 什么是回调地狱
- 说起回调地狱 首先想到的是**异步** 在js中我们经常会大量使用异步回调，例如使用 **ajax** 请求
我们来看下面这段代码：
```JS
function a(functionb(){
    c(function d(){
    
    })
})
```

我们发现上面代码大量使用了回调函数（将一个函数作为参数传递给另个函数）并且有许多 })结尾的符号，使得代码看起来很混乱。

## 常用解决方法
### 第一种使用ES6中的$\color{red}{Promise}$,中文翻译过来就是$\color{red}{承诺}$,意思是在未来某一个时间点承诺返回数据给你。
- Promise有三种状态：pending/reslove/reject 。pending就是未决，resolve可以理解为成功，reject可以理解为拒绝。
- 同时Promise常用的三种方法 $\color{red}then$ 表示异步成功执行后的数据状态变为reslove $\color{red}catch$ 表示异步失败后执行的数据状态变为reject $\color{red}all$表示把多个没有关系的Promise封装成一个Promise对象使用then返回一个数组数据。
- 下面一起来看看如何使用Promise：
  ```JS
  function f() {
      let promise = new Promise((resolve, reject) => {
          //模拟异步
          setTimeout(()=>{
             resolve('prom')
          },1000)
  
      })
      return promise;
  }

  ```
  Promise 构造函数有两个变量 resolve 用于返回异步执行成功的函数 reject 用于返回异步执行失败的函数。配合then与catch一起使用
- 使用then 获取数据
  ```JS
  function f1() {
    //返回一个Promise用于下一次调用then
     return f().then(data=>{
     // 返回的数据用于下一次then使用
         return data+'ise'
     })
    }
  ```
    使用then方法 获取到上一步resolve返回的数据
- 获取数据
  ```JS
  f1().then(data=>{
     console.log(data)
    })
    console.log("hello world")
  ```
  如果猜的不错，输出应该为 promise
  ```
  hello world
  promise

  process finished with exit code 0
  ```
  输出了promise 说明上面是正确的，并且先输出 hello word 后输出promise 说明Promise是异步执行的

### 生成器$\color{red}Generator$
    > 如果过多的使用 then 也会造成新的执行流程问题，所以生成器在这个时候就登场啦，
- Generator（生成器）是一种有效利用内存的机制，一边循环一边计算生成数值的机制。通过配合Promise可以更加优雅的写异步代码
- 下面我们来试试：
    ```JS
    function f1() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve("hello world")
            })
        })
        return promise;
    } 
    ```
    首先我们先用Promise分装一个异步请求模拟ajax。
- 构建一个生成器函数
    ```JS
    function *f() {
        let x = yield f1();
        console.log("ni hao")
    }	
    ```
    构建生成器非常简单 只需要在函数方法名前面加一个 * 这个函数就是一个生成器函数，可能有人注意到函数体中有一个yield关键字（学过python应该知道），简单点说yield类似return 也是返回值的，区别在于当程序 执行到yield后会返回yield后面的表达式，并且程序暂停在这里保存当前值状态，程序只是暂停在这里并没有中止。

- 获取生成器的值
    ```JS
    var it = f();
        it.next().value.then(data=>{
    console.log(data)
    })
    console.log(123)
    it.next()
    console.log(it.next())
    ```
    使用next()方法可以获取到yield第一次暂停的值返回的是$\color{red}{value: 值 done: true}$ value表示yield返回的值，done表示是否迭代完毕。当然也可以使用netx(10)来给yield设置下次执行的值。
- 输出结果
  ```
  123
  ni hao
  hello world
  ```
  通过结果我们看到生成器也是异步执行。
  
  
### 异步等待$\color{red}async/await$
- 封装异步请求
  ```js
  function f() {
      return new Promise((resolve, reject) => {
           setTimeout(()=>{
             resolve("hello word")
           },1000)
        })
   }
  ```
- 使用异步函数
    ```js
    async function a(){
        var data = await f();
        return data;
    }
    ```
    函数前面加async 表示该函数是一个异步函数 await 表示等待一个异步值的到来，
- 获取值
    ```js
    var a = a()
    a.then(data=>{
        console.log(data)
    })
  ```
  异步函数返回的是一个Promise对象，到这里是不是豁然开朗了，return返回的值通过使用then来进行获取，到这里有人会问这个不是和生成器一样吗只是把* 换成async ，yield缓存await 吗？ 没错确实一样，但是生成器返回的是一个迭代器，而 异步函数返回的是一个Promise，异步函数可以以更加方便的同Promise结合使用来书写同步代码风格的异步执行。

