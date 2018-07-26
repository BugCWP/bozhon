var bozhonheadpage = new Vue({
    el: '#bozhon-head-page',
    data: {
        logintxt: '账号',
        displaytxt: 'none',
        username: localStorage.getItem('uName'),
        jumpshow: true,
        imgsrc: '../images/iconfont-yonghu.png',
        userlevel: localStorage.getItem("level"),
        bordertxt: false,
        projects: [
            {
                project: 'bozhon',
            },
            {
                project: 'bozhoning',
            }
        ],
    },
    methods: {
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
            location.href = "../html/index.html";
        },
        headmuneexit: function () {
            localStorage.clear('uName');
            localStorage.clear('level');
            location.href = "../html/login.html";
        }
    }
})

var bozhonmunebox = new Vue({
    el: '#bozhon-mune-box',
    data: {
        btntxts: [
            {
                btntxt: '用户管理',
                imgsrc: '../images/用户群 (1).png',
            },
            {
                btntxt: '项目管理',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '更新事件',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '地区管理',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '配置管理',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '目标管理',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts1: [
            {
                btntxt: '用户管理',
                imgsrc: '../images/用户群 (1).png',
            },
            {
                btntxt: '项目管理',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '更新事件',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '地区管理',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '配置管理',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '目标管理',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts2: [
            {
                btntxt: '用户管理',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '项目管理',
                imgsrc: '../images/项目管理.png',
            },
            {
                btntxt: '更新事件',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '地区管理',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '配置管理',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '目标管理',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts3: [
            {
                btntxt: '用户管理',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '项目管理',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '更新事件',
                imgsrc: '../images/事件配置.png',
            }, {
                btntxt: '地区管理',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '配置管理',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '目标管理',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts11: [
            {
                btntxt: '用户管理',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '项目管理',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '更新事件',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '地区管理',
                imgsrc: '../images/地区.png',
            },
            {
                btntxt: '配置管理',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '目标管理',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts22: [
            {
                btntxt: '用户管理',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '项目管理',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '更新事件',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '地区管理',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '配置管理',
                imgsrc: '../images/配置.png',
            },
            {
                btntxt: '目标管理',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts33: [
            {
                btntxt: '用户管理',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '项目管理',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '更新事件',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '地区管理',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '配置管理',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '目标管理',
                imgsrc: '../images/目标页面列表.png',
            },
        ],
        btntxts4: [
            {
                btntxt: '',
                imgsrc: '../images/用户群 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts5: [
            {
                btntxt: '',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/项目管理.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts6: [
            {
                btntxt: '',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/事件配置.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts44: [
            {
                btntxt: '',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/地区.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts55: [
            {
                btntxt: '',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/配置.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/目标页面列表 (1).png',
            },
        ],
        btntxts66: [
            {
                btntxt: '',
                imgsrc: '../images/用户群.png',
            },
            {
                btntxt: '',
                imgsrc: '../images/项目管理 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/事件配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/地区 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/配置 (1).png',
            },
            {
                btntxt: '',
                imgsrc: '../images/目标页面列表.png',
            },
        ],
        activecolor: 0,
        boxclasstxt: false,
        heightsize: 100,
        secondmuneonetxt: false,
        secondmunetwotxt: false,
        secondmunethreetxt: false,
        cityname: '国家',
        firstcity: '一级城市',
        secondcity: '二级城市',
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
                    bozhonshowfive.displaystr = 'none';
                    bozhonshowsix.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts1;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                } else if (index == 1) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'block';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'none';
                    bozhonshowsix.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts2;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'none';
                    bozhonshowsix.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts3;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                } else if (index == 3) {
                    if (this.heightsize == 3) {
                        this.heightsize = 100;
                    } else {
                        this.heightsize = 3;
                    }
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts11;
                }
                else if (index == 4) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'block';
                    bozhonshowsix.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts22;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                } else if (index == 5) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'none';
                    bozhonshowsix.displaystr = 'block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts33;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                }
            } else {
                if (index == 0) {
                    bozhonshowone.displaystr = 'block';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'none';
                    bozhonshowsix.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts4;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                } else if (index == 1) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'block';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'none';
                    bozhonshowsix.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts5;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'none';
                    bozhonshowsix.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts6;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                } else if (index == 3) {
                    if (this.heightsize == 3) {
                        this.heightsize = 100;
                    } else {
                        this.heightsize = 3;
                    }
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts44;

                }
                else if (index == 4) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'block';
                    bozhonshowsix.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts55;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                } else if (index == 5) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'none';
                    bozhonshowfive.displaystr = 'none';
                    bozhonshowsix.displaystr = 'block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts66;
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                }
            }

        },
        munechange: function () {
            if (bozhonmunebox.boxclasstxt == true) {
                bozhonmunebox.boxclasstxt = false;
                $("#bozhon-show-box").removeClass("bozhon-show-boxchange");
                this.cityname = '国家';
                this.firstcity = '一级城市';
                this.secondcity = '二级城市';
                if (bozhonmunebox.activecolor == 0) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts1;
                } else if (bozhonmunebox.activecolor == 1) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts2;
                } else if (bozhonmunebox.activecolor == 2) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts3;
                } else if (bozhonmunebox.activecolor == 3) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts11;
                } else if (bozhonmunebox.activecolor == 4) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts22;
                } else if (bozhonmunebox.activecolor == 5) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts33;
                }
            } else {
                bozhonmunebox.boxclasstxt = true;
                bozhonmunebox.btntxts = bozhonmunebox.btntxts2;
                $("#bozhon-show-box").addClass("bozhon-show-boxchange");
                this.cityname = '';
                this.firstcity = '';
                this.secondcity = '';
                if (bozhonmunebox.activecolor == 0) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts4;
                } else if (bozhonmunebox.activecolor == 1) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts5;
                } else if (bozhonmunebox.activecolor == 2) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts6;
                } else if (bozhonmunebox.activecolor == 3) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts44;
                } else if (bozhonmunebox.activecolor == 4) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts55;
                } else if (bozhonmunebox.activecolor == 5) {
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts66;
                }
            }
        },
        secondmunechange: function () {

        },
        issecondshow: function (index) {
            this.activecolor = 3;
            bozhonshowone.displaystr = 'none';
            bozhonshowtwo.displaystr = 'none';
            bozhonshowthree.displaystr = 'none';
            bozhonshowfour.displaystr = 'block';
            bozhonshowfive.displaystr = 'none';
            bozhonshowsix.displaystr = 'none';
            if (bozhonmunebox.boxclasstxt == false) {
                bozhonmunebox.btntxts = bozhonmunebox.btntxts11;
                if (index == 1) {
                    this.secondmuneonetxt = true;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                    bozhonshowfour.citylevel = '国家';
                } else if (index == 2) {
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = true;
                    this.secondmunethreetxt = false;
                    bozhonshowfour.citylevel = '一级城市';
                } else if (index == 3) {
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = true;
                    bozhonshowfour.citylevel = '二级城市';
                }
            } else {
                bozhonmunebox.btntxts = bozhonmunebox.btntxts44;
                if (index == 1) {
                    this.secondmuneonetxt = true;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                    bozhonshowfour.citylevel = '国家';
                } else if (index == 2) {
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = true;
                    this.secondmunethreetxt = false;
                    bozhonshowfour.citylevel = '一级城市';
                } else if (index == 3) {
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = true;
                    bozhonshowfour.citylevel = '二级城市';
                }
            }
        }
    },
})

