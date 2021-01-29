# uni-app textarea 字数限制

## 查资料
- 最开始在论坛和百度上面查阅很多解决方案，但是其实应该认真的看官方文档就可以了
- W3school 关于“textarea” 的标签 ‘maxlength’是不限字数的，但是在ubi-app上的字数就是被截断了

## 查看 uni-app 组件文档
- 文档地址： https://www.nli.cn/read/uniapp-component/149733.html
- 可以看到uni-app 中 “maxlength” 是有一个默认值 140 最大输入长度，设置为 -1 的时候不限制最大长度。
> 这个参数不是在CSS里面设置的，而是直接在页面属性中设置

代码如下：
```HTML
	<textarea maxlength="-1" class="input" placeholder="请输入需要分析的文章" bindblur="bindTextAreaBlur" :value="artIndex" @blur="getInput"></textarea>

```
 