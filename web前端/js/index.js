var bozhonheadpage=new Vue({
    el: '#bozhon-head-page',
    data: {
        logintxt:'账号',
        opacitytxt:0,
        username:'11',
        jumpshow:true,
        imgsrc:'../images/iconfont-yonghu.png',
        bordertxt:false,
    },
    methods:{
        headmuneshow:function(){
            if(bozhonheadpage.opacitytxt==0){
               bozhonheadpage.opacitytxt=1;
               bozhonheadpage.bordertxt=true;
            }else{
               bozhonheadpage.opacitytxt=0;
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
       btntxts:[
           {
              btntxt:'控制台',
              imgsrc:'../images/控制台 (1).png',
           },
           {
               btntxt:'机器人列表',
               imgsrc:'../images/机器人.png',
           },
           {
               btntxt:'执行中任务',
               imgsrc:'../images/执行.png',
           },
           {
               btntxt:'等待中任务',
               imgsrc:'../images/等待中.png',
           }
       ],
       btntxts1:[
        {
            btntxt:'控制台',
            imgsrc:'../images/控制台 (1).png',
         },
         {
             btntxt:'机器人列表',
             imgsrc:'../images/机器人.png',
         },
         {
             btntxt:'执行中任务',
             imgsrc:'../images/执行.png',
         },
         {
             btntxt:'等待中任务',
             imgsrc:'../images/等待中.png',
         }
       ],
       btntxts2:[
        {
            btntxt:'',
            imgsrc:'../images/控制台 (1).png',
         },
         {
             btntxt:'',
             imgsrc:'../images/机器人.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/执行.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/等待中.png',
         }        
       ],
       btntxts3:[
        {
            btntxt:'控制台',
            imgsrc:'../images/控制台.png',
         },
         {
             btntxt:'机器人列表',
             imgsrc:'../images/机器人 (1).png',
         },
         {
             btntxt:'执行中任务',
             imgsrc:'../images/执行.png',
         },
         {
             btntxt:'等待中任务',
             imgsrc:'../images/等待中.png',
         }        
       ],
       btntxts4:[
        {
            btntxt:'控制台',
            imgsrc:'../images/控制台.png',
         },
         {
             btntxt:'机器人列表',
             imgsrc:'../images/机器人.png',
         },
         {
             btntxt:'执行中任务',
             imgsrc:'../images/执行 (1).png',
         },
         {
             btntxt:'等待中任务',
             imgsrc:'../images/等待中.png',
         }        
       ],
       btntxts5:[
        {
            btntxt:'控制台',
            imgsrc:'../images/控制台.png',
         },
         {
             btntxt:'机器人列表',
             imgsrc:'../images/机器人.png',
         },
         {
             btntxt:'执行中任务',
             imgsrc:'../images/执行.png',
         },
         {
             btntxt:'等待中任务',
             imgsrc:'../images/等待中 (1).png',
         }        
       ],
       btntxts6:[
        {
            btntxt:'',
            imgsrc:'../images/控制台.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/机器人 (1).png',
         },
         {
             btntxt:'',
             imgsrc:'../images/执行.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/等待中.png',
         }        
       ],
       btntxts7:[
        {
            btntxt:'',
            imgsrc:'../images/控制台.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/机器人.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/执行 (1).png',
         },
         {
             btntxt:'',
             imgsrc:'../images/等待中.png',
         }        
       ],
       btntxts8:[
        {
            btntxt:'',
            imgsrc:'../images/控制台.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/机器人.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/执行.png',
         },
         {
             btntxt:'',
             imgsrc:'../images/等待中 (1).png',
         }        
       ],
       activecolor:0,
       boxclasstxt:false,
    },
    methods: {
        isshow: function (index) {
            this.activecolor=index;
            if(index==0){
                bozhonshowone.displaystr = 'block';
                bozhonshowtwo.displaystr = 'none';
                bozhonshowthree.displaystr = 'none';
                bozhonshowfour.displaystr='none';
                bozhonmunebox.btntxts=bozhonmunebox.btntxts1;
            }else if(index==1){
                bozhonshowone.displaystr = 'none';
                bozhonshowtwo.displaystr = 'block';
                bozhonshowthree.displaystr = 'none';
                bozhonshowfour.displaystr='none';
                bozhonmunebox.btntxts=bozhonmunebox.btntxts3;

            }else if(index==2){
                bozhonshowone.displaystr = 'none';
                bozhonshowtwo.displaystr = 'none';
                bozhonshowthree.displaystr = 'block';
                bozhonshowfour.displaystr='none';
                bozhonmunebox.btntxts=bozhonmunebox.btntxts4;
            }else if(index==3){
                bozhonshowone.displaystr = 'none';
                bozhonshowtwo.displaystr = 'none';
                bozhonshowthree.displaystr = 'none';
                bozhonshowfour.displaystr='block';
                bozhonmunebox.btntxts=bozhonmunebox.btntxts5;
            }
        },
        munechange:function(){
            if(bozhonmunebox.boxclasstxt==true){
                 bozhonmunebox.boxclasstxt=false;
                 if(bozhonmunebox.activecolor==0){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts1;
                 }else if(bozhonmunebox.activecolor==1){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts3;
                 }else if(bozhonmunebox.activecolor==2){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts4;
                 }else if(bozhonmunebox.activecolor==3){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts5;
                 }
                 
            }else{
                bozhonmunebox.boxclasstxt=true;
                bozhonmunebox.btntxts=bozhonmunebox.btntxts2;
                if(bozhonmunebox.activecolor==0){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts2;
                 }else if(bozhonmunebox.activecolor==1){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts6;
                 }else if(bozhonmunebox.activecolor==2){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts7;
                 }else if(bozhonmunebox.activecolor==3){
                    bozhonmunebox.btntxts=bozhonmunebox.btntxts8;
                 }
                 
            }
        }
    }
})


var bozhonshowone = new Vue({
    el: '#bozhon-show-one',
    data: {
        message: '1',
        displaystr:'block',
        imgsrc1:'../images/箭头.png',
        imgsrc2:'../images/箭头.png',
        imgsrc2:'../images/箭头.png',
    },
    methods: {
        isshowpart:function(i){
             if(i==1){

             }else if(i==2){

             }else if(i==3){

             }
        }
    }
})

var bozhonshowtwo = new Vue({
    el: '#bozhon-show-two',
    data: {
        message: '2',
        displaystr:'none',
    },
    methods: {
       
    }
})

var bozhonshowthree = new Vue({
    el: '#bozhon-show-three',
    data: {
        message: '3',
        displaystr: 'none',
    },
    methods: {
       
    }
})

var bozhonshowfour = new Vue({
    el: '#bozhon-show-four',
    data: {
        message: '4',
        displaystr: 'none',
    },
    methods: {
       
    }
})

