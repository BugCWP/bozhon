var bozhonheadpage=new Vue({
    el: '#bozhon-head-page',
    data: {
        logintxt:'账号',
        opacitytxt:0,
        username:'11',
        jumpshow:true,
        imgsrc:'../images/菜单.png',
    },
    methods:{
        headmuneshow:function(){
            if(bozhonheadpage.opacitytxt==0){
               bozhonheadpage.opacitytxt=1;
               bozhonheadpage.imgsrc='../images/菜单 (1).png';
            }else{
               bozhonheadpage.opacitytxt=0;
               bozhonheadpage.imgsrc='../images/菜单.png';
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

var bozhonmuneone = new Vue({
    el: '#bozhon-mune-box',
    data: {
       btntxts:[
           {
              btntxt:'1',
             
           },
           {
               btntxt:'2',
           },
           {
               btntxt:'3',
              
           }
       ],
       activecolor:0,
    },
    methods: {
        isshow: function (index) {
            this.activecolor=index;
            if(index==0){
                bozhonshowone.displaystr = 'block';
                bozhonshowtwo.displaystr = 'none';
                bozhonshowthree.displaystr = 'none';
                
            }else if(index==1){
                  bozhonshowone.displaystr = 'none';
                bozhonshowtwo.displaystr = 'block';
                bozhonshowthree.displaystr = 'none';
            }else if(index==2){
                bozhonshowone.displaystr = 'none';
                bozhonshowtwo.displaystr = 'none';
                bozhonshowthree.displaystr = 'block';
            }
              
                
        }
    }
})

var bozhonshowone = new Vue({
    el: '#bozhon-show-one',
    data: {
        message: '1',
        displaystr:'block',
    },
    methods: {
       
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