var bozhonshowone = new Vue({
    el: '#bozhon-show-one',
    data: {
        displaystr: 'block',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pageNumber: '',
        listnumber: 0,
        uname: '',
        boxcheck: false,
        setdata: {
            page: '',
            size: '',
            uName: '',
        },
        items: [],
    },
    mounted: function () {
        this.setdata.page = this.pageCode;
        this.setdata.size = this.pagesize;
        this.setdata.uName = this.uname;
        this.getbozhonshowone();
        this.pageNumber = this.listnumber / this.pagesize;
    },
    methods: {
        //取用户管理表
        getbozhonshowone: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/getUsersByPage',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                succsess: function (json) {
                    if ("0" == json.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.totalItems;
                    }

                },
                error: function (data) {

                }
            })
        },
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
            this.pageCode = 1;
            this.getbozhonshowone();
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';
        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
            if (this.pageCode > 1) {
                this.pageCode = this.pageCode - 1;
                this.getbozhonshowone();
            }
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
            if (this.pageCode < this.pageNumber) {
                this.pageCode = this.pageCode + 1;
                this.getbozhonshowone();
            }
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
            this.pageCode = this.pageNumber;
            this.getbozhonshowone();
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
    }
})

var bozhonshowtwo = new Vue({
    el: '#bozhon-show-two',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pageNumber: 0,
        listnumber: '',
        boxcheck: false,
        projectname: '',//项目名称
        items: [],
        selectnumber: 0,
        setdata: {
            page: '',
            size: '',
            projectName: '',
        },
        id: [],
    },
    mounted: function () {
        this.setdata.page = this.pageCode;
        this.setdata.size = this.pagesize;
        this.setdata.projectName = this.projectname;
        this.getbozhonshowtwo();
        this.pageNumber = this.listnumber / this.pagesize;
    },
    methods: {
        getbozhonshowtwo: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/listProjectByPage',
                type: 'post',
                data: JSON.stringify(this.setdata),
                dataType: "json",
                succsess: function (json) {
                    if ("0" == json.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.totalItems;
                    }

                },
                error: function (data) {

                }
            })
        },
        deletebozhonshowtwo: function () {
            let checkDom = this.$refs.table2.getElementsByClassName("selBtn");
            let idArray = [];
            this.selectnumber = 0;
            for (var i = 0; i < checkDom.length; i++) {
                if (checkDom[i].checked) {
                    idArray.push(checkDom[i].dataset.id);
                    this.selectnumber++;
                }
            }
            this.id = idArray;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            if (this.selectnumber > 0) {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/delProjects',
                    type: 'post',
                    data: JSON.stringify(this.id),
                    dataType: "json",
                    succsess: function (json) {
                        this.getbozhonshowtwo();
                    },
                    error: function (msg) {
                        console.log(msg);
                    }
                })
            } else {
                alert("请选中要删除的数据");
            }

        },
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
            this.pageCode = 1;
            this.getbozhonshowtwo();
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';

        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
            if (this.pageCode > 1) {
                this.pageCode--;
                this.getbozhonshowtwo();
            }
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
            if (this.pageCode < this.pageNumber) {
                this.pageCode++;
                this.getbozhonshowtwo();
            }
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
            this.pageCode = this.pageNumber;
            this.getbozhonshowtwo();
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
        openaddpage: function () {
            bozhonshowtwoadd.displaystr = 'block';
        },
        openupdatepage: function () {
            let checkDom = this.$refs.table2.getElementsByClassName("selBtn");
            let idArray = [];
            this.selectnumber = 0;
            for (var i = 0; i < checkDom.length; i++) {
                if (checkDom[i].checked) {
                    idArray.push(checkDom[i].dataset.id);
                    this.selectnumber++;
                }
            }
            if (this.selectnumber == 1) {
                bozhonshowtwoupdate.displaystr = 'block';
            } else {
                alert("请选择一项要修改的数据");
            }
        }
    }
})

