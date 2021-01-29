

function person(){
    var person = {
        firstName: "John", // 这个是注释
        lastName : "Doe",
        id : 5566,
        fullName : function() 
        {
           return this.firstName + " " + this.lastName;
        }
    };
    document.getElementById("demo1").innerHTML = "不加括号输出函数表达式："  + person.fullName;
    document.getElementById("demo2").innerHTML = "加括号输出函数执行结果："  +  person.fullName();
}
