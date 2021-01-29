/*
 * @Description: 
 * @Version: 2.0
 * @Autor: fengjiao
 * @Date: 2020-08-15 10:39:36
 * @LastEditors: fengjiao
 * @LastEditTime: 2020-08-30 22:11:29
 */
function prime3(){
    arr = [];
    for(var i=100;i<=999;i++){
        for(var n=2;n<=i;n++){
            if(i%n==0&&i!=n){
                break;
            }
            else if(i==n){
                arr.push(i)
                // document.write(i+" ");
            }
        }
    }
    console.log(arr);
    var arr2=[];
    for (var i = 0; i<=arr.length; i++){
        var a = parseInt(arr[i] % 10); // 个位数
        var b = parseInt((arr[i] % 100) / 10);  // 十位数
        var c = parseInt((arr[i] % 1000) / 100); // 百位数
        // console.log(a,b,c);
        if(a-b == 1 && c-b == 2){
            arr2.push()
        }
        else{
            continue;
        }
    }
    console.log(arr2);
          
}
prime3()


function a() {
    this.b = function () {
        console.log('111')
        return this
    }
    this.c = function () {
        console.log('222')
        return this
    }
    return this
}

a().b().c()



// var test=1;  typeof test=='number';
var test=1.2;typeof test=='float';
// var test=undefined; typeof test=='undefined';
// var test='4399'-0;
console.log(typeof test=='float');





(function(){
    var obj = {
        fun1:() =>{
            console.info(this); // 箭头函数没有自己的this，指向window
        }, 
        fun2:function(){
            console.info(this); 
        }, 
        fun3(){
            console.info(this);
        }
    }
    obj.fun1();
    obj.fun2();
    obj.fun3();
}
)();

// (function(){
//     var a="";
//     console.info(a);
//     console.info(b);
//     {
//         var b = a  ="123";
//         let c =b;
//     }
//     console.info(c);
// }

// )();