var bozhonshowthree = new Vue({
    el: '#bozhon-show-three',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pageNumber: 4,
        projectname: '',
        boxcheck: false,
        listnumber: '',
        items: [],
        setdata: {
            page: '',
            size: '',
            projectName: '',
        },
    },
    mounted: function () {
        this.setdata.page = this.pageCode;
        this.setdata.size = this.pagesize;
        this.setdata.projectName = this.projectname;
        this.getbozhonshowthree();
        this.pageNumber = this.listnumber / this.pagesize;
    },
    methods: {
        getbozhonshowthree: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/getUpdateEventByPage',
                type: 'post',
                data: JSON.stringify(this.setdata),
                dataType: "json",
                succsess: function (json) {
                    if ("0" == json.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.totalItems;
                    }

                },
                error: function (data) {

                }
            })
        },
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
            this.pageCode = 1;
            this.getbozhonshowthree();
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';
        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
            if (this.pageCode > 1) {
                this.pageCode--;
                this.getbozhonshowthree();
            }
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
            if (this.pageCode < 1) {
                this.pageCode++;
                this.getbozhonshowthree();
            }
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
            this.pageCode++;
            this.getbozhonshowthree();
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
    }
})

var bozhonshowfour = new Vue({
    el: '#bozhon-show-four',
    data: {
        displaystr: 'none',
        tablestr: '1',
        citylevel: '国家',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pagenumber: '',
        listnumber: 0,
        cityname: '',
        boxcheck: false,
        setdatacity: {
            page: '',
            size: '',
            cityName: '',
        },
        setdatanation: {
            page: '',
            size: '',
            nationName: '',
        },
        items: [],
    },
    mounted: function () {
        this.setdatacity.page = this.pageCode;
        this.setdatacity.size = this.pagesize;
        this.setdatacity.cityName = this.cityname;
        this.setdatanation.page = this.pageCode;
        this.setdatanation.size = this.pagesize;
        this.setdatanation.nationName = this.cityname;
        this.getbozhonshowfour();
        this.pagenumber = this.listnumber / this.pagesize;
    },
    methods: {
        getbozhonshowfour: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            if (this.citylevel == '国家') {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/getNationByPage',
                    type: 'post',
                    data: JSON.stringify(_select.setdatanation),
                    dataType: "json",
                    succsess: function (json) {
                        if ("0" == json.result.size) {
                            alert("当前无符合条件的记录!");
                        } else {
                            _select.items = json.result.result.list;
                            _select.listnumber = json.result.totalItems;
                        }
                    },
                    error: function (data) {

                    }
                })
            } else if (this.citylevel == '一级城市') {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/getCityByPage',
                    type: 'post',
                    data: JSON.stringify(_select.setdatacity),
                    dataType: "json",
                    succsess: function (json) {
                        if ("0" == json.result.size) {
                            alert("当前无符合条件的记录!");
                        } else {
                            _select.items = json.result.result.list;
                            _select.listnumber = json.result.totalItems;
                        }
                    },
                    error: function (data) {

                    }
                })
            } else if (this.citylevel == '二级城市') {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/getProvinceByPage',
                    type: 'post',
                    data: JSON.stringify(_select.setdatacity),
                    dataType: "json",
                    succsess: function (json) {
                        if ("0" == json.result.size) {
                            alert("当前无符合条件的记录!");
                        } else {
                            _select.items = json.result.result.list;
                            _select.listnumber = json.result.totalItems;
                        }
                    },
                    error: function (data) {

                    }
                })
            }
        },
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
            this.pageCode = 1;
            this.getbozhonshowfour();
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';
        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
            if (this.pageCode > 1) {
                this.pageCode = this.pageCode - 1;
                this.getbozhonshowfour();
            }
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
            if (this.pageCode < this.pageNumber) {
                this.pageCode = this.pageCode + 1;
                this.getbozhonshowfour();
            }
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
            this.pageCode = this.pagenumber;
            this.getbozhonshowfour();
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
    }
})
var bozhonshowfive = new Vue({
    el: '#bozhon-show-five',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: '',
        pageCode: 1,
        pageNumber: 0,
        boxcheck: false,
        listnumber: '',
        selectnumber: 0,
        items: [],
        setdata: {
            page: '',
            size: '',
        },
        id: [],
    },
    mounted: function () {
        this.setdata.page = this.pageCode;
        this.setdata.size = this.pagesize;
        this.getbozhonshowthree();
        this.pageNumber = this.listnumber / this.pagesize;
    },
    methods: {
        getbozhonshowfive: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/getConfigsByPage',
                type: 'post',
                data: JSON.stringify(this.setdata),
                dataType: "json",
                succsess: function (json) {
                    if ("0" == json.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.totalItems;
                    }
                },
                error: function (data) {

                },
            })
        },
        deletebozhonshowfive: function () {
            let checkDom = this.$refs.table5.getElementsByClassName("fivebtn");
            let idArray = [];
            this.selectnumber = 0;
            for (var i = 0; i < checkDom.length; i++) {
                if (checkDom[i].checked) {
                    idArray.push(checkDom[i].dataset.id);
                    this.selectnumber++;
                }
            }
            this.id = idArray;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            if (this.selectnumber > 0) {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/delConfigs',
                    type: 'post',
                    data: JSON.stringify(this.id),
                    dataType: "json",
                    succsess: function (json) {
                        this.getbozhonshowsix();
                    },
                    error: function (msg) {
                        console.log(msg);
                    }
                })
            } else {
                alert("请选择删除的数据");
            }

        },
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
            this.pageCode = 1;
            this.getbozhonshowfive();
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';
        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
            if (this.pageCode > 1) {
                this.pageCode--;
                this.getbozhonshowfive();
            }
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
            if (this.pageCode < pageNumber) {
                pageCode++;
                this.getbozhonshowfive();
            }
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
            this.pageCode = pageNumber;
            this.getbozhonshowfive();
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
        openaddpage: function () {
            bozhonshowfiveadd.displaystr = 'block';
        },
        openupdatepage: function () {
            let checkDom = this.$refs.table5.getElementsByClassName("fivebtn");
            let idArray = [];
            this.selectnumber = 0;
            for (var i = 0; i < checkDom.length; i++) {
                if (checkDom[i].checked) {
                    idArray.push(checkDom[i].dataset.id);
                    this.selectnumber++;
                }
            }
            if (this.selectnumber == 1) {
                bozhonshowfiveupdate.displaystr = 'block';
            } else {
                alert("请选择一项要修改的数据");
            }

        },
    }
})

