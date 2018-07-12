var bozhonheadpage = new Vue({
    el: '#bozhon-head-page',
    data: {

    },
    methods: {

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
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts1;
                } else if (index == 1) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'block';
                    bozhonshowthree.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts2;
                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts3;
                }
            }else{
                if (index == 0) {
                    bozhonshowone.displaystr = 'block';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts4;
                } else if (index == 1) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'block';
                    bozhonshowthree.displaystr = 'none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts5;
                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts6;
                }
            }

        },
        munechange:function(){
            if(bozhonmunebox.boxclasstxt==true){
                 bozhonmunebox.boxclasstxt=false;
                 $("#bozhon-show-box").removeClass("bozhon-show-boxchange");
                 if(bozhonmunebox.activecolor==0){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts1;
                 }else if(bozhonmunebox.activecolor==1){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts2;
                 }else if(bozhonmunebox.activecolor==2){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts3;
                 }
            }else{
                bozhonmunebox.boxclasstxt=true;
                bozhonmunebox.btntxts=bozhonmunebox.btntxts2;
                $("#bozhon-show-box").addClass("bozhon-show-boxchange");
                if(bozhonmunebox.activecolor==0){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts4;
                 }else if(bozhonmunebox.activecolor==1){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts5;
                 }else if(bozhonmunebox.activecolor==2){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts6;
                 }
            }
        },
    },
})

var bozhonshowone = new Vue({
    el: '#bozhon-show-one',
    data: {
        displaystr: 'block',
    },
    methods: {

    }
})

var bozhonshowtwo = new Vue({
    el: '#bozhon-show-two',
    data: {
        displaystr: 'none',
    },
    methods: {

    }
})
var bozhonshowthree = new Vue({
    el: '#bozhon-show-three',
    data: {
        displaystr: 'none',
    },
    methods: {

    }
})