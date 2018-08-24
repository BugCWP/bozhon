<template>
    <div>
        <div id="Graph1" class="graphL"></div>
        <div id="Graph2" class="graph"></div>
        <div id="Graph3" class="graph"></div>
        <div id="Graph4" class="graph"></div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{
        getdata(){
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
        },
        drawGraph(){

        },
        //打开错误提示功能
       openmessageErr(msg){
         this.$message({
            showClose: true,
            message: msg,
            type: 'error'
           });
        },
       //打开成功提示功能
       openmessageSuccess(msg){
          this.$message({
            showClose: true,
            message: msg,
            type: 'success'
          });
        },
    }
}
</script>

<style>
.graphL{
   float: left;
   width: 920px;
   height: 200px;
   border: 0.5px dotted #e0dcdc;
   margin-right: 10px;
   margin-top: 10px;
}
.graph{
   float: left;
   width: 300px;
   height: 200px;
    border:0.5px dotted #e0dcdc;
     margin-right: 10px;
   margin-top: 10px;
}
</style>