var bozhonshowsix = new Vue({
    el: '#bozhon-show-six',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pageNumber: 0,
        listnumber: 0,
        boxcheck: false,
        targetdesc: '',
        items: [],
        selectnumber:0,
        setdata: {
            page: '',
            size: '',
            targetDesc: '',
        },
        id: [],
        idupdate:[],
    },
    mounted: function () {
        this.setdata.page = this.pageCode;
        this.setdata.size = this.pagesize;
        this.setdata.targetDesc = this.targetdesc;
        this.getbozhonshowthree();
        this.pageNumber = this.listnumber / this.pagesize;
    },

    methods: {
        getbozhonshowsix: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/listTargetByPage',
                type: 'post',
                data: JSON.stringify(this.setdata),
                dataType: "json",
                succsess: function (json) {
                    if ("0" == json.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.totalItems;
                    }
                },
                error: function (data) {

                },
            })
        },
        deletebozhonshowsix: function () {
            let checkDom = this.$refs.table6.getElementsByClassName("sixbtn");
            let idArray = [];
            for (var i = 0; i < checkDom.length; i++) {
                if (checkDom[i].checked) {
                    idArray.push(checkDom[i].dataset.id);
                }
            }
            this.id = idArray;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/delTargets',
                type: 'post',
                data: JSON.stringify(_select.id),
                dataType: "json",
                succsess: function (json) {
                    this.getbozhonshowsix();
                },
                error: function (msg) {
                    console.log(msg);
                }
            })
        },
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
            this.pageCode = 1;
            this.getbozhonshowsix();
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';

        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
            if (this.pageCode > 1) {
                this.pageCode--;
                this.getbozhonshowsix();
            }
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
            if (this.pageCode < this.pageNumber) {
                this.pageCode++;
                this.getbozhonshowsix();
            }
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
            this.pageCode = this.pageNumber;
            this.getbozhonshowsix();
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
        openaddpage: function () {
            bozhonshowsixadd.displaystr = 'block';
        },
        openupdatepage: function () {
           
            let checkDom = this.$refs.table6.getElementsByClassName("sixbtn");
            let idArray = [];
            this.selectnumber=0;
            for (var i = 0; i < checkDom.length; i++) {
                if (checkDom[i].checked) {
                    idArray.push(checkDom[i].dataset.id);
                    this.selectnumber++;
                }
            }
            this.idupdate=idArray;
            if(this.selectnumber==1){
                var host = location.hostname;
                var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
                localStorage.setItem("Url", ipAddress);
                var _select = this;
                var _bozhonshowsixupdate=bozhonshowsixupdate;
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/target'+_select.idupdate,
                    type: 'post',
                    data:'',
                    dataType: "json",
                    succsess: function (json) {
                        _bozhonshowsixupdate.items=json.result.target;
                        bozhonshowsixupdate.displaystr = 'block';
                    },
                    error: function (msg) {
                        console.log(msg);
                    }
                })
            }else{
                alert("请选择一个修改项");
            }

        },
    }
})

