//页面头部功能实现
var bozhonheadpage = new Vue({
    el: '#bozhon-head-page',
    data: {
        logintxt: '账号',
        displaytxt: 'none',
        username: localStorage.getItem("uName"),
        userlevel: localStorage.getItem("level"),
        jumpshow: true,
        imgsrc: '../images/iconfont-yonghu.png',
        bordertxt: false,
        Project: "",//工程配置文件名
        projects: [
            {
                project: 'bozhon',
            },
            {
                project: 'bozhoning',
            }
        ],
    },
    mounted: function () {

    },
    methods: {
        changeType: function (event) {
            console.log(this.Project);
        },
        headmuneshow: function () {
            if (bozhonheadpage.displaytxt == 'none') {
                bozhonheadpage.displaytxt = 'block';
                bozhonheadpage.bordertxt = true;
            } else {
                bozhonheadpage.displaytxt = 'none';
                bozhonheadpage.bordertxt = false;
            }
        },
        headmunejumpshow: function () {

        },
        headmunejump: function () {
            location.href = '../html/configuration.html';
        },
        headmuneexit: function () {
            localStorage.clear("uName");
            localStorage.clear("level");
            location.href = '../html/login.html';
        }
    }
})
//菜单栏功能实现
var bozhonmunebox = new Vue({
    el: '#bozhon-mune-box',
    data: {
        btntxts: [
            {
                btntxt: '控制台',
                imgsrc: '../images/控制台 (1).png',
            },
            {
                btntxt: '机器人列表',
                imgsrc: '../images/机器人.png',
            },
            {
                btntxt: '执行中任务',
                imgsrc: '../images/执行.png',
            },
            {
                btntxt: '等待中任务',
                imgsrc: '../images/等待中.png',
            }
        ],
        btntxts1: [
            {
                btntxt: '控制台',
                imgsrc: '../images/控制台 (1).png',
            },
            {
                btntxt: '机器人列表',
                imgsrc: '../images/机器人.png',
            },
            {
                btntxt: '执行中任务',
                imgsrc: '../images/执行.png',
            },
            {
                btntxt: '等待中任务',
                imgsrc: '../images/等待中.png',
            }
        ],
        btntxts2: [
            {
                btntxt: '',
                imgsrc: '../images/控制台 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/机器人.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/执行.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/等待中.png',
            }
        ],
        btntxts3: [
            {
                btntxt: '控制台',
                imgsrc: '../images/控制台.png',
            },
            {
                btntxt: '机器人列表',
                imgsrc: '../images/机器人 (1).png',
            },
            {
                btntxt: '执行中任务',
                imgsrc: '../images/执行.png',
            },
            {
                btntxt: '等待中任务',
                imgsrc: '../images/等待中.png',
            }
        ],
        btntxts4: [
            {
                btntxt: '控制台',
                imgsrc: '../images/控制台.png',
            },
            {
                btntxt: '机器人列表',
                imgsrc: '../images/机器人.png',
            },
            {
                btntxt: '执行中任务',
                imgsrc: '../images/执行 (1).png',
            },
            {
                btntxt: '等待中任务',
                imgsrc: '../images/等待中.png',
            }
        ],
        btntxts5: [
            {
                btntxt: '控制台',
                imgsrc: '../images/控制台.png',
            },
            {
                btntxt: '机器人列表',
                imgsrc: '../images/机器人.png',
            },
            {
                btntxt: '执行中任务',
                imgsrc: '../images/执行.png',
            },
            {
                btntxt: '等待中任务',
                imgsrc: '../images/等待中 (1).png',
            }
        ],
        btntxts6: [
            {
                btntxt: '',
                imgsrc: '../images/控制台.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/机器人 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/执行.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/等待中.png',
            }
        ],
        btntxts7: [
            {
                btntxt: '',
                imgsrc: '../images/控制台.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/机器人.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/执行 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/等待中.png',
            }
        ],
        btntxts8: [
            {
                btntxt: '',
                imgsrc: '../images/控制台.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/机器人.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/执行.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/等待中 (1).png',
            }
        ],
        activecolor: 0,
        boxclasstxt: false,
    },
    methods: {
        isshow: function (index) {
            this.activecolor = index;
            if (bozhonmunebox.boxclasstxt == false) {
                if (index == 0) {
                    bozhonshowone.displaystr = 'block';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts1;
                } else if (index == 1) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'block';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts3;
                    bozhonshowtwo.getbozhonshowtwo();

                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonshowfour.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts4;
                    bozhonshowthree.getbozhonshowthree();
                } else if (index == 3) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts5;
                    bozhonshowfour.getbozhonshowfour();
                }
            } else {
                if (index == 0) {
                    bozhonshowone.displaystr = 'block';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts2;
                } else if (index == 1) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'block';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts6;
                    bozhonshowtwo.getbozhonshowtwo();

                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonshowfour.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts7;
                    bozhonshowthree.getbozhonshowthree();
                } else if (index == 3) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts8;
                    bozhonshowfour.getbozhonshowfour();
                }
            }

        },
        munechange: function () {
            if (bozhonmunebox.boxclasstxt == true) {
                bozhonmunebox.boxclasstxt = false;
                $("#bozhon-show-box").removeClass("bozhon-show-boxchange");
                if (bozhonmunebox.activecolor == 0) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts1;
                } else if (bozhonmunebox.activecolor == 1) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts3;
                } else if (bozhonmunebox.activecolor == 2) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts4;
                } else if (bozhonmunebox.activecolor == 3) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts5;
                }

            } else {
                bozhonmunebox.boxclasstxt = true;
                bozhonmunebox.btntxts = bozhonmunebox.btntxts2;
                $("#bozhon-show-box").addClass("bozhon-show-boxchange");
                if (bozhonmunebox.activecolor == 0) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts2;
                } else if (bozhonmunebox.activecolor == 1) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts6;
                } else if (bozhonmunebox.activecolor == 2) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts7;
                } else if (bozhonmunebox.activecolor == 3) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts8;
                }

            }
        }
    }
})

