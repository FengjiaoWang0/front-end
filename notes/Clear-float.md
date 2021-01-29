<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-09-18 12:20:27
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-09-18 14:56:32
-->
# 清除浮动的几种方法

## 方法一
```css
clear:left;  /* 清除left浮动 */
clear:right;  /* 清除right浮动 */
clear:both;  /* 清除左右浮动 */
```

## 方法二
在浮动box 后面添加 一个box 
```css
.box {
    clear:both;
}
```

## 方法三
在父盒子里面添加 overflow:hidden 
```css
.contatiner {
    overflow:hidden;
    zoom:1;
}
```
## 方法四
在父盒子中添加一个class= "clearfix" 空的伪元素来占文档流
```css
.clearfix:after {
    content: '.';
    height:0;
    display:block;
    visibility:hidden;  /* 显示隐藏*/
    clear:both;
}
.clearfix {
    zoom:1;
}
.contatiner {
    /* overflow:hidden; */
    zoom:1; /* 在父盒子也添加这个属性*/
}
```
## 方法五

给父元素固定高度，只适合高度固定的布局

## 方法六

父元素一起浮动，不推荐，会产生新的浮动问题