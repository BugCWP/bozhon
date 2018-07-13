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
            $.post("",{"username":name,"password":psd},function(data){
                
            })
        }
    }
})