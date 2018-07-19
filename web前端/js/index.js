
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
            location.href = '../html/configuration.html';
        },
        headmuneexit: function () {
            localStorage.clear("uName");
            localStorage.clear("level");
            location.href = '../html/login.html';
        }
    }
})

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

                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonshowfour.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts4;
                } else if (index == 3) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts5;
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

                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonshowfour.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts7;
                } else if (index == 3) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfour.displaystr = 'block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts8;
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
        }
    }
})

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
        items: [
            {
                type1: '',
                type2: '',
                type3: '',
                type4: '',
                type5: '',
                type6: '',
                type7: '',
                type8: '',
                type9: '',
                type10: '',
            }
        ]
    },
    mounted: function () {
        this.getbozhonshowtwo();
    },
    methods: {
        getbozhonshowtwo: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/dechang/";
            localStorage.setItem("Url", ipAddress);
            $.ajax({
                url: localStorage.getItem("Url") + 'api/',
                type: 'post',
                data: '',
                dataType: "json",
                succsess: function (json) {

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
        items: [],
    },
    mounted: function () {
        this.getbozhonshowthree();
    },
    methods: {
        isstartandstop: function (value, i) {
            if (value.startandstop == true) {
                value.startandstop = false;
            } else if (value.startandstop == false) {
                value.startandstop = true;
            }

        },
        isDelete: function (i) {

        },
        isfresh: function (i) {

        },
        getbozhonshowthree: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/dechang/";
            localStorage.setItem("Url", ipAddress);
            var _select = this;
            $.ajax({
                url: localStorage.getItem("Url") + 'api/robotWorkingServlet',
                type: 'post',
                data: '',
                dataType: "json",
                succsess: function (json) {


                },
                error: function (data) {
                    _select.items = [{ robotName: 1, robotStatus: 1, jobName: 1, time: 1, uuid: 1, startandstop: true }];
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
        items: [
            {
                type1: '',
                type2: '',
                type3: '',
                type4: '',
                type5: '',
            }
        ]
    },
    mounted: function () {
        this.getbozhonshowfour();
    },
    methods: {
        getbozhonshowfour: function () {
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/dechang/";
            localStorage.setItem("Url", ipAddress);
            $.ajax({
                url: localStorage.getItem("Url") + 'api/',
                type: 'post',
                data: '',
                dataType: "json",
                succsess: function (json) {

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

