<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-06-28 18:22:30
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-08-27 16:38:56
--> 
# 前端解决跨域问题

## JSONP：

原理是：动态插入script标签，通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入。

由于同源策略的限制，XmlHttpRequest只允许请求当前源（域名、协议、端口）的资源，为了实现跨域请求，可以通过script标签实现跨域请求，然后在服务端输出JSON数据并执行回调函数，从而解决了跨域的数据请求。

优点是兼容性好，简单易用，支持浏览器与服务器双向通信。缺点是只支持GET请求。

JSONP：json+padding（内填充），顾名思义，就是把JSON填充到一个盒子里
```html
<script>

    functioncreateJs(sUrl){

    var oScript =document.createElement('script');

    oScript.type = 'text/javascript';

    oScript.src= sUrl;

    document.getElementsByTagName('head')[0].appendChild(oScript);

    }

    createJs('jsonp.js');

    box({

    'name': 'test'

    });

    functionbox(json){

    alert(json.name);

    }

</script>
```

Jquery ajax:
```js
    $.ajax({
        url: 'http://localhost:8080',
        type:'get',
        dataType:'jsonp',
        jsonpCallback:'handleCallback', //自定义回调函数
        data:{},
    })
 
```
Vue.js:
```js
    this.$http.jsonp('http://localhost:8080/test',{
        params:{},
        jsonp:'handleCallback'
    }).then((res)=>{
        console.log(res);
    })
```
## CORS：

服务器端对于CORS的支持，主要就是通过设置Access-Control-Allow-Origin来进行的。如果浏览器检测到相应的设置，就可以允许Ajax进行跨域的访问。

通过修改document.domain来跨子域

将子域和主域的document.domain设为同一个主域.前提条件：这两个域名必须属于同一个基础域名!而且所用的协议，端口都要一致，否则无法利用document.domain进行跨域

主域相同的使用document.domain

使用window.name来进行跨域

window对象有个name属性，该属性有个特征：即在一个窗口(window)的生命周期内,窗口载入的所有的页面都是共享一个window.name的，每个页面对window.name都有读写的权限，window.name是持久存在一个窗口载入过的所有页面中的

使用HTML5中新引进的window.postMessage方法来跨域传送数据

还有flash、在服务器上设置代理页面等跨域方式。个人认为window.name的方法既不复杂，也能兼容到几乎所有浏览器，这真是极好的一种跨域方法。


## 通过nginx 正向代理

- 在nginx.conf 配置文件中添加如下配置
```
server {
        listen       80;
        server_name  www.123.com;

        location / {
            proxy_pass http://127.0.0.1:8080;
            index  index.html index.htm index.jsp;
        }
    }
```

如上配置，我们监听80端口，访问域名为www.123.com，不加端口号时默认为80端口，故访问该域名时会跳转到127.0.0.1:8080路径上。

## 相关链接
- 解决跨域的9种方法 https://segmentfault.com/a/1190000011145364
1. 通过jsonp 跨域 （只能实现Get 一种请求）
2. doucument.domain + iframe 跨域 （ 仅限主域相同，子域不同的xxx/a.html xxx/b.html）
3. location.hash + iframe  (通过中间页来实现，不同域之间利用iframe的location.hash 传值)
4. window.name + iframe （）
5. postMessage 跨域
6. 跨域资源共享（CORS）
7. nginx 代理跨域
8. nodejs 中间件代理跨域
9. WebSocket 协议跨域