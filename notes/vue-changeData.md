# Vue 报错TypeError: this.$set is not a function 的解决方法
>  Vue 改变data里面的值，同时渲染数据 
> 其实是很小的一个问题，主要了解其中的原理，不然很久都排查不出来！我觉得第一个方法比较方便

## 报错场景： 调用函数时，处理成功返回的数据
```js
uni.chooseImage({
					sizeType: ['original', 'compressed'],  // 选择后压缩图片
					count: 1,
					sourceType: ['album'],
					success:function(res){
						console.log('临时图片为：'+JSON.stringify(res.tempFilePaths[0]));	
						this.tempPath = res.tempFilePaths[0];
						console.log('获取最新data的路径：'+this.tempPath);
						// this.$forceUpdate();					
					},					
				})
```

## 报错原因
- 这里的this指向的不是VueModel

## 解决方法
### 方法一：
- 将。siccess改为箭头函数的写法，这样子箭头函数里的this其实是指向VueModel的，这样子用this看不会报错了

```js
success:(res)=>{
						console.log('临时图片为：'+JSON.stringify(res.tempFilePaths[0]));	
						this.tempPath = res.tempFilePaths[0];
						console.log('获取最新data的路径：'+this.tempPath);
						// this.$forceUpdate();					
					},					
				})
```

### 方法二：
- 在执行函数中定义指向Model的变量 let vm = this ,用该变量替代this
```js
methods: {
			changeImg: function (){
                let vm = this

				console.log('获取data 之前的的路径：'+this.tempPath);
				uni.chooseImage({
					sizeType: ['original', 'compressed'],  // 选择后压缩图片
					count: 1,
					sourceType: ['album'],
					success:function(res)  {
						vm.tempPath = res.tempFilePaths[0];
					
					},					
				})
			}
```