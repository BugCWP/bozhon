<template>
<div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>调度系统</el-breadcrumb-item>
                    <el-breadcrumb-item>机器人列表</el-breadcrumb-item>
                    <el-breadcrumb-item>查看</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="25" style="height:10px;"></el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
                <el-tab-pane label="列表操作" name="first">
                   <div class="tablehead">
                      <div class="tableheadtitle">机器人列表</div>
                      <div id="tableheadbutton">
                         <!-- <el-button  size="mini" icon="el-icon-search">搜索</el-button> -->
                         <el-button  size="mini" icon="el-icon-refresh" @click="getflash" :loading="btnloadingF">刷新</el-button>
                      </div>
                      <!-- <div id="tableheadinput">
                         <el-input  size="small" prefix-icon="el-icon-search" clearable></el-input>
                      </div> -->
                   </div>
                   <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" height="335"  v-loading="loading">
                       <el-table-column type="expand">
                            <template slot-scope="props">
                               <el-form label-position="left" inline class="demo-table-expand">
                                  <el-form-item label="机器人">
                                     <span>{{ props.row.name }}</span>
                                 </el-form-item>
                                 <el-form-item label="在线">
                                     <span>{{ props.row.online }}</span>
                                </el-form-item>
                                <el-form-item label="电池电量">
                                     <span>{{ props.row.battery_level }}</span>
                                </el-form-item>
                                <el-form-item label="急停状态">
                                     <span>{{ props.row.emergency }}</span>
                                </el-form-item>
                                <el-form-item label="诊断状态">
                                     <span>{{ props.row.diagnostic_state }}</span>
                                </el-form-item>
                                <el-form-item label="任务状态">
                                     <span>{{ props.row.task_state }}</span>
                                </el-form-item>
                                <el-form-item label="任务名称">
                                     <span>{{ props.row.task_description }}</span>
                                </el-form-item>
                                 <el-form-item label="控制模式">
                                     <span>{{ props.row.control_mode }}</span>
                                     <el-switch v-model="valuemoshi" 
                                      active-text="开"
                                      inactive-text="关"></el-switch>
                                </el-form-item>
                                 <el-form-item label="申请区域">
                                     <span>{{ props.row.required_access_area }}</span>
                                </el-form-item>
                                 <el-form-item label="批复区域">
                                     <span>{{ props.row.approved_access_area }}</span>
                                </el-form-item>
                                <el-form-item label="操作:">
                                     <el-button size="mini" type="primary" icon="el-icon-delete" @click="isClearWorry(props.row.name)" :loading="btnloadingCW">清错</el-button>
                                     <el-button size="mini" type="primary" icon="el-icon-delete" @click="isDelete(props.row.name)" :loading="btnloadingD">删除任务</el-button>
                                     <el-button size="mini" type="primary" icon="el-icon-delete" @click="isClearArea(props.row.name)" :loading="btnloadingCA">清除区域</el-button>
                                </el-form-item>
                              </el-form>
                            </template>
                       </el-table-column>
                       <el-table-column prop="name" label="机器人" width="100" ></el-table-column>
                       <el-table-column prop="online" label="在线" width="80"></el-table-column>
                       <el-table-column prop="battery_level" label="电池电量" width="80"></el-table-column>
                       <el-table-column prop="emergency" label="急停状态" width="90" ></el-table-column>
                       <el-table-column prop="diagnostic_state" label="诊断状态" width="90" ></el-table-column>
                       <el-table-column prop="task_state" label="任务状态" width="100" ></el-table-column>
                       <el-table-column prop="task_description" label="任务名称" width="100" ></el-table-column>
                       <el-table-column prop="control_mode" label="控制模式" width="100" ></el-table-column>
                       <el-table-column prop="required_access_area" label="申请区域" width="100" ></el-table-column>
                       <el-table-column prop="approved_access_area" label="批复区域" width="100" ></el-table-column>
                   </el-table>
                   <div class="block">
                      <el-pagination 
                         @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                         :current-page="currentPage"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size='datasize'
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="datasize">
                     </el-pagination>
                   </div>
                </el-tab-pane>
                <el-tab-pane label="执行操作" name="second">
                    <div class="tablehead">
                       <div class="tableheadtitle">执行列表</div>
                    </div>
                    <div>
                        <el-card class="box-card">
                           <div slot="header" class="clearfix">
                              <span>执行脚本</span>
                              <el-button style="float: right;" size="small" type="primary">确认</el-button>
                            </div>
                           <div class="text item">
                               <span>机器人名：</span>
                               <el-input style="width:300px;height:30px;"></el-input><br/><br/><br/>
                               <span>脚本路径：</span>
                               <el-input style="width:300px;height:30px;"></el-input>
                            </div>
                        </el-card>
                        <el-card class="box-card">
                           <div slot="header" class="clearfix">
                              <span>执行工作</span>
                              <el-button style="float: right;" size="small" type="primary">确认</el-button>
                            </div>
                           <div class="text item">
                                <span>任务参数：</span>
                                <el-input type="textarea" :rows="3" placeholder="请输入内容" ></el-input>
                            </div>
                        </el-card>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
    </div>
