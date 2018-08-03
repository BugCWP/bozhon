// $.cookie('cookieName','CSRF-TOKEN',{expires: 7, path: '/' ,secure: false});

var bozhonloginpage = new Vue({
    el: '#bozhon-login-page',
    data: {
        username: '',
        password: '',
        user: {
            uName: "",
            uPassword: "",
        },
    },
    methods: {
        getlogin: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.user.uName = this.username;
            this.user.uPassword = this.password;
            $.ajax({
                url: localStorage.getItem("Url") + "api/session",
                type: "get",
                contentType: "application/json",
                success: function (data) {

                },
                error: function (data) {

                },
            }),
                $.ajax({
                    url: localStorage.getItem("Url") + "api/authenticate",
                    type: "get",
                    contentType: "application/json",
                    success: function (data) {

                    },
                    error: function (data) {

                    },
                }),
                $.ajax({
                    url: localStorage.getItem("Url") + "api/login",
                    // url: "http://localhost:8080/bzdiamond-server/api/login",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(_select.user),
                    success: function (data) {
                        localStorage.setItem("level",data.level);
                        localStorage.setItem("uName", _select.user.uName);
                        location.href = "../html/index.html";
                    },
                    error: function (data) {
                        console.log(localStorage.getItem("Url") + "api/login");
                        console.log( JSON.stringify(_select.user));
                        console.log(data.responseText);
                        alert("管理员账号或密码错误!");
                    }
                })
        },
    }
})