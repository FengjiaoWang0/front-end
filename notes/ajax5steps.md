<!--
 * @Description: Ajax 5 steps
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-11-19 10:47:57
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-11-19 10:59:50
-->
```js
//第一步，创建XMLHttpRequest对象
var xmlHttp = new XMLHttpRequest();
function CommentAll() {
    //第二步，注册回调函数
    xmlHttp.onreadystatechange =callback1;
    //{
    //    if (xmlHttp.readyState == 4)
    //        if (xmlHttp.status == 200) {
    //            var responseText = xmlHttp.responseText;

    //        }
    //}
    //第三步，配置请求信息，open(),get
    //get请求下参数加在url后，.ashx?methodName = GetAllComment&str1=str1&str2=str2
    xmlHttp.open("post", "/ashx/myzhuye/Detail.ashx?methodName=GetAllComment", true);

    //post请求下需要配置请求头信息
    //xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    //第四步，发送请求,post请求下，要传递的参数放这
    xmlHttp.send("methodName = GetAllComment&str1=str1&str2=str2");//"

}
//第五步，创建回调函数
function callback1() {
    if (xmlHttp.readyState == 4)
        if (xmlHttp.status == 200) {
            //取得返回的数据
            var data = xmlHttp.responseText;
            //json字符串转为json格式
            data = eval(data);
            $.each(data,
                function(i, v) {
                    alert(v);
                });       
        }
}



//后台方法
 private  void GetAllComment(HttpContext context)
        {

            //Params可以取得get与post方式传递过来的值。
            string methodName = context.Request.Params["methodName"];

            //QueryString只能取得get方式传递过来的值。
            string str1 = context.Request.Form["str1"];

            //取得httpRequest传来的值，包括get与post方式
            string str2 = context.Request["str2"];

            List<string> comments = new List<string>();

            comments.Add(methodName);

            comments.Add(str1);

            comments.Add(str2);


            //ajax接受的是json类型，需要把返回的数据转给json格式
            string commentsJson = new JavaScriptSerializer().Serialize(comments);
            context.Response.Write(commentsJson);
        }

```