var bozhonshowtwoadd = new Vue({
    el: '#bozhon-show-two-add',
    data: {
        displaystr: 'none',
        citys: [],
        cityname: '',
        projecttypestr: '',
        projectdesc: '',
        listnumber: '',
        setdatacity: {
            page: '',
            size: '',
            cityName: '',
        },
        setdataproject: {
            projectName: '',
            projectDesc: '',
            projectTypeStr: '',
            projectCity: '',
        },
    },
    mounted: function () {
        this.selectcity();
    },
    methods: {
        closeaddpage: function () {
            this.displaystr = 'none';
        },
        changecityinput: function () {
            this.selectcity();
        },
        selectcity: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/getCityByPage',
                type: 'post',
                data: JSON.stringify(_select.setdataproject),
                dataType: "json",
                succsess: function (json) {
                    _select.citys = json.result.result.list;
                    _select.listnumber = json.result.totalItems;
                },
                error: function (data) {

                }
            })
        },
        saveaddpage: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdataproject.projectName = this.projectname;
            this.setdataproject.projectDesc = this.projectdesc;
            this.setdataproject.projectTypeStr = this.projecttypestr;
            this.setdataproject.projectCity = this.cityname;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/project',
                type: 'post',
                data: JSON.stringify(_select.setdatacity),
                dataType: "json",
                succsess: function (json) {
                    bozhonshowtwo.getbozhonshowtwo();
                    _select.displaystr = 'none';
                },
                error: function (data) {
                    alert("添加失败");
                }
            })
        },
    },
})



