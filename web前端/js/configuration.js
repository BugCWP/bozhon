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
        pagesize: '',
        pageCode: 1,
        pageNumber: 4,
        boxcheck: false,
        items: [],
    },
    methods: {
        getbozhonshowtwo: function () {

            $.ajax({
                url: localStorage.getItem("Url") + 'api/getUsersByPage',
                type: 'post',
                data: '',
                dataType: "json",
                succsess: function (data) {

                },
                error: function (data) {

                }
            })
        },
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

var bozhonshowthree = new Vue({
    el: '#bozhon-show-three',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: '',
        pageCode: 1,
        pageNumber: 4,
        boxcheck: false,
        items: [
            {
                txt1: '',
                txt2: '',
                txt3: '',
                txt4: '',
                txt5: '',
            }
        ]
    },
    methods: {
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
                    url: localStorage.getItem("Url") + 'api/ListProjectByPage',
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
            } else if (this.citylevel == '二级城市') {
                $.ajax({
                    url: localStorage.getItem("Url") + 'api/ListProjectByPage',
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
        pageNumber: 4,
        boxcheck: false,
        items: [
            {
                txt1: '',
                txt2: '',
                txt3: '',
                txt4: '',
            }
        ]
    },
    methods: {
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

var bozhonshowsix = new Vue({
    el: '#bozhon-show-six',
    data: {
        displaystr: 'none',
        pagefirstimg: '../images/Previous page.png',
        pageprevimg: '../images/prev.png',
        pagenextimg: '../images/next.png',
        pagelastimg: '../images/next page.png',
        pagesize: '',
        pageCode: 1,
        pageNumber: 4,
        boxcheck: false,
        items: [
            {
                txt1: '',
                txt2: '',
                txt3: '',
                txt4: '',
                txt5: '',
            }
        ]
    },
    methods: {
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