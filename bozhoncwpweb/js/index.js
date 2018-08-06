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
        Project:"",//工程配置文件名
        projects: [
            {
                project: 'bozhon',
            },
            {
                project: 'bozhoning',
            }
        ],
    },
    mounted:function(){
       
    },
    methods: {
        changeType:function(event){
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
        boxcheck:false,
        setdata:{
            Project:''
        },
        items: [],
    },
    mounted: function () {
        
    },
    methods: {
        //获取数据
        getbozhonshowtwo: function () {
            this.setdata.Project=bozhonheadpage.Project;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            // localStorage.setItem("Url", ipAddress);
            var _select=this;
            $.ajax({
                url: ipAddress + 'api/GetRobotStatusList',
                type: 'post',
                data:JSON.stringify(_select.setdata),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log(data.DataStamp);
                    if(data.ResponseStatus==0){
                        console.log(data.ResponseInfo);
                    }else{
                        alert(data.ResponseInfo);
                    }
                    if(data.Result==0){
                        console.log(data.ResultInfo);
                    }else{
                        alert(data.ResultInfo);
                    }
                   _select.items=data.RobotStatusList;
                },
                error: function (msg) {
                    alert("机器人列表获取失败");
                }
            })
        },
        //删除
        isDelete:function(){

        },
        //清错
        isClearWorry:function(){

        },
        //清除区域
        isClearArea:function(){
          
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
        pageCode: 1,
        pageNumber: 4,
        boxcheck:false,
        uuidlist:[],
        checkednumber:0,
        setdata:{
            FleetJobID:'',
            Project:'',
        },
        items: [{robot:1,state:2,opcode:3,stamp:4,uuid:5}],
    },
    mounted: function () {
        
    },
    methods: {
        //删除
        isDelete: function (i) {

        },
        //刷新
        isfresh: function (i) {

        },
        //暂停
        isstorp:function(){
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            if(this.checkednumber==1){
                $.ajax({
                    url: ipAddress + 'api/PauseRunningJob',
                    type: 'post',
                    data: JSON.stringify(_select.setdata),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (data) {
                        console.log(data.DataStamp);
                        if (data.ResponseStatus == 0) {
                            console.log(data.ResponseInfo);
                        } else {
                            alert("后台错误" + data.ResponseInfo);
                        }
                        if (data.Result == 0) {
                            console.log(data.ResultInfo);
                        } else {
                            alert("后台错误" + data.ResultInfo);
                        }

                    },
                    error: function (msg) {
                        alert("暂停任务失败");
                    }
                })
            }else if(this.checkednumber==0){
                alert("请选中一个需要暂停的任务");
            }else{
                alert("请不要多选");
            }
        },
        //开始
        isstart:function(){

        },
        //选中事件
        checkedthing:function(item,event){
            if(event.target.checked){
               this.uuidlist.push(item.uuid);
               this.checkednumber++;
            //    console.log(this.uuidlist,this.checkednumber);
            }else{
              var list=new Array();
              for(var i in this.uuidlist){
                  if(this.uuidlist[i]!=item.uuid){
                     list.push(this.uuidlist[i]);
                  }
              }
              this.uuidlist=list;
              this.checkednumber--;
            //   console.log(this.uuidlist,this.checkednumber);
            }
        },
        //获取数据
        getbozhonshowthree: function () {
            this.setdata.Project=bozhonheadpage.Project;
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
                    console.log(data.DataStamp);
                    if(data.ResponseStatus==0){
                        console.log(data.ResponseInfo);
                    }else{
                        alert(data.ResponseInfo);
                    }
                    if(data.Result==0){
                        console.log(data.ResultInfo);
                    }else{
                        alert(data.ResultInfo);
                    }
                    _select.items=data.UndergoingJobsSta;
                },
                error: function (msg) {
                    alert("执行中任务列表获取失败");
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
        boxcheck:false,
        setdata:{
            Project:'',
        },
        items: [],
    },
    mounted: function () {
       
    },
    methods: {
        //获取数据
        getbozhonshowfour: function () {
            this.setdata.Project=bozhonheadpage.Project;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select=this;
            $.ajax({
                url: ipAddress + 'api/GetRemainningJobStatusList',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                contentType:"application/json",
                success: function (data) {
                    console.log(data.DataStamp);
                    if(data.ResponseStatus==0){
                        console.log(data.ResponseInfo);
                    }else{
                        alert(data.ResponseInfo);
                    }
                    if(data.Result==0){
                        console.log(data.ResultInfo);
                    }else{
                        alert(data.ResultInfo);
                    }
                    _select.items=data.RemainningJobsStatusList;
                },
                error: function (msg) {
                    alert("等待中任务列表获取失败");
                }
            })
        },
        //删除
        isDelete:function(){

        },
        //上移
        isup:function(){

        },
        //下移
        isdown:function(){

        },
        //置顶
        istop:function(){

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