var bozhonshowtwoupdate = new Vue({
    el: '#bozhon-show-two-update',
    data: {
        displaystr: 'none',
        citys: [],
        cityname: '',
        projecttypestr: '',
        projectdesc: '',
        listnumber: '',
        setdatacity: {
            page: '',
            size: '',
            cityName: '',
        },
        setdataproject: {
            projectName: '',
            projectDesc: '',
            projectTypeStr: '',
            projectCity: '',
        },
    },
    mounted: function () {
        if (bozhonshowtwo.selectnumber == 1) {
            projectname = bozhonshowtwo.items[0].projectName;
            projectdesc = bozhonshowtwo.items[0].projectDesc;
        }
    },
    methods: {
        selectcity: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/getCityByPage',
                type: 'post',
                data: JSON.stringify(_select.setdataproject),
                dataType: "json",
                succsess: function (json) {
                    _select.citys = json.result.result.list;
                    _select.listnumber = json.result.totalItems;
                },
                error: function (data) {

                }
            })
        },
        closeupdatepage: function () {
            this.displaystr = 'none';
        },
        changecityinput: function () {
            this.selectcity();
        },
        saveupdatepage: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdataproject.projectName = this.projectname;
            this.setdataproject.projectDesc = this.projectdesc;
            this.setdataproject.projectTypeStr = this.projecttypestr;
            this.setdataproject.projectCity = this.cityname;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/project',
                type: 'post',
                data: JSON.stringify(_select.setdatacity),
                dataType: "json",
                succsess: function (json) {
                    bozhonshowtwo.getbozhonshowtwo();
                    _select.displaystr = 'none';

                },
                error: function (data) {
                    alert("添加失败");
                }
            })
        },

    },
})


var bozhonshowfiveadd = new Vue({
    el: '#bozhon-show-five-add',
    data: {
        displaystr: 'none',
        conffilename: '',
        conffilepath: '',
        iswildcard: '',
        setdataconf: {
            confFileName: '',
            confFilePath: '',
            isWildcard: '',
        },
    },
    methods: {
        closeaddpage: function () {
            this.displaystr = 'none';
        },
        saveaddpage: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdataconf.confFileName = this.conffilename;
            this.setdataconf.confFilePath = this.conffilepath;
            this.setdataconf.isWildcard = this.iswildcard;
            if (this.setdataconf.confFileName == '' || this.setdataconf.confFileName == null) {
                alert("请输入配置文件！");
            } else if (this.setdataconf.confFilePath == '' || this.setdataconf.confFilePath == null) {
                alert("请输入配置路径！");
            } else if (this.setdataconf.isWildcard == '' || this.setdataconf.isWildcard == null) {
                alert("请选择是否通配！");
            } else {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/config',
                    type: 'post',
                    data: JSON.stringify(_select.setdataconf),
                    dataType: "json",
                    succsess: function (json) {
                        bozhonshowfive.getbozhonshowfive();
                        _select.displaystr = 'none';
                    },
                    error: function (data) {
                        alert("添加失败");
                    }
                })
            }

        },
    },
})

