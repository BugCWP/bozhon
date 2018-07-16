var bozhonheadpage = new Vue({
    el: '#bozhon-head-page',
    data: {
        logintxt:'账号',
        displaytxt:'none',
        username:'崔永元',
        jumpshow:true,
        imgsrc:'../images/iconfont-yonghu.png',
        bordertxt:false,
        projects:[
            {
                project:'bozhon',
            },
            {
                project:'bozhoning',
            }
        ],
    },
    methods: {
        headmuneshow:function(){
            if(bozhonheadpage.displaytxt=='none'){
               bozhonheadpage.displaytxt='block';
               bozhonheadpage.bordertxt=true;
            }else{
               bozhonheadpage.displaytxt='none';
              bozhonheadpage.bordertxt=false;
            }
        },
        headmunejumpshow:function(){
              
        },
        headmunejump:function(){
            
        },
        headmuneexit:function(){
            
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
            },    {
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
        heightsize:100,
        secondmuneonetxt:false,
        secondmunetwotxt:false,
        secondmunethreetxt:false,
    },
    methods: {
        isshow: function (index) {
            this.activecolor = index;
            if (bozhonmunebox.boxclasstxt == false) {
                if (index == 0) {
                    bozhonshowone.displaystr = 'block';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfive.displaystr='none';
                    bozhonshowsix.displaystr='none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts1;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                } else if (index == 1) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'block';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfive.displaystr='none';
                    bozhonshowsix.displaystr='none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts2;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonshowfive.displaystr='none';
                    bozhonshowsix.displaystr='none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts3;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                }else if (index == 3) {
                    if(this.heightsize==3){
                        this.heightsize=100;
                    }else{
                        this.heightsize=3;
                    }
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts11;
                }
                else if (index == 4) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfive.displaystr='block';
                    bozhonshowsix.displaystr='none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts22;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                }else if (index == 5) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfive.displaystr='none';
                    bozhonshowsix.displaystr='block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts33;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                }
            }else{
                if (index == 0) {
                    bozhonshowone.displaystr = 'block';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfive.displaystr='none';
                    bozhonshowsix.displaystr='none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts4;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                } else if (index == 1) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'block';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfive.displaystr='none';
                    bozhonshowsix.displaystr='none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts5;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                } else if (index == 2) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'block';
                    bozhonshowfive.displaystr='none';
                    bozhonshowsix.displaystr='none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts6;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                }else if (index == 3) {
                    if(this.heightsize==3){
                        this.heightsize=100;
                    }else{
                        this.heightsize=3;
                    }
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts44;
                   
                }
                else if (index == 4) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfive.displaystr='block';
                    bozhonshowsix.displaystr='none';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts55;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
                }else if (index == 5) {
                    bozhonshowone.displaystr = 'none';
                    bozhonshowtwo.displaystr = 'none';
                    bozhonshowthree.displaystr = 'none';
                    bozhonshowfive.displaystr='none';
                    bozhonshowsix.displaystr='block';
                    bozhonmunebox.btntxts = bozhonmunebox.btntxts66;
                    this.secondmuneonetxt=false;
                    this.secondmunetwotxt=false;
                    this.secondmunethreetxt=false;
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
                 }else if(bozhonmunebox.activecolor==3){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts11;
                 }else if(bozhonmunebox.activecolor==4){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts22;
                 }else if(bozhonmunebox.activecolor==5){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts33;
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
                 }else if(bozhonmunebox.activecolor==3){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts44;
                 }else if(bozhonmunebox.activecolor==4){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts55;
                 }else if(bozhonmunebox.activecolor==5){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts66;
                 }
            }
        },
        secondmunechange:function(){
            
        },
        issecondshow:function(index){
          this.activecolor=3;
          if(bozhonmunebox.boxclasstxt==false){
            bozhonmunebox.btntxts=bozhonmunebox.btntxts11;
             if(index==1){
                this.secondmuneonetxt=true;
                this.secondmunetwotxt=false;
                this.secondmunethreetxt=false;
             }else if(index==2){
                this.secondmuneonetxt=false;
                this.secondmunetwotxt=true;
                this.secondmunethreetxt=false;
             }else if(index==3){
                this.secondmuneonetxt=false;
                this.secondmunetwotxt=false;
                this.secondmunethreetxt=true;
             }
          }else{
            bozhonmunebox.btntxts=bozhonmunebox.btntxts44;
              if(index==1){
                this.secondmuneonetxt=true;
                this.secondmunetwotxt=false;
                this.secondmunethreetxt=false;
             }else if(index==2){
                this.secondmuneonetxt=false;
                this.secondmunetwotxt=true;
                this.secondmunethreetxt=false;
             }else if(index==3){
                this.secondmuneonetxt=false;
                this.secondmunetwotxt=false;
                this.secondmunethreetxt=true;
             }
          }
        }
    },
})

var bozhonshowone = new Vue({
    el: '#bozhon-show-one',
    data: {
        displaystr: 'block',
        items:[
            {
                txt1:'',
                txt2:'',
                txt3:'',
                txt4:'',
                txt5:'',
            }
        ]
    },
    methods: {

    }
})

var bozhonshowtwo = new Vue({
    el: '#bozhon-show-two',
    data: {
        displaystr: 'none',
        items:[
            {
                txt1:'',
                txt2:'',
                txt3:'',
                txt4:'',
                txt5:'',
                txt6:'',
                txt7:'',
                txt8:'',
                txt9:'',
                txt10:'',
            }
        ]
    },
    methods: {
         
    }
})
var bozhonshowthree = new Vue({
    el: '#bozhon-show-three',
    data: {
        displaystr: 'none',
        items:[
            {
                txt1:'',
                txt2:'',
                txt3:'',
                txt4:'',
                txt5:'',
            }
        ]
    },
    methods: {

    }
})
var bozhonshowfive = new Vue({
    el: '#bozhon-show-five',
    data: {
        displaystr: 'none',
        items:[
            {
                txt1:'',
                txt2:'',
                txt3:'',
                txt4:'',
                txt5:'',
            }
        ]
    },
    methods: {

    }
})
var bozhonshowsix = new Vue({
    el: '#bozhon-show-six',
    data: {
        displaystr: 'none',
        items:[
            {
                txt1:'',
                txt2:'',
                txt3:'',
                txt4:'',
                txt5:'',
            }
        ]
    },
    methods: {

    }
})