//控制台
var bozhonshowone = new Vue({
    el: '#bozhon-show-one',
    data: {
        message: '1',
        displaystr: 'block',
        imgsrc1: '../images/箭头 (1).png',
        imgsrc2: '../images/箭头 (1).png',
        imgsrc3: '../images/箭头 (1).png',
        index1: '4',
        index2: '5',
        index3: '6',
        lowclasstxt1: true,
        lowclasstxt2: true,
        lowclasstxt3: true,
    },
    methods: {
        //控制台内容的展开与合拢方法
        isshowpart: function (i) {
            if (i == 1) {
                this.imgsrc1 = '../images/箭头 (1).png';
                this.index1 = '4';
                this.lowclasstxt1 = true;
            } else if (i == 2) {
                this.imgsrc2 = '../images/箭头 (1).png';
                this.index2 = '5';
                this.lowclasstxt2 = true;
            } else if (i == 3) {
                this.imgsrc3 = '../images/箭头 (1).png';
                this.index3 = '6';
                this.lowclasstxt3 = true;
            } else if (i == 4) {
                this.imgsrc1 = '../images/箭头.png';
                this.index1 = '1';
                this.lowclasstxt1 = false;
            } else if (i == 5) {
                this.imgsrc2 = '../images/箭头.png';
                this.index2 = '2';
                this.lowclasstxt2 = false;
            } else if (i == 6) {
                this.imgsrc3 = '../images/箭头.png';
                this.index3 = '3';
                this.lowclasstxt3 = false;
            }
        },

    }
})
//机器人列表
var bozhonshowtwo = new Vue({
    el: '#bozhon-show-two',
    data: {
        message: '2',
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: '',
        pageCode: 1,
        pageNumber: 4,
        boxcheck: false,
        uuidlist:[],
        robotlist: {},
        checkednumber: 0,
        btndisabled: true,
        schdisplaytxt: 'none',
        setdatarobot: {
            RobotName: '',
            Project: '',
        },
        setdata: {
            Project: ''
        },
        items: [],
    },
    mounted: function () {

    },
    methods: {
        //获取数据
        getbozhonshowtwo: function () {
            this.schdisplaytxt = "block";
            this.setdata.Project = bozhonheadpage.Project;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            // localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/GetRobotStatusList',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("DataStamp:" + data.DataStamp);
                    console.log("ResponseStatus:" + data.ResponseStatus);
                    console.log("Result:" + data.Result);
                    console.log("ResponseInfo:" + data.ResponseInfo);
                    console.log("ResultInfo:" + data.ResultInfo);
                    _select.schdisplaytxt = "none";
                    _select.items = [];
                    _select.items = data.RobotStatusList;
                },
                error: function (msg) {
                    console.log("机器人列表获取失败");
                    _select.items = [];
                }
            })
        },
        //删除
        isDelete: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber >= 1) {
                for (var i in this.robotlist) {
                    this.setdatarobot.RobotName = this.robotlist[i];
                    this.setdatarobot.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/DeleteRobotJob',
                        type: 'post',
                        data: JSON.stringify(_select.setdatarobot),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("删除任务失败");
                        }
                    })
                }

            } else {
                alert("请选中一个需要删除的任务");
            }
        },
        //清错
        isClearWorry: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber >= 1) {
                for (var i in this.robotlist) {
                    this.setdatarobot.RobotName = this.robotlist[i];
                    this.setdatarobot.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/ClearRobotError',
                        type: 'post',
                        data: JSON.stringify(_select.setdatarobot),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("清除区域任务失败");
                        }
                    })
                }

            } else {
                alert("请选中一个需要清除区域的任务");
            }
        },
        //清除区域
        isClearArea: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber >= 1) {
                for (var i in this.robotlist) {
                    this.setdatarobot.RobotName = this.robotlist[i];
                    this.setdatarobot.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/FreeRobotAccessArea',
                        type: 'post',
                        data: JSON.stringify(_select.setdatarobot),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("清除区域任务失败");
                        }
                    })
                }

            } else {
                alert("请选中一个需要清除区域的任务");
            }
        },
        //选中事件
        checkedthing: function (item, event) {
            this.uuidlist=new Array();
            this.robotlist=new Array();
            if (event.target.checked) {
                this.uuidlist.push(item.uuid);
                this.robotlist.push(item.robot);
                this.checkednumber++;
                if (this.checkednumber >= 1) {
                    this.btndisabled = false;
                }
                console.log(this.uuidlist, this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.uuidlist) {
                    if (this.uuidlist[i] != item.uuid) {
                        list1.push(this.uuidlist[i]);
                    }
                }
                this.uuidlist = list1;
                var list2 = new Array();
                for (var i in this.robotlist) {
                    if (this.robotlist[i] != item.robot) {
                        list2.push(this.robotlist[i]);
                    }
                }
                this.robotlist = list2;
                this.checkednumber--;
                if (this.checkednumber < 1) {
                    this.btndisabled = true;
                }
                console.log(this.uuidlist, this.checkednumber);
            }
        },
        //分页功能
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';
        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
    }
})

