// $.cookie('cookieName','CSRF-TOKEN',{expires: 7, path: '/' ,secure: false});

var bozhonloginpage = new Vue({
    el: '#bozhon-login-page',
    data: {
        username: '',
        password: '',
        setdata: {
            uName: "",
            uPassword: "",
        },
    },
    methods: {
        getlogin: function () {
            document.cookie="cookieName=CSRF-TOKEN";
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdata.uName = this.username;
            this.setdata.uPassword = this.password;
            $.ajax({
                url: localStorage.getItem("Url") + "api/session",
                headers: {
                    headerName: 'X-CSRF-TOKEN'
                },
                type: "get",
                success: function (data) {

                },
                error: function (data) {

                },
            }),
                $.ajax({
                    url: localStorage.getItem("Url") + "api/authenticate",
                    type: "get",
                    headers: {
                        headerName: 'X-CSRF-TOKEN'
                    },
                    success: function (data) {

                    },
                    error: function (data) {

                    },
                }),
                $.ajax({
                    url: localStorage.getItem("Url") + "api/login",
                    type: "post",
                    dataType: "json",
                    headers: {
                        headerName: 'X-CSRF-TOKEN'
                    },
                    data: JSON.stringify(_select.setdata),
                    success: function (data) {
                        // localStorage.setItem("level",data.level);
                        localStorage.setItem("uName", _select.setdata.uName);
                        location.href = "../html/index.html";
                    },
                    error: function (data) {
                        alert("管理员账号或密码错误!");
                    }
                })
        },
    }
})