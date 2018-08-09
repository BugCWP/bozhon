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
//目录栏
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
                    bozhonshowone.getbozhonshowone();
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
                    bozhonshowtwo.getbozhonshowtwo();
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
                    bozhonshowthree.getbozhonshowthree();
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
                    bozhonshowfive.getbozhonshowfive();
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
                    bozhonshowsix.getbozhonshowsix();
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
                    bozhonshowone.getbozhonshowone();
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
                    bozhonshowtwo.getbozhonshowtwo();
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
                    bozhonshowthree.getbozhonshowthree();
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
                    bozhonshowfive.getbozhonshowfive();
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
                    bozhonshowsix.getbozhonshowsix();
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
                    bozhonshowfour.getbozhonshowfour();
                } else if (index == 2) {
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = true;
                    this.secondmunethreetxt = false;
                    bozhonshowfour.citylevel = '一级城市';
                    bozhonshowfour.getbozhonshowfour();
                } else if (index == 3) {
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = true;
                    bozhonshowfour.citylevel = '二级城市';
                    bozhonshowfour.getbozhonshowfour();
                }
            } else {
                bozhonmunebox.btntxts = bozhonmunebox.btntxts44;
                if (index == 1) {
                    this.secondmuneonetxt = true;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = false;
                    bozhonshowfour.citylevel = '国家';
                    bozhonshowfour.getbozhonshowfour();
                } else if (index == 2) {
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = true;
                    this.secondmunethreetxt = false;
                    bozhonshowfour.citylevel = '一级城市';
                    bozhonshowfour.getbozhonshowfour();
                } else if (index == 3) {
                    this.secondmuneonetxt = false;
                    this.secondmunetwotxt = false;
                    this.secondmunethreetxt = true;
                    bozhonshowfour.citylevel = '二级城市';
                    bozhonshowfour.getbozhonshowfour();
                }
            }
        }
    },
})
//用户信息
var bozhonshowone = new Vue({
    el: '#bozhon-show-one',
    data: {
        displaystr: 'block',
        schdisplaytxt: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pagenumber: 0,
        listnumber: 0,
        uname: '',
        boxcheck: false,
        req: {
            page: '',
            size: '',
            uName: '',
        },
        items: [],
    },
    mounted: function () {
        this.getbozhonshowone();
    },
    methods: {
        //取用户管理表
        getbozhonshowone: function () {
            this.schdisplaytxt = "block";
            this.req.page = this.pageCode;
            this.req.size = this.pagesize;
            if (this.uname == "") {
                this.req.uName = null;
            } else {
                this.req.uName = this.uname;
            }
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/getUsersByPage',
                type: 'post',
                data: JSON.stringify(_select.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("用户信息列表取到");
                    if ("0" == json.result.size) {
                        alert("当前无符合条件的记录!");
                        _select.items = [];
                    } else {
                        _select.schdisplaytxt = "none";
                        _select.items = [];
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.result.totalItems;
                        _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                    }
                },
                error: function (data) {
                    console.log("访问用户列表失败");
                    _select.items = [];
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
//项目管理
var bozhonshowtwo = new Vue({
    el: '#bozhon-show-two',
    data: {
        displaystr: 'none',
        schdisplaytxt: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pagenumber: 0,
        listnumber: '',
        boxcheck: false,
        checkednumber: 0,
        btndisabledone: true,
        btndisabledsome: true,
        idlist: {},
        projectname: '',//项目名称
        items: [],
        selectnumber: 0,
        req: {
            page: '',
            size: '',
            projectName: '',
        },
        reqdele: {
            ids: '',
        },
        id: [],
        additem:[],
    },
    mounted: function () {

    },
    methods: {
        getbozhonshowtwo: function () {
            this.schdisplaytxt = "block";
            this.req.page = this.pageCode;
            this.req.size = this.pagesize;
            this.req.projectName = this.projectname;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/listProjectByPage',
                type: 'post',
                data: JSON.stringify(this.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("项目管理列表取到");
                    if ("0" == json.result.size) {
                        alert("当前无符合条件的记录!");
                        _select.items = [];
                    } else {
                        _select.schdisplaytxt = "none";
                        _select.items = [];
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.result.totalItems;
                        _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                    }

                },
                error: function (data) {
                    console.log("获取项目列表失败");
                    _select.items = [];
                }
            })
        },
        //删除功能
        deletebozhonshowtwo: function () {
            // var checkDom = this.$refs.table2.getElementsByClassName("selBtn");
            // var idArray = [];
            // this.selectnumber = 0;
            // for (var i = 0; i < checkDom.length; i++) {
            //     if (checkDom[i].checked) {
            //         idArray.push(checkDom[i].dataset.id);
            //         this.selectnumber++;
            //     }
            // }
            // this.id = idArray;
            this.reqdele.ids = this.idlist;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            if (this.checkednumber > 0) {
                alert("确认要删除？");
                $.ajax({
                    url: ipAddress + 'api/delProjects',
                    type: 'post',
                    data: JSON.stringify(_select.reqdele),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _select.getbozhonshowtwo();
                    },
                    error: function (msg) {
                        console.log(msg);
                    }
                })
            } else {
                alert("请选中要删除的数据");
            }

        },
        //选中事件
        checkedthing: function (item, event) {
            this.idlist=new Array();
            this.additem=new Array();
            if (event.target.checked) {
                this.idlist.push(item.projectId);
                this.additem.push(item);
                this.checkednumber++;
                if (this.checkednumber == 1) {
                    this.btndisabledsome = false;
                    this.btndisabledone = false;
                } else if (this.checkednumber > 1) {
                    this.btndisabledone = true;
                }
                console.log(this.idlist, this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.idlist) {
                    if (this.idlist[i] != item.projectId) {
                        list1.push(this.idlist[i]);
                    }
                }
                this.idlist = list1;
                var list2 = new Array();
                for (var i in this.additem) {
                    if (this.additem[i] != item) {
                        list1.push(this.additem[i]);
                    }
                }
                this.additem = list2;
                this.checkednumber--;
                if (this.checkednumber == 1) {
                    this.btndisabledone = false;
                }
                if (this.checkednumber < 1) {
                    this.btndisabledsome = true;
                    this.btndisabledone = true;
                }
                console.log(this.idlist, this.checkednumber);
            }
        },
        //分页功能
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
        //打开新增框
        openaddpage: function () {
            bozhonshowtwoadd.displaystr = 'block';
            bozhonshowtwoadd.selectcity();
        },
        //打开修改框
        openupdatepage: function () {
            // var checkDom = this.$refs.table2.getElementsByClassName("selBtn");
            // var idArray = [];
            // this.selectnumber = 0;
            // for (var i = 0; i < checkDom.length; i++) {
            //     if (checkDom[i].checked) {
            //         idArray.push(checkDom[i].dataset.id);
            //         this.selectnumber++;
            //     }
            // }
            if (this.checkednumber == 1) {
                bozhonshowtwoupdate.projectname=this.additem[0].projectName;
                bozhonshowtwoupdate.projectdesc=this.additem[0].projectDesc;
                bozhonshowtwoupdate.displaystr = 'block';
            } else {
                alert("请选择一项要修改的数据");
            }
        },
        openpeizhipage:function(){
            if(this.checkednumber==1){
                bozhonshowtwonewprojectConfigVersion.projectId=this.additem[0].projectId;
                bozhonshowtwonewprojectConfigVersion.getprojectConfigVersion();
                bozhonshowtwonewprojectConfigVersion.displaystr="block";
            }else{
                alert("请选择一项数据");
            }
        }
    }
})
//更新事件
var bozhonshowthree = new Vue({
    el: '#bozhon-show-three',
    data: {
        displaystr: 'none',
        schdisplaytxt: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pagenumber: 0,
        projectname: '',
        boxcheck: false,
        listnumber: '',
        items: [],
        req: {
            page: '',
            size: '',
            projectName: '',
        },
    },
    mounted: function () {

    },
    methods: {
        getbozhonshowthree: function () {
            this.schdisplaytxt = "block";
            this.req.page = this.pageCode;
            this.req.size = this.pagesize;
            this.req.projectName = this.projectname;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/getUpdateEventByPage',
                type: 'post',
                data: JSON.stringify(this.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("获取到更新事件");
                    if ("0" == json.result.result.size) {
                        alert("当前无符合条件的记录!");
                        _select.items = [];
                    } else {
                        _select.schdisplaytxt = "none";
                        _select.items = [];
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.result.totalItems;
                        _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                    }

                },
                error: function (data) {
                    console.log("获取更新事件失败");
                    _select.items = [];
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
//地区管理
var bozhonshowfour = new Vue({
    el: '#bozhon-show-four',
    data: {
        displaystr: 'none',
        schdisplaytxt: 'none',
        tablestr: '1',
        citylevel: '国家',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pagenumber: 0,
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

    },
    methods: {
        getbozhonshowfour: function () {
            this.schdisplaytxt = "block";
            this.setdatacity.page = this.pageCode;
            this.setdatacity.size = this.pagesize;
            this.setdatacity.cityName = this.cityname;
            this.setdatanation.page = this.pageCode;
            this.setdatanation.size = this.pagesize;
            this.setdatanation.nationName = this.cityname;
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
                    contentType: "application/json",
                    success: function (json) {
                        console.log("获取到国家");
                        if ("0" == json.result.result.size) {
                            alert("当前无符合条件的记录!");
                            _select.items = [];
                        } else {
                            _select.schdisplaytxt = "block";
                            _select.items = [];
                            _select.items = json.result.result.list;
                            _select.listnumber = json.result.result.totalItems;
                            _select.pageNumber = _select.listnumber / _select.pagesize + 1;
                        }
                    },
                    error: function (data) {
                        console.log("获取国家失败");
                        _select.items = [];
                    }
                })
            } else if (this.citylevel == '一级城市') {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/getCityByPage',
                    type: 'post',
                    data: JSON.stringify(_select.setdatacity),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        if ("0" == json.result.result.size) {
                            alert("当前无符合条件的记录!");
                            _select.items = [];
                        } else {
                            _select.schdisplaytxt = "block";
                            console.log("获取到一级城市");
                            _select.items = [];
                            _select.items = json.result.result.list;
                            _select.listnumber = json.result.result.totalItems;
                        }
                    },
                    error: function (data) {
                        console.log("获取一级城市失败");
                        _select.items = [];
                    }
                })
            } else if (this.citylevel == '二级城市') {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/getProvinceByPage',
                    type: 'post',
                    data: JSON.stringify(_select.setdatacity),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        if ("0" == json.result.result.size) {
                            alert("当前无符合条件的记录!");
                            _select.items = [];
                        } else {
                            _select.schdisplaytxt = "block";
                            console.log("获取到二级城市");
                            _select.items = [];
                            _select.items = json.result.result.list;
                            _select.listnumber = json.result.result.totalItems;
                            _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                        }
                    },
                    error: function (data) {
                        console.log("获取二级城市失败");
                        _select.items = [];
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

//配置管理
var bozhonshowfive = new Vue({
    el: '#bozhon-show-five',
    data: {
        displaystr: 'none',
        schdisplaytxt: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pagenumber: 0,
        boxcheck: false,
        listnumber: '',
        selectnumber: 0,
        items: [],
        req: {
            page: '',
            size: '',
        },
        id: [],
        checkednumber: 0,
        btndisabledone: true,
        btndisabledsome: true,
        idlist: {},
        reqdele: {
            ids: '',
        },
        additem:[],
    },
    mounted: function () {
        // this.req.page = this.pageCode;
        // this.req.size = this.pagesize;
    },
    methods: {
        getbozhonshowfive: function () {
            this.schdisplaytxt = "block";
            this.req.page = this.pageCode;
            this.req.size = this.pagesize;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/getConfigsByPage',
                type: 'post',
                data: JSON.stringify(this.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("获取管理配置成功");
                    if ("0" == json.result.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.schdisplaytxt = "none";
                        _select.items = [];
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.result.totalItems;
                        _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                    }
                },
                error: function (data) {
                    console.log("获取管理配置失败");
                    _select.items = [];
                },
            })
        },
        deletebozhonshowfive: function () {
            // var checkDom = this.$refs.table5.getElementsByClassName("fivebtn");
            // var idArray = [];
            // this.selectnumber = 0;
            // for (var i = 0; i < checkDom.length; i++) {
            //     if (checkDom[i].checked) {
            //         idArray.push(checkDom[i].dataset.id);
            //         this.selectnumber++;
            //     }
            // }
            // this.id = idArray;
            this.reqdele.ids=this.idlist;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            // localStorage.setItem("Url", ipAddress);
            var _select = this;
            if (this.checkednumber > 0) {
                $.ajax({
                    url: ipAddress + 'api/delConfigs',
                    type: 'post',
                    data: JSON.stringify(_select.reqdele),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _select.getbozhonshowsix();
                    },
                    error: function (msg) {
                        console.log(msg);
                    }
                })
            } else {
                alert("请选择删除的数据");
            }

        },
        //选中事件
        checkedthing: function (item, event) {
            this.idlist=new Array();
            this.additem=new Array();
            if (event.target.checked) {
                this.idlist.push(item.confId);
                this.additem.push(item);
                this.checkednumber++;
                if (this.checkednumber == 1) {
                    this.btndisabledsome = false;
                    this.btndisabledone = false;
                } else if (this.checkednumber > 1) {
                    this.btndisabledone = true;
                }
                console.log(this.idlist, this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.idlist) {
                    if (this.idlist[i] != item.confId) {
                        list1.push(this.idlist[i]);
                    }
                }
                this.idlist = list1;
                var list2 = new Array();
                for (var i in this.additem) {
                    if (this.additem[i] != item) {
                        list2.push(this.additem[i]);
                    }
                }
                this.additem = list2;
                this.checkednumber--;
                if (this.checkednumber == 1) {
                    this.btndisabledone = false;
                }
                if (this.checkednumber < 1) {
                    this.btndisabledsome = true;
                    this.btndisabledone = true;
                }
                console.log(this.idlist, this.checkednumber);
            }
        },
        //分页功能
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
        //打开新增窗口
        openaddpage: function () {
            bozhonshowfiveadd.displaystr = 'block';
        },
        //打开修改窗口
        openupdatepage: function () {
            // var checkDom = this.$refs.table5.getElementsByClassName("fivebtn");
            // var idArray = [];
            // this.selectnumber = 0;
            // for (var i = 0; i < checkDom.length; i++) {
            //     if (checkDom[i].checked) {
            //         idArray.push(checkDom[i].dataset.id);
            //         this.selectnumber++;
            //     }
            // }
            if (this.checkednumber == 1) {
                bozhonshowfiveupdate.conffilename=additem[0].confFileName;
                bozhonshowfiveupdate.conffilepath=additem[0].conffilepath;
                bozhonshowfiveupdate.displaystr = 'block';
            } else {
                alert("请选择一项要修改的数据");
            }

        },
    }
})
//目标管理
var bozhonshowsix = new Vue({
    el: '#bozhon-show-six',
    data: {
        displaystr: 'none',
        schdisplaytxt: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: 10,
        pageCode: 1,
        pagenumber: 0,
        listnumber: 0,
        boxcheck: false,
        targetdesc: '',
        items: [],
        selectnumber: 0,
        req: {
            page: '',
            size: '',
            targetDesc: '',
        },
        id: [],
        idupdate: [],
        checkednumber: 0,
        btndisabledone: true,
        btndisabledsome: true,
        idlist: {},
        reqdele: {
            ids: '',
        }
    },
    mounted: function () {
        // this.req.page = this.pageCode;
        // this.req.size = this.pagesize;
        // this.req.targetDesc = this.targetdesc;
    },

    methods: {
        getbozhonshowsix: function () {
            this.schdisplaytxt = "block";
            this.req.page = this.pageCode;
            this.req.size = this.pagesize;
            this.req.targetDesc = this.targetdesc;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/listTargetByPage',
                type: 'post',
                data: JSON.stringify(this.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("获取目标管理成功");
                    if ("0" == json.result.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.schdisplaytxt = "none";
                        _select.items = [];
                        _select.items = json.result.result.list;
                        _select.listnumber = json.result.result.totalItems;
                        _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                    }
                },
                error: function (data) {
                    console.log("目标管理无法获取");
                    _select.items = [];
                },
            })
        },
        //删除功能
        deletebozhonshowsix: function () {
            // var checkDom = this.$refs.table6.getElementsByClassName("sixbtn");
            // var idArray = [];
            // for (var i = 0; i < checkDom.length; i++) {
            //     if (checkDom[i].checked) {
            //         idArray.push(checkDom[i].dataset.id);
            //     }
            // }
            // this.id = idArray;
            this.reqdele.ids=this.idlist;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            // localStorage.setItem("Url", ipAddress);
            var _select = this;
            if(this.checkednumber>0){
                alert("确认删除？");
                $.ajax({
                    url: ipAddress + 'api/delTargets',
                    type: 'post',
                    data: JSON.stringify(_select.reqdele),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _select.getbozhonshowsix();
                    },
                    error: function (msg) {
                        console.log(msg);
                    }
                })
            }else{
                console.log("请选择一个删除对象");
            }
        },
        //选中事件
        checkedthing: function (item, event) {
            this.idlist=new Array();
            if (event.target.checked) {
                this.idlist.push(item.targetId);
                this.checkednumber++;
                if (this.checkednumber == 1) {
                    this.btndisabledsome = false;
                    this.btndisabledone = false;
                } else if (this.checkednumber > 1) {
                    this.btndisabledone = true;
                }
                console.log(this.idlist, this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.idlist) {
                    if (this.idlist[i] != item.targetId) {
                        list1.push(this.idlist[i]);
                    }
                }
                this.idlist = list1;
                this.checkednumber--;
                if (this.checkednumber == 1) {
                    this.btndisabledone = false;
                }
                if (this.checkednumber < 1) {
                    this.btndisabledsome = true;
                    this.btndisabledone = true;
                }
                console.log(this.idlist, this.checkednumber);
            }
        },
        //分页功能
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
        //打开新增窗口
        openaddpage: function () {
            bozhonshowsixadd.displaystr = 'block';
        },
        //打开修改窗口
        openupdatepage: function () {
            // var checkDom = this.$refs.table6.getElementsByClassName("sixbtn");
            // var idArray = [];
            // this.selectnumber = 0;
            // for (var i = 0; i < checkDom.length; i++) {
            //     if (checkDom[i].checked) {
            //         idArray.push(checkDom[i].dataset.id);
            //         this.selectnumber++;
            //     }
            // }
            // this.idupdate = idArray;
            if (this.checkednumber == 1) {
                var host = location.hostname;
                var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
                // localStorage.setItem("Url", ipAddress);
                var _select = this;
                var _bozhonshowsixupdate = bozhonshowsixupdate;
                $.ajax({
                    url: ipAddress + 'api/target' + _select.idupdate,
                    type: 'post',
                    data: '',
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _bozhonshowsixupdate.targetuuid = json.result.target.targetUUID;
                        _bozhonshowsixupdate.targetdesc = json.result.target.targetDesc;
                        _bozhonshowsixupdate.targetproject = json.result.target.targetProject;
                        bozhonshowsixupdate.displaystr = 'block';
                    },
                    error: function (msg) {
                        console.log(msg);
                    }
                })
            } else {
                alert("请选择一个修改项");
            }

        },
    }
})
//项目管理添加列表
var bozhonshowtwoadd = new Vue({
    el: '#bozhon-show-two-add',
    data: {
        displaystr: 'none',
        citys: [],
        cityname: '',
        projecttypestr: '',
        projectdesc: '',
        projectname:'',
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
                data: JSON.stringify(_select.setdatacity),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.citys = json.result.result.list;
                    _select.listnumber = json.result.result.totalItems;
                },
                error: function (data) {
                    console.log("查询城市失败");
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
            if (this.setdataproject.projectName == "" || this.setdataproject.projectName == null) {
                alert("请输入项目名称");
            }
            else if (this.setdataproject.projectDesc == "" || this.setdataproject.projectDesc == null) {
                alert("请输入项目描述");
            }
            else if (this.setdataproject.projectTypeStr == "" || this.setdataproject.projectTypeStr == null) {
                alert("请选择所在城市");
            }
            else if (this.setdataproject.projectCity == "" || this.setdataproject.projectCity == null) {
                alert("请选择项目类别");
            } else {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/project',
                    type: 'post',
                    data: JSON.stringify(_select.setdataproject),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        bozhonshowtwo.getbozhonshowtwo();
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


//项目管理修改窗口
var bozhonshowtwoupdate = new Vue({
    el: '#bozhon-show-two-update',
    data: {
        displaystr: 'none',
        citys: [],
        cityname: '',
        projectname:'',
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
                data: JSON.stringify(_select.setdatacity),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.citys = json.result.result.list;
                    _select.listnumber = json.result.result.totalItems;
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
            // localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdataproject.projectName = this.projectname;
            this.setdataproject.projectDesc = this.projectdesc;
            this.setdataproject.projectTypeStr = this.projecttypestr;
            this.setdataproject.projectCity = this.cityname;
            if (this.setdataproject.projectName == "" || this.setdataproject.projectName == null) {
                alert("请输入项目名称");
            }
            else if (this.setdataproject.projectDesc == "" || this.setdataproject.projectDesc == null) {
                alert("请输入项目描述");
            }
            else if (this.setdataproject.projectTypeStr == "" || this.setdataproject.projectTypeStr == null) {
                alert("请选择所在城市");
            }
            else if (this.setdataproject.projectCity == "" || this.setdataproject.projectCity == null) {
                alert("请选择项目类别");
            } else {
                $.ajax({
                    url: ipAddress + 'api/project',
                    type: 'post',
                    data: JSON.stringify(_select.setdataproject),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        bozhonshowtwo.getbozhonshowtwo();
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

//配置管理新增功能窗口
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
            // localStorage.setItem("Url", ipAddress);
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
                    url: ipAddress+ 'api/config',
                    type: 'post',
                    data: JSON.stringify(_select.setdataconf),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
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
//配置管理功能修改页
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
            // localStorage.setItem("Url", ipAddress);
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
                    url:ipAddress+ 'api/config',
                    type: 'post',
                    data: JSON.stringify(_select.setdataconf),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
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
//目标管理新增功能窗口
var bozhonshowsixadd = new Vue({
    el: '#bozhon-show-six-add',
    data: {
        displaystr: 'none',
        targetdesc: '',
        targetuuid: '',
        targetproject: '',
        additem:{},
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
            bozhonshowsixaddproject.getobject();
        },
        saveaddpage: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            // localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdatatarget.targetUUID = this.targetuuid;
            this.setdatatarget.targetDesc = this.targetdesc;
            this.setdatatarget.targetProject = this.additem[0].targetproject;
            if (this.setdatatarget.targetUUID == null || this.setdatatarget.targetUUID == "") {
                alert("请输入配置目标UUID！");
            } else if (this.setdatatarget.targetProject == null || this.setdatatarget.targetProject == "") {
                alert("请输入配置目标所属项目！");
            } else {
                $.ajax({
                    url: ipAddress + 'api/target',
                    type: 'post',
                    data: JSON.stringify(_select.setdatatarget),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
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
//目标管理新增功能的所属项目窗口
var bozhonshowsixaddproject = new Vue({
    el: '#bozhon-show-six-add-project',
    data: {
        displaystr: 'none',
        schdisplaytxt: 'none',
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
        additem:{},
        checkednumber:0,
        btndisabled:true,
    },
    mounted: function () {
    },
    methods: {
        closeaddpage: function () {
            this.displaystr = "none";
        },
        getobject: function () {
            this.schdisplaytxt = "block";
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            // localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdata.pageNo = this.pagecode;
            this.setdata.pageSize = this.pagesize;
            this.setdata.projectName = this.projectname;
            $.ajax({
                url: ipAddress + 'api/listProjectByPage',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.schdisplaytxt = "none";
                    _select.items = [];
                    _select.items = json.result.result.list;
                    _select.listnumber = json.result.result.totalItems;
                    _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                },
                error: function (data) {
                    console.log("未取到项目列表");
                    _select.items = [];
                }
            })
        },
         //选中事件
         checkedthing: function (item, event) {
            this.additem=new Array();
            if (event.target.checked) {
                this.additem.push(item);
                this.checkednumber++;
                if (this.checkednumber == 1) {
                    this.btndisabled = false;
                } else if (this.checkednumber > 1) {
                    this.btndisabled = true;
                }
                console.log(this.additem, this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.additem) {
                    if (this.additem[i] != item) {
                        list1.push(this.additem[i]);
                    }
                }
                this.additem = list1;
                this.checkednumber--;
                if (this.checkednumber == 1) {
                    this.btndisabled = false;
                }
                if (this.checkednumber < 1) {
                    this.btndisabled = true;
                }
                console.log(this.additem, this.checkednumber);
            }
        },
        //分页功能
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
            // let checkDom = this.$refs.sixaddproject.getElementsByClassName("sixaddprojectbtn");
            // let idArray = [];
            // this.selectnumber = 0;
            // for (var i = 0; i < checkDom.length; i++) {
            //     if (checkDom[i].checked) {
            //         idArray.push(checkDom[i].dataset.id);
            //         this.selectnumber++;
            //     }
            // }
            // this.id = idArray;
            if (this.selectnumber == 1) {
                bozhonshowsixadd.additem= this.additem;
                this.displaystr = "none";
            } else {
                alert("请选择一种配置所属项目！");
            }
        },
    },
})

//目标管理修改功能窗口
var bozhonshowsixupdate = new Vue({
    el: '#bozhon-show-six-update',
    data: {
        displaystr: 'none',
        targetuuid: '',
        targetdesc: '',
        targetproject: '',
        setdatatarget: {
            targetUUID: '',
            targetDesc: '',
            targetProject: '',
        },
        items: {
            targetUUID: '',
            targetDesc: '',
            targetProject: '',
        },
    },
    methods: {
        closeupdatepage: function () {
            this.displaystr = 'none';
        },
        openupdateobjectpage: function () {
            bozhonshowsixupdateproject.displaystr = 'block';
            bozhonshowsixaddproject.getobject();
        },
        saveupdatepage: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            // localStorage.setItem("Url", ipAddress);
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
                    url: ipAddress + 'api/target',
                    type: 'post',
                    data: JSON.stringify(_select.setdatatarget),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
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

//目标管理修改功能的所属项目窗口
var bozhonshowsixupdateproject = new Vue({
    el: '#bozhon-show-six-update-project',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        projectname: '',
        pagenumber: 0,
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
        additem:[],
        checkednumber:0,
        btndisabled:true,
    },
    mounted: function () {

    },
    methods: {
        getobject: function () {
            this.schdisplaytxt = "block";
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            //localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdata.pageNo = this.pagecode;
            this.setdata.pageSize = this.pagesize;
            this.setdata.projectName = this.projectname;
            $.ajax({
                url: ipAddress + 'api/listProjectByPage',
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.schdisplaytxt = "none";
                    _select.items = [];
                    _select.items = json.result.result.list;
                    _select.listnumber = json.result.result.totalItems;
                    _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                },
                error: function (data) {
                    console.log("未取到项目列表");
                    _select.items = [];
                }
            })
        },
         //选中事件
         checkedthing: function (item, event) {
            this.additem=new Array();
            if (event.target.checked) {
                this.additem.push(item);
                this.checkednumber++;
                if (this.checkednumber == 1) {
                    this.btndisabled = false;
                } else if (this.checkednumber > 1) {
                    this.btndisabled = true;
                }
                console.log(this.additem, this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.additem) {
                    if (this.additem[i] != item) {
                        list1.push(this.additem[i]);
                    }
                }
                this.additem = list1;
                this.checkednumber--;
                if (this.checkednumber == 1) {
                    this.btndisabled = false;
                }
                if (this.checkednumber < 1) {
                    this.btndisabled = true;
                }
                console.log(this.additem, this.checkednumber);
            }
        },
        //分页功能
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
        saveproject: function () {
            // let checkDom = this.$refs.sixupdateproject.getElementsByClassName("sixupdateprojectbtn");
            // let idArray = [];
            // this.selectnumber = 0;
            // for (var i = 0; i < checkDom.length; i++) {
            //     if (checkDom[i].checked) {
            //         idArray.push(checkDom[i].dataset.id);
            //         this.selectnumber++;
            //     }
            // }
            // this.id = idArray;
            if (this.checkednumber == 1) {

                bozhonshowsixupdate.items.targetProject = additem[0].targetProject;
                this.displaystr = "none";
            } else {
                alert("请选择一种配置所属项目！");
            }
        },
    },
})


//项目管理项目配置
var bozhonshowtwonewprojectConfigVersion = new Vue({
    el: '#bozhon-show-two-newprojectConfigVersion',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagenumber: 0,
        pagecode: '',
        pagesize: 10,
        listnumber: '',
        selectnumber: 0,
        items: [],
        setdata: {
            pageNo: '',
            pageSize: '',
            projectId:'',
        },
        id: [],
        additem:[],
        checkednumber:0,
        btndisabled:true,
        projectId:'',
        configFileId:'',
        schdisplaytxt:'none',
    },
    mounted: function () {

    },
    methods: {
        getprojectConfigVersion: function () {
            this.schdisplaytxt = "block";
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            //localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.setdata.pageNo = this.pagecode;
            this.setdata.pageSize = this.pagesize;
            this.setdata.projectId=this.projectId;
            $.ajax({
                url: ipAddress + 'api/getConfigFileByPage',//todo
                type: 'post',
                data: JSON.stringify(_select.setdata),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.schdisplaytxt = "none";
                    _select.items = [];
                    _select.items = json.result.result.list;
                    _select.listnumber = json.result.result.totalItems;
                    _select.pagenumber = _select.listnumber / _select.pagesize + 1;
                },
                error: function (data) {
                    console.log("未取到项目列表");
                    _select.items = [];
                }
            })
        },
         //选中事件
         checkedthing: function (item, event) {
            this.additem=new Array();
            if (event.target.checked) {
                this.additem.push(item);
                this.checkednumber++;
                if (this.checkednumber == 1) {
                    this.btndisabled = false;
                } else if (this.checkednumber > 1) {
                    this.btndisabled = true;
                }
                console.log(this.additem, this.checkednumber);
            } else {
                var list1 = new Array();
                for (var i in this.additem) {
                    if (this.additem[i] != item) {
                        list1.push(this.additem[i]);
                    }
                }
                this.additem = list1;
                this.checkednumber--;
                if (this.checkednumber == 1) {
                    this.btndisabled = false;
                }
                if (this.checkednumber < 1) {
                    this.btndisabled = true;
                }
                console.log(this.additem, this.checkednumber);
            }
        },
        //分页功能
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
        closepage: function () {
            this.displaystr = "none";
        },
        putout:function(){
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            //localStorage.setItem("Url", ipAddress);
            var _select = this;
            this.configFileId=this.additem[0].configFileId;
            $.ajax({
                url: ipAddress + 'api/updateProjectConfVersion',//todo
                type: 'post',
                data: JSON.stringify(_select.configFileId),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.schdisplaytxt = "none";
                   alert("发布成功");
                },
                error: function (data) {
                    console.log("未取到项目列表");
                    _select.items = [];
                }
            })
        },
        opennewpage:function(){
            bozhonshowtwoaddnewprojectConfigVersion.displaystr="block";
        },
    },
})



//项目配置管理新增
var bozhonshowtwoaddnewprojectConfigVersion = new Vue({
    el: '#bozhon-show-two-add-newprojectConfigVersion',
    data: {
        displaystr: 'none',
        configFileid:'',
        configFileversion:'',
        conf:{
            configProjectId:'',
            configFileVersion:'',
        },
        items: {},
        file:'',
    },
    methods: {
        closepage: function () {
            this.displaystr = 'none';
        },
        openupdateobjectpage: function () {
            bozhonshowsixupdateproject.displaystr = 'block';
            bozhonshowsixaddproject.getobject();
        },
        savepage: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            // localStorage.setItem("Url", ipAddress);
            var _select = this;
            var formdata=new FormData();
            this.conf.configFileId = this.configFileid;
            this.conf.configFileVersion = this.configFileversion;
            if (this.conf.configFileVersion== null || this.conf.configFileVersion == "") {
                alert("请输入版本配置！");
            } else {
                formdata.append('conf',JSON.stringify(this.conf));
                formdata.append('file',this.file);
                $.ajax({
                    url: ipAddress + 'api/saveConfigFile',
                    type: 'post',
                    data:_select.formdata,
                    dataType: "json",
                    contentType: false,
                    processData:false,
                    success: function (json) {
                        bozhonshowtwonewprojectConfigVersion.getprojectConfigVersion();
                        _select.displaystr = 'none';
                    },
                    error: function (data) {
                        alert("添加失败");
                    }
                })
            }
        },
        fileup:function(event){
            this.file=new File();
           this.file=event.target.files;
           console.log(this.file);
        }
    },
})



//等待动画
$('#bozhon-show-one-sch').shCircleLoader({
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
$('#bozhon-show-five-sch').shCircleLoader({
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
$('#bozhon-show-six-sch').shCircleLoader({
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
$('#bozhon-show-six-add-project-sch').shCircleLoader({
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
$('#bozhon-show-six-update-project-sch').shCircleLoader({
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

$('#bozhon-show-two-newprojectConfigVersion-sch').shCircleLoader({
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