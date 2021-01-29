# uni-app this.xxx is not a function
在methods 中一般会使用函数调用，开始我还查询了一下关于Vue 如何调用自己的methods 中的函数 

```JS
export default {
  data() {
    return {
      hello:"你好"
    }
  },
  methods:{
    open(that) {
      that.hello = "hello world!"
    },
    close() {
      this.$options.methods.open(this)
    }
  }
}
```

> 但是此方法在这里并不适用

- 还是找了其他的方法，这是一个关于全局变量与局部变量的问题
## 解决方法
 在函数前面添加一句：
 ```
 var that = this;
 ```

 > 把全局this 替换成that 既可以调用到函数，解决问题