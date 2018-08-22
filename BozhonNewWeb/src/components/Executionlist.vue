<template>
     <div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>调度系统</el-breadcrumb-item>
                    <el-breadcrumb-item>执行中任务</el-breadcrumb-item>
                    <el-breadcrumb-item>查看</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="25" style="height:30px;"></el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <div id="tablehead">
              <div id="tableheadtitle">执行中任务列表</div>
              <div id="tableheadbutton">
                  <!-- <el-button  size="mini" icon="el-icon-search">搜索</el-button> -->
                  <el-button  size="mini" icon="el-icon-refresh" @click="getflash" :loading="btnloadingF">刷新</el-button>
              </div>
              <!-- <div id="tableheadinput">
                  <el-input  size="small" prefix-icon="el-icon-search" clearable></el-input>
              </div> -->
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" border height="350" :default-sort="{prop:'stamp'}" v-loading="loading">
                <el-table-column prop="robot" label="机器人" width="100" fixed="left" ></el-table-column>
                <el-table-column prop="state" label="状态" width="160"></el-table-column>
                <el-table-column prop="opcode" label="名称" width="160"></el-table-column>
                <el-table-column prop="stamp" label="时间" width="190" sortable></el-table-column>
                <el-table-column prop="uuid" label="UUID" width="190" ></el-table-column>
                <el-table-column label="操作" width="230" fixed="right">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary"  :loading="btnloadingStop" @click="isstorp(scope.row.uuid)">暂停</el-button>
                        <el-button size="mini" type="primary"  :loading="btnloadingStart" @click="isstart(scope.row.uuid)">继续</el-button>
                        <el-popover 
                             placement="top"  
                             width="160" 
                             v-model="visible2">
                            <p>确定要删除吗？</p>
                            <div style="text-align: right; margin: 0">
                                  <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                                  <el-button type="primary" size="mini" @click="isDelete(scope.row.robot)">确定</el-button>
                            </div>
                            <el-button slot="reference" size="mini" icon="el-icon-delete" type="danger" :loading="btnloadingD" @click="visible2=true"></el-button>
                        </el-popover>     
                    </template> 
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
    <el-row>
         <el-col :span="2"><div>&nbsp;</div></el-col>
         <el-col :span="17">
             <div class="block">
                 <el-pagination 
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="[10, 20, 30, 40]"
                   :page-size="datasize"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="datasize">
                 </el-pagination>
             </div>
         </el-col>
    </el-row>
    </div>
</template>
<script>
//调度系统执行中任务模块
export default {
     data(){
        return{
            listdata:[{robot:'1',state:'2',opcode:'3',stamp:'4',uuid:'5'}],
            currentPage:1,//当前页面
            datasize:0,//数据条数
            loading:false,//数据加载动画
            btnloadingF:false,
            btnloadingStart:false,
            btnloadingStop:false,
            btnloadingD:false,
            visible2:false,
            req: {
               Project: '',
            },
            deletereq:{
               RobotName:'',
            },
            stopreq:{
               FleetJobID:'',
            },
        }
    },
    mounted:function(){
        // this.getExecutionList();
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //刷新
      getflash(){
          this.btnloadingF=true;
          this.getExecutionList();
      },
      //获取执行中任务列表
      getExecutionList(){
          //开启加载动画
        this.loading=true;
        var host=location.hostname;
        var ipAddress = "http://" + host + ":8090/";
        var _select=this;
           $.ajax({
                url: ipAddress + 'api/GetUndergoingJobStatusList',
                type: 'post',
                data: JSON.stringify(_select.req),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    _select.loading =false;
                    console.log("Result:" + data.Result);
                    _select.listdata = [];
                    _select.listdata = data.UndergoingJobsSta;
                    _select.datasize=_select.getjsonlength(data.UndergoingJobsSta);
                    _select.btnloadingF=false;
                    _select.openmessageSuccess("执行中任务列表获取成功");
                },
                error: function (msg) {
                    _select.openmessageErr("执行中任务列表获取失败");
                    _select.listdata = [];
                    _select.btnloadingF=false;
                }
            })
      },
       //删除
        isDelete: function (name) {
            this.visible2=false;
            console.log(name);
            this.btnloadingD=true;
            this.deletereq.RobotName=name;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/DeleteRobotJob',
                type: 'post',
                data: JSON.stringify(_select.deletereq),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.getExecutionList();
                    _select.openmessageSuccess("删除任务成功");
                    _select.btnloadingD=false;
                },
                error: function (msg) {
                   _select.openmessageErr("删除任务失败");
                   _select.btnloadingD=false;
                }
            })

        },
        //暂停
        isstorp: function (id) {
            this.stopreq.FleetJobID=id;
            this.btnloadingStop=true;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/PauseRunningJob',
                type: 'post',
                data: JSON.stringify(_select.stopreq),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.getExecutionList();
                    _select.openmessageSuccess("暂停任务成功");
                    _select.btnloadingStop=false;
                },
                error: function (msg) {
                    _select.openmessageErr("暂停任务失败");
                    _select.btnloadingStop=false;
                }
            })

        },
        //开始
        isstart: function (id) {
            this.stopreq.FleetJobID=id;
            this.btnloadingStart=true;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/ContinuePausedJob',
                type: 'post',
                data: JSON.stringify(_select.stopreq),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.getExecutionList();
                    _select.openmessageSuccess("继续任务成功");
                    _select.btnloadingStart=false;
                },
                error: function (msg) {
                    _select.openmessageErr("继续任务失败");
                    _select.btnloadingStart=false;
                }
            })
        },
      //计算json数组长度
       getjsonlength(json){
          var jsonlength=0;
          for(var i in json){
            jsonlength++;
          }
          return jsonlength;
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
    },
    
}
</script>
<style>
#tablehead{
    width: 100%;
    height: 50px;
    background-color: #409eff;
}
#tableheadtitle{
    color: white;
    position: relative;
    left: 10px;
    top: 15px;
}
#tableheadinput{
    width: 180px;
    height: 30px;
    position: relative;
    top: -12px;
    right: 20px;
    float: right;
}
#tableheadbutton{
   float: right;
   position: relative;
   top: -12px;
   right: 10px;
   font-size: 20px;
}
</style>