</template>

<script>
//调度系统机器人列表模块
export default {
  data() {
    return {
      listdata: [{name:1,online:2,battery_level:3,emergency:4,diagnostic_state:5,task_state:6,task_description:7,control_mode:8,required_access_area:9,approved_access_area:10}],
      currentPage: 1, //当前页面
      datasize: 0, //数据条数
      loading: false, //数据加载动画
      btnloadingCW:false,//按钮加载效果动画
      btnloadingCA:false,
      btnloadingD:false,
      btnloadingF:false,
      activeName: "first",
      valuemoshi:true,
      req:{
        Project: '',
      },
      deletereq:{
          RobotName:'',
      },
    };
  },
  mounted:function(){
      this.getRobotList();
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
         this.getRobotList();
    },
    //获取机器人信息列表
    getRobotList(){
        //开启加载动画
        this.loading=true;
        var host=location.hostname;
        var ipAddress = "http://" + host + ":8090/";
        var _select=this;
        $.ajax({
                url: ipAddress + 'api/GetRobotStatusList',
                type: 'post',
                data: JSON.stringify(_select.req),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.loading = false;
                    _select.listdata = [];
                    _select.listdata = data.RobotStatusList;
                    _select.datasize=_select.getjsonlength(data.RobotStatusList);
                    _select.btnloadingF=false;
                },
                error: function (msg) {
                    _select.openmessageErr("机器人列表获取失败");
                    _select.listdata = [];
                    _select.btnloadingF=false;
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
     //删除功能
        isDelete: function (name) {
            this.btnloadingD=true;
            this.deletereq.RobotName=name;
            var host = location.hostname;
            console.log(name);
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
                    _select.getRobotList();
                    _select.openmessageSuccess("删除任务成功");
                    _select.btnloadingD=false;
                },
                error: function (msg) {
                    _select.openmessageErr("删除任务失败");
                    _select.btnloadingD=false;
                }
            })
        },
        //清错
        isClearWorry: function (name) {
            this.btnloadingCW=true;//按钮动画效果开始
            this.deletereq.RobotName=name;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/ClearRobotError',
                type: 'post',
                data: JSON.stringify(_select.deletereq),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.getRobotList();
                    _select.openmessageSuccess("清除错误任务失败");
                    _select.btnloadingCW=false;//按钮效果清除
                },
                error: function (msg) {
                    _select.openmessageErr("清除错误任务失败");
                    _select.btnloadingCW=false;//按钮效果清除
                }
            })
        },
        //清除区域
        isClearArea: function (name) {
           this.btnloadingCA=true;
            this.deletereq.RobotName=name;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8090/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/FreeRobotAccessArea',
                type: 'post',
                data: JSON.stringify(_select.deletereq),
                dataType: "json",
                contentType: "application/json",
                success: function (data) {
                    console.log("Result:" + data.Result);
                    _select.getRobotList();
                    _select.openmessageSuccess("清除区域任务失败");
                    _select.btnloadingCA=false;
                },
                error: function (msg) {
                    _select.openmessageErr("清除区域任务失败");
                    _select.btnloadingCA=false;
                }
            })
        },
  }
};
</script>

<style>
.tablehead {
  width: 100%;
  height: 50px;
  background-color: #409eff;
}
.tableheadtitle {
  color: white;
  position: relative;
  left: 10px;
  top: 15px;
}
#tableheadinput {
  width: 180px;
  height: 30px;
  position: relative;
  top: -12px;
  right: 20px;
  float: right;
}
#tableheadbutton {
  float: right;
  position: relative;
  top: -12px;
  right: 10px;
  font-size: 20px;
}
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    float: left;
    margin-right: 15px;
    margin-top:20px;
  }
</style>
