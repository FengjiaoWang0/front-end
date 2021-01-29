<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-12-14 16:48:57
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-12-14 17:40:09
-->
# 垂直水平居中
1. 容器宽度自适应，没有指定宽度，内容撑开
   - 1.1 内联元素，不能设置宽高，内容撑开
      * 多行文字水平居中
        ```css
        display: inline;
        padding: 0 20px;
        ```
      * 容器水平垂直居中(**通用**)
        ```css
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        ```
      * 父容器使用flex 布局，使子容器垂直水平居中（**通用，但是要考虑兼容性**）
        ```css
        display:flex;
        justify-content:center;
        align-items:center;
        ```
   - 1.2 内联块级元素，不能设置宽高，内容撑开
        * 多行文字水平居中
        ```css
        display: inline-block;
        padding: 30px 20px;
        ```
    - 1.3 块级元素居中，不能设置宽高
        * 多行文字水平居中
        ```css
        display: block;
        text-align: center;
        padding: 30px 0;
        ```

2. 指定容器宽高
   - 内联块元素 水平垂直居中（单行文字）
    ```css
    display:inline-block;
    width: 300px;
    height:100px;
    line-height:100px;
    text-align:center;
    ```
    - 内联块元素 水平垂直居中（单行文字）
    ```css
    display:inline-block;
    width: 300px;
    height:100px;
    position:absolute;
    left:50%;
    top:50%;
    margin-left:-150px;
    margin-top:-50px;
    ```
    - 块元素水平居中，可以使用拔河效应
    ```css
    margin:0 auto;
    ```
   