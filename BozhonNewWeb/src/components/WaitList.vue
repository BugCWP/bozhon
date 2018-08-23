<template>
     <div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>调度系统</el-breadcrumb-item>
                    <el-breadcrumb-item>等待中任务</el-breadcrumb-item>
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
              <div id="tableheadtitle">等待中任务列表</div>
              <div id="tableheadbutton">
                  <el-button  size="mini" icon="el-icon-refresh" @click="getflash" :loading="btnloadingF">刷新</el-button>
              </div>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" border height="350" :default-sort="{prop:'stamp'}" v-loading="loading">
                <el-table-column prop="stamp" label="时间" width="100" ></el-table-column>
                <el-table-column prop="uuid" label="UUID" width="160"></el-table-column>
                <el-table-column prop="opcode" label="名称" width="160"></el-table-column>
                <el-table-column prop="status" label="状态" width="190" sortable></el-table-column>
                <el-table-column prop="level" label="等级" width="140" ></el-table-column>
                <el-table-column label="操作" width="270" fixed="right">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" icon="el-icon-upload2" :loading="btnloadingUp" @click="isup(scope.row.uuid)"></el-button>
                        <el-button size="mini" type="primary" icon="el-icon-download" :loading="btnloadingDown" @click="isdown(scope.row.uuid)"></el-button>
                        <el-button size="mini" icon="" type="primary" :loading="btnloadingTop" @click="istop(scope.row.uuid)">置顶</el-button>
                        
                         <el-popover placement="top"  width="160" v-model="visible2">
                            <p>确定要删除吗？</p>
                            <div style="text-align: right; margin: 0">
                                  <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                                  <el-button type="primary" size="mini" @click="isDelete(scope.row.uuid)">确定</el-button>
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
import $ from 'jquery'
//调度系统等待中任务模块
export default {
 data(){
        return{
            listdata:[{stamp:'1',uuid:'2',opcode:'3',status:'4',level:'5'}],
            currentPage:1,//当前页面
            datasize:0,//数据条数
            loading:false,//数据加载动画
            btnloadingF:false,
            btnloadingUp:false,
            btnloadingDown:false,
            btnloadingTop:false,
            btnloadingD:false,
            visible2:false,
            req:{
                Project:'',
            },
            uuidreq:{
                FleetJobID:'',
            },
            upreq:{
                FleetJobID:'',
                DeltaQueuePosition:-1,
            },
            downreq:{
                FleetJobID:'',
                DeltaQueuePosition:1,
            },
            topreq:{
                FleetJobID:'',
                QueuePosition:0,
            }
        }
    },
    mounted:function(){
        //  this.getWaitList();
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
          this.getWaitList();
      },
      //获取等待列表信息
      getWaitList(){
            //开启加载动画
        this.loading=true;
        var host=location.hostname;
        var ipAddress = "http://" + host + ":8090/";
        var _select=this;
        $.ajax({
                url: ipAddress + 'api/GetRemainningJobStatusList',
                type: 'post',
                data: JSON.stringify(_select.req),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    _select.loading = false;
                    console.log("Result:" + data.Result);
                    _select.listdata = [];
                    _select.listdata = data.RemainningJobsStatusList;
                    _select.datasize=_select.getjsonlength(data.RemainningJobsStatusList);
                    _select.openmessageSuccess("等待中任务列表获取成功");
                    _select.btnloadingF=false;
                },
                error: function (msg) {
                    _select.openmessageErr("等待中任务列表获取失败");
                    _select.listdata = [];
                    _select.btnloadingF=false;
                }
            })
      },
      //删除
        isDelete: function (id) {
            this.visible2=false;
            this.btnloadingD=true;
            this.uuidreq.FleetJobID=id;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
                    $.ajax({
                        url: ipAddress + 'api/DeleteRemainingJob',
                        type: 'post',
                        data: JSON.stringify(_select.uuidreq),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (data) {
                            console.log("Result:" + data.Result);
                            _select.getWaitList();
                            _select.openmessageSuccess("删除任务成功");
                            _select.btnloadingD=false;
                            
                        },
                        error: function (msg) {
                            _select.openmessageErr("删除任务失败");
                            _select.btnloadingD=false;
                        }
                    })
        },
        //上移
        isup: function (id) {
            this.uuidreq.FleetJobID=id;
            this.btnloadingUp=true;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/MoveRemainingJobQueuePosition',
                type: 'post',
                data: JSON.stringify(_select.upreq),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.getWaitList();
                    _select.openmessageSuccess("上移任务成功");
                    _select.btnloadingUp=false;
                },
                error: function (msg) {
                    _select.openmessageErr("上移任务失败");
                    _select.btnloadingUp=false;
                }
            })
        },
        //下移
        isdown: function (id) {
            this.btnloadingDown=true;
            this.downreq.FleetJobID=id;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/MoveRemainingJobQueuePosition',
                type: 'post',
                data: JSON.stringify(_select.downreq),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.getWaitList();
                   _select.openmessageSuccess("下移任务成功");
                   _select.btnloadingDown=false;
                },
                error: function (msg) {
                   _select.openmessageErr("下移任务失败");
                   _select.btnloadingDown=false;
                }
            })
        },
        //置顶
        istop: function (id) {
            this.btnloadingTop=true;
            this.topreq.FleetJobID=id;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/SetRemainingJobQueuePosition',
                type: 'post',
                data: JSON.stringify(_select.topreq),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.getWaitList();
                   _select.openmessageSuccess("置顶任务成功");
                   _select.btnloadingTop=false;
                },
                error: function (msg) {
                    _select.openmessageErr("置顶任务失败");
                    _select.btnloadingTop=false;
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