//执行中任务
var bozhonshowthree = new Vue({
    el: '#bozhon-show-three',
    data: {
        message: '3',
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: '',
        btndisabled: true,
        pageCode: 1,
        pageNumber: 4,
        boxcheck: false,
        uuidlist: [],
        robotlist: [],
        checkednumber: 0,
        schdisplaytxt: 'none',
        setdatauuid: {
            FleetJobID: '',
            Project: '',
        },
        setdatarobot: {
            RobotName: '',
            Project: '',
        },
        setdata: {
            Project: '',
        },
        items: [],
    },
    mounted: function () {

    },
    methods: {
        //删除
        isDelete: function (i) {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber >= 1) {
                for (var i in this.robotlist) {
                    this.setdatarobot.RobotName = this.robotlist[i];
                    this.setdatarobot.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/DeleteRobotJob',
                        type: 'post',
                        data: JSON.stringify(_select.setdatarobot),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("删除任务失败");
                        }
                    })
                }

            } else {
                alert("请选中一个需要删除的任务");
            }
        },
        //刷新
        isfresh: function (i) {
            this.getbozhonshowthree();
        },
        //暂停
        isstorp: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber >= 1) {
                for (var i in this.uuidlist) {
                    this.setdatauuid.FleetJobID = this.uuidlist[i];
                    this.setdatauuid.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/PauseRunningJob',
                        type: 'post',
                        data: JSON.stringify(_select.setdatauuid),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("暂停任务失败");
                        }
                    })
                }

            } else {
                alert("请选中一个需要暂停的任务");
            }
        },
        //开始
        isstart: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber >= 1) {
                for (var i in this.uuidlist) {
                    this.setdatauuid.FleetJobID = this.uuidlist[i];
                    this.setdatauuid.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/ContinuePausedJob',
                        type: 'post',
                        data: JSON.stringify(_select.setdatauuid),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("继续任务失败");
                        }
                    })
                }

            } else {
                alert("请选中一个需要继续的任务");
            }
        },
        //选中事件
        checkedthing: function (item, event) {
            this.uuidlist=new Array();
            this.robotlist=new Array();
            if (event.target.checked) {
                this.uuidlist.push(item.uuid);
                this.robotlist.push(item.robot);
                this.checkednumber++;
                if (this.checkednumber >= 1) {
                    this.btndisabled = false;
                }
                console.log(this.uuidlist, this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.uuidlist) {
                    if (this.uuidlist[i] != item.uuid) {
                        list1.push(this.uuidlist[i]);
                    }
                }
                this.uuidlist = list1;
                var list2 = new Array();
                for (var i in this.robotlist) {
                    if (this.robotlist[i] != item.robot) {
                        list2.push(this.robotlist[i]);
                    }
                }
                this.robotlist = list2;
                this.checkednumber--;
                if (this.checkednumber < 1) {
                    this.btndisabled = true;
                }
                console.log(this.uuidlist, this.checkednumber);
            }
        },
        //获取数据
        getbozhonshowthree: function () {
            this.schdisplaytxt = 'block';
            this.setdata.Project = bozhonheadpage.Project;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/GetUndergoingJobStatusList',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    _select.schdisplaytxt = "none";
                    console.log("DataStamp:" + data.DataStamp);
                    console.log("ResponseStatus:" + data.ResponseStatus);
                    console.log("Result:" + data.Result);
                    console.log("ResponseInfo:" + data.ResponseInfo);
                    console.log("ResultInfo:" + data.ResultInfo);
                    _select.items = [];
                    _select.items = data.UndergoingJobsSta;
                },
                error: function (msg) {
                    console.log("执行中任务列表获取失败");
                    _select.items = [];
                }
            })
        },
        //分页功能
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';
        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
    }
})
//等待中任务
var bozhonshowfour = new Vue({
    el: '#bozhon-show-four',
    data: {
        message: '4',
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: '',
        pageCode: 1,
        pageNumber: 4,
        boxcheck: false,
        movedisabled: true,
        deletedisabled: true,
        uuidlist: '',
        robotlist: '',
        checkednumber: '',
        schdisplaytxt: 'none',
        setdatauuid: {
            FleetJobID: '',
            Project: '',
        },
        setdatarobot: {
            RobotName: '',
            DeltaQueuePosition: '',
            Project: '',
        },
        setdatarobotone: {
            RobotName: '',
            QueuePosition: '',
            Project: '',
        },
        setdata: {
            Project: '',
        },
        items: [],
    },
    mounted: function () {

    },
    methods: {
        //获取数据
        getbozhonshowfour: function () {
            this.schdisplaytxt = "block";
            this.setdata.Project = bozhonheadpage.Project;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/GetRemainningJobStatusList',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    _select.schdisplaytxt = "none";
                    console.log("DataStamp:" + data.DataStamp);
                    console.log("ResponseStatus:" + data.ResponseStatus);
                    console.log("Result:" + data.Result);
                    console.log("ResponseInfo:" + data.ResponseInfo);
                    console.log("ResultInfo:" + data.ResultInfo);
                    _select.items = [];
                    _select.items = data.RemainningJobsStatusList;
                },
                error: function (msg) {
                    console.log("等待中任务列表获取失败");
                    _select.items = [];
                }
            })
        },
        //删除
        isDelete: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber >= 1) {
                for (var i in this.uuidlist) {
                    this.setdatauuid.FleetJobID = this.uuidlist[i];
                    this.setdatauuid.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/DeleteRemainingJob',
                        type: 'post',
                        data: JSON.stringify(_select.setdatauuid),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("删除任务失败");
                        }
                    })
                }

            } else {
                alert("请选中一个需要删除的任务");
            }
        },
        //上移
        isup: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber == 1) {
                for (var i in this.uuidlist) {
                    this.setdatauuid.FleetJobID = uuidlist[i];
                    this.setdatauuid.DeltaQueuePosition = -1;
                    this.setdatauuid.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/MoveRemainingJobQueuePosition',
                        type: 'post',
                        data: JSON.stringify(_select.setdatauuid),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("上移任务失败");
                        }
                    })
                }

            } else {
                alert("请仅选中一个需要移动的任务");
            }
        },
        //下移
        isdown: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber == 1) {
                for (var i in this.uuidlist) {
                    this.setdatauuid.FleetJobID = uuidlist[i];
                    this.setdatauuid.DeltaQueuePosition = 1;
                    this.setdatauuid.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/MoveRemainingJobQueuePosition',
                        type: 'post',
                        data: JSON.stringify(_select.setdatauuid),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("下移任务失败");
                        }
                    })
                }

            } else {
                alert("请仅选中一个需要移动的任务");
            }
        },
        //置顶
        istop: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if (this.checkednumber == 1) {
                for (var i in this.uuidlist) {
                    this.setdatauuidone.FleetJobID = uuidlist[i];
                    this.setdatauuidone.QueuePosition = 0;
                    this.setdatauuidone.Project = bozhonheadpage.Project;
                    $.ajax({
                        url: ipAddress + 'api/SetRemainingJobQueuePosition',
                        type: 'post',
                        data: JSON.stringify(_select.setdatauuidone),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("DataStamp:" + data.DataStamp);
                            console.log("ResponseStatus:" + data.ResponseStatus);
                            console.log("Result:" + data.Result);
                            console.log("ResponseInfo:" + data.ResponseInfo);
                            console.log("ResultInfo:" + data.ResultInfo);
                            _select.getbozhonshowthree();
                        },
                        error: function (msg) {
                            alert("置顶任务失败");
                        }
                    })
                }

            } else {
                alert("请仅选中一个需要置顶的任务");
            }
        },
        //选中事件
        checkedthing: function (item, event) {
            this.uuidlist=new Array();
            this.robotlist=new Array();
            if (event.target.checked) {
                this.uuidlist.push(item.uuid);
                this.robotlist.push(item.robot);
                this.checkednumber++;
                if (this.checkednumber == 1) {
                    this.movedisabled = false;
                    this.deletedisabled = false;
                } else if (this.checkednumber > 1) {
                    this.movedisabled = true;
                    this.deletedisabled = false;
                }
                //    console.log(this.uuidlist,this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.uuidlist) {
                    if (this.uuidlist[i] != item.uuid) {
                        list1.push(this.uuidlist[i]);
                    }
                }
                this.uuidlist = list1;
                var list2 = new Array();
                for (var i in this.robotlist) {
                    if (this.robotlist[i] != item.robot) {
                        list2.push(this.robotlist[i]);
                    }
                }
                this.robotlist = list2;
                this.checkednumber--;
                if (this.checkednumber > 1) {
                    this.movedisabled = true;
                    this.deletedisabled = false;
                }
                else if (this.checkednumber = 1) {
                    this.movedisabled = false;
                    this.deletedisabled = false;
                } else {
                    this.movedisabled = true;
                    this.deletedisabled = true;
                }
                //   console.log(this.uuidlist,this.checkednumber);
            }
        },
        //分页功能
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';
        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
    }
})
//等待动画
$('#bozhon-show-two-sch').shCircleLoader({
    color: "red",
    dots: 24,
    dotsRadius: 13,
    keyframes:
        "0%   {background: orange;    {prefix}transform: scale(1)}\
        20%  {background: #F8B62B; {prefix}transform: scale(.4)}\
        40%  {background: orange;    {prefix}transform: scale(0)}\
        50%  {background: orange;    {prefix}transform: scale(1)}\
        70%  {background: #F8B62B; {prefix}transform: scale(.4)}\
        90%  {background: orange;    {prefix}transform: scale(0)}\
        100% {background: orange;    {prefix}transform: scale(1)}"
});
$('#bozhon-show-three-sch').shCircleLoader({
    color: "red",
    dots: 24,
    dotsRadius: 13,
    keyframes:
        "0%   {background: orange;    {prefix}transform: scale(1)}\
        20%  {background: #F8B62B; {prefix}transform: scale(.4)}\
        40%  {background: orange;    {prefix}transform: scale(0)}\
        50%  {background: orange;    {prefix}transform: scale(1)}\
        70%  {background: #F8B62B; {prefix}transform: scale(.4)}\
        90%  {background: orange;    {prefix}transform: scale(0)}\
        100% {background: orange;    {prefix}transform: scale(1)}"
});
$('#bozhon-show-four-sch').shCircleLoader({
    color: "red",
    dots: 24,
    dotsRadius: 13,
    keyframes:
        "0%   {background: orange;    {prefix}transform: scale(1)}\
        20%  {background: #F8B62B; {prefix}transform: scale(.4)}\
        40%  {background: orange;    {prefix}transform: scale(0)}\
        50%  {background: orange;    {prefix}transform: scale(1)}\
        70%  {background: #F8B62B; {prefix}transform: scale(.4)}\
        90%  {background: orange;    {prefix}transform: scale(0)}\
        100% {background: orange;    {prefix}transform: scale(1)}"
});