var bozhonshowfiveupdate = new Vue({
    el: '#bozhon-show-five-update',
    data: {
        displaystr: 'none',
        conffilename: '',
        conffilepath: '',
        iswildcard: '',
        setdataconf: {
            confFileName: '',
            confFilePath: '',
            isWildcard: '',
        },
    },
    mounted: {

    },
    methods: {
        closeupdatepage: function () {
            this.displaystr = 'none';
        },
        saveupdatepage: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdataconf.confFileName = this.conffilename;
            this.setdataconf.confFilePath = this.conffilepath;
            this.setdataconf.isWildcard = this.iswildcard;
            if (this.setdataconf.confFileName == '' || this.setdataconf.confFileName == null) {
                alert("请输入配置文件！");
            } else if (this.setdataconf.confFilePath == '' || this.setdataconf.confFilePath == null) {
                alert("请输入配置路径！");
            } else if (this.setdataconf.isWildcard == '' || this.setdataconf.isWildcard == null) {
                alert("请选择是否通配！");
            } else {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/config',
                    type: 'post',
                    data: JSON.stringify(_select.setdataconf),
                    dataType: "json",
                    succsess: function (json) {
                        bozhonshowfive.getbozhonshowfive();
                        _select.displaystr = 'none';
                    },
                    error: function (data) {
                        alert("添加失败");
                    }
                })
            }

        },
    },
})

var bozhonshowsixadd = new Vue({
    el: '#bozhon-show-six-add',
    data: {
        displaystr: 'none',
        targetdesc: '',
        targetuuid: '',
        targetproject: '',
        setdatatarget: {
            targetUUID: '',
            targetDesc: '',
            targetProject: '',
        },
    },
    methods: {
        closeaddpage: function () {
            this.displaystr = "none";
        },
        openaddobjectpage: function () {
            bozhonshowsixaddproject.displaystr = 'block';
        },
        saveaddpage: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdatatarget.targetUUID = this.targetuuid;
            this.setdatatarget.targetDesc = this.targetdesc;
            this.setdatatarget.targetProject = this.targetproject;
            if (this.setdatatarget.targetUUID == null || this.setdatatarget.targetUUID == "") {
                alert("请输入配置目标UUID！");
            } else if (this.setdatatarget.targetProject == null || this.setdatatarget.targetProject == "") {
                alert("请输入配置目标所属项目！");
            } else {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/target',
                    type: 'post',
                    data: JSON.stringify(_select.setdatatarget),
                    dataType: "json",
                    succsess: function (json) {
                        bozhonshowsix.getbozhonshowsix();
                        _select.displaystr = 'none';
                    },
                    error: function (data) {
                        alert("添加失败");
                    }
                })
            }
        },
    }
})

var bozhonshowsixaddproject = new Vue({
    el: '#bozhon-show-six-add-project',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        projectname: '',
        pagenumber: '',
        pagecode: '',
        pagesize: 10,
        listnumber: '',
        selectnumber: 0,
        items: [],
        setdata: {
            pageNo: '',
            pageSize: '',
            projectName: '',
        },
        id: [],
    },
    mounted: function () {
        this.getobject();
        this.pagenumber = this.listnumber / this.pagesize;
    },
    methods: {
        closeaddpage: function () {
            this.displaystr = "none";
        },
        getobject: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdata.pageNo = this.pagecode;
            this.setdata.pageSize = this.pagesize;
            this.setdata.projectName = this.projectname;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/listProjectByPage',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                succsess: function (json) {
                    _select.items = json.result.result.list;
                    _select.pagenumber = json.result.result.totalItems;
                },
                error: function (data) {
                    alert("加载失败");
                }
            })
        },
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
            this.pageCode = 1;
            this.getobject();
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';

        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
            if (this.pageCode > 1) {
                this.pageCode--;
                this.getobject();
            }
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
            if (this.pageCode < this.pagenumber) {
                this.pageCode++;
                this.getobject();
            }
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
            this.pageCode = this.pagenumber;
            this.getobject();
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
        saveproject: function () {
            let checkDom = this.$refs.sixaddproject.getElementsByClassName("sixaddprojectbtn");
            let idArray = [];
            this.selectnumber = 0;
            for (var i = 0; i < checkDom.length; i++) {
                if (checkDom[i].checked) {
                    idArray.push(checkDom[i].dataset.id);
                    this.selectnumber++;
                }
            }
            this.id = idArray;
            if (this.selectnumber == 1) {
                bozhonshowsixadd.targetproject = id.projectDesc;
                this.displaystr = "none";
            } else {
                alert("请选择一种配置所属项目！");
            }
        },
    },
})

