<template>
    <div class="charts">
       <h3></h3>
        <div id="main" style=" width:600px; height:400px;marginLeft:200px"></div>  
  </div>
</template>
<script>
import $ from 'jquery'
import echarts from 'echarts';   //这里是你必须的，千万不能忘记！
  export default {  
      data() {  
            return {  
                namelist:[],
                numberlist:[],
                // 初始化空对象  
                chart: null,  
                // 初始化图表配置  
                opinion: ['A', 'B', 'C', 'D', 'E'],  
                opinionData: [{  
                    value: 26,  
                    name: 'A'  
                }, {  
                    value: 31,  
                    name: 'B'  
                }, {  
                    value: 18,  
                    name: 'C'  
                }, {  
                    value: 28,  
                    name: 'D' 
                }, {  
                    value: 21,  
                    name: 'E'  
                }]  
            }  
        },  
        methods: {  
            // 绘图  
            drawGraph(id) {  
                // 绘图方法  
                this.chart = echarts.init(document.getElementById(id))  
                    // 皮肤添加同一般使用方式  
                this.chart.showLoading();  
                    // 返回到data中  
                var that = this ; 
                var host = location.hostname;
               var ipAddress = "http://" + host + ":8090/";
               var setdata = {
                   Project: '',
               };
               this.namelist=new Array();
               this.numberlist=new Array();
              $.ajax({
                url: ipAddress + 'api/GetRobotTypeList',
                type: 'post',
                data: JSON.stringify(setdata),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                   var items = data.RobotTypeList;
                   for(var i in items){
                       that.namelist.push(items[i].label);
                       that.numberlist.push(items[i].data);
                   }
                   that.opinion=that.namelist;
                   console.log(that.opinion);
                   that.opinionData=new Array();
                   for(var i in that.namelist){
                       that.opinionData[i].name=that.namelist[i];
                       that.opinionData[i].value=that.numberlist[i];
                   }
                   console.log(that.opinionData);
                },
                error: function (msg) {
                    that.openmessageErr("饼状图信息获取失败");
                }
            })
                this.chart.setOption({  
                    title: {  
                        text: '机器人种类数量统计',  
                        subtext: '博众机器人',  
                        x: 'center'  
                    },  
                    tooltip: {  
                        trigger: 'item',  
                        formatter: "{a} <br/>{b} : {c} ({d}%)"  
                    },  
                    legend: {  
                        x: 'center',  
                        y: 'bottom',  
                        data: this.opinion // this  
                    },  
                    toolbox: {  //右侧小标记
                        show: true,  
                        feature: {  
                            mark: {  
                                show: true  
                            },  
                            dataView: {  
                                show: true,  
                                readOnly: false  
                            },  
                            magicType: {  
                                show: true,  
                                type: ['pie']  
                            },  
                            restore: {  
                                show: true  
                            },  
                            saveAsImage: {  
                                show: true  
                            }  
                        }  
                    },  
                    calculable: true,  
                    series: [{  
                        name: '种类',  
                        type: 'pie',  
                        // 内圆半径，外圆半径  
                        radius: [30, 150],  
                        // 位置，左右，上下  
                        center: ['50%', '50%'],  
                        roseType: 'area',  
                        data: this.opinionData, // this  
                    }]  
                })  
                this.chart.hideLoading()  
            }  ,
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
        },  
        mounted() {  
            this.$nextTick(function() {  
                this.drawGraph('main')  
            })  
        }  
}
</script>
<style>

</style>
