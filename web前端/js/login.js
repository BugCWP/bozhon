var host=location.hostname;
var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
localStorage.setItem("Url", ipAddress);
var bozhonloginpage =new Vue({
    el:'#bozhon-login-page',
    data:{
        username:'',
        password:'',
    },
    methods:{
        getlogin:function(){
            var name=this.username;
            var psd=this.password;
            $.ajax({
                url:localStorage.getItem("Url")+"api/login",
                type:"post",
                dataType:"json",
                data:{
                    username:name,
                    password:psd,
                },
                success:function(data){
                    localStorage.setItem("level",data);
                    localStorage.setItem("uName",name);
                    location.href="../html/index.html";
                },
                error:function(data){
                    alert("管理员账号或密码错误!");
                }
            })
        }
    }
})