var bozhonshowsixupdate = new Vue({
    el: '#bozhon-show-six-update',
    data: {
        displaystr: 'none',
        targetuuid:'',
        targetdesc:'',
        targetproject:'',
        setdatatarget: {
            targetUUID: '',
            targetDesc: '',
            targetProject: '',
        },
        items:{},
    },
    methods: {
        closeupdatepage: function () {
            this.displaystr = 'none';
        },
        openupdateobjectpage: function () {
            bozhonshowsixupdateproject.displaystr = 'block';
        },
        saveupdatepage:function(){
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdatatarget.targetUUID = this.items.targetUUID;
            this.setdatatarget.targetDesc = this.items.targetDesc;
            this.setdatatarget.targetProject = this.items.targetProject;
            if (this.setdatatarget.targetUUID == null || this.setdatatarget.targetUUID == "") {
                alert("请输入配置目标UUID！");
            } else if (this.setdatatarget.targetProject == null || this.setdatatarget.targetProject == "") {
                alert("请输入配置目标所属项目！");
            } else {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/target',
                    type: 'post',
                    data: JSON.stringify(_select.setdatatarget),
                    dataType: "json",
                    succsess: function (json) {
                        bozhonshowsix.getbozhonshowsix();
                        _select.displaystr = 'none';
                    },
                    error: function (data) {
                        alert("添加失败");
                    }
                })
            }
        },
    },
})

var bozhonshowsixupdateproject=new Vue({
    el:'#bozhon-show-six-update-project',
    data:{
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        projectname: '',
        pagenumber:0,
        pagecode: '',
        pagesize: 10,
        listnumber: '',
        selectnumber: 0,
        items: [],
        setdata: {
            pageNo: '',
            pageSize: '',
            projectName: '',
        },
        id: [],
    },
    mounted: function () {
        this.getobject();
        this.pagenumber = this.listnumber / this.pagesize;
    },
    methods:{
        getobject:function(){
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdata.pageNo = this.pagecode;
            this.setdata.pageSize = this.pagesize;
            this.setdata.projectName = this.projectname;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/listProjectByPage',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                succsess: function (json) {
                    _select.items = json.result.result.list;
                    _select.pagenumber = json.result.result.totalItems;
                },
                error: function (data) {
                    alert("加载失败");
                }
            })
        },
        pagefirstclickdown: function () {
            this.pagefirstimg = '../images/Previous page (1).png';
            this.pageCode = 1;
            this.getobject();
        },
        pagefirstclickup: function () {
            this.pagefirstimg = '../images/Previous page.png';

        },
        pageprevclickdown: function () {
            this.pageprevimg = '../images/prev (1).png';
            if (this.pageCode > 1) {
                this.pageCode--;
                this.getobject();
            }
        },
        pageprevclickup: function () {
            this.pageprevimg = '../images/prev.png';
        },
        pagenextclickdown: function () {
            this.pagenextimg = '../images/next (1).png';
            if (this.pageCode < this.pagenumber) {
                this.pageCode++;
                this.getobject();
            }
        },
        pagenextclickup: function () {
            this.pagenextimg = '../images/next.png';
        },
        pagelastclickdown: function () {
            this.pagelastimg = '../images/next page (1).png';
            this.pageCode = this.pagenumber;
            this.getobject();
        },
        pagelastclickup: function () {
            this.pagelastimg = '../images/next page.png';
        },
        closeupdatepage: function () {
            this.displaystr = "none";
        },
        saveproject:function(){
            let checkDom = this.$refs.sixupdateproject.getElementsByClassName("sixupdateprojectbtn");
            let idArray = [];
            this.selectnumber = 0;
            for (var i = 0; i < checkDom.length; i++) {
                if (checkDom[i].checked) {
                    idArray.push(checkDom[i].dataset.id);
                    this.selectnumber++;
                }
            }
            this.id = idArray;
            if (this.selectnumber == 1) {
                bozhonshowsixupdate.items.targetProject = id.projectDesc;
                this.displaystr = "none";
            } else {
                alert("请选择一种配置所属项目！");
            }
        },
    },
})