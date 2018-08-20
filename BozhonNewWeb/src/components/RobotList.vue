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
                      <div class="tableheadtitle">用户列表</div>
                      <div id="tableheadbutton">
                         <el-button  size="mini" icon="el-icon-search">搜索</el-button>
                         <el-button  size="mini" icon="el-icon-refresh">刷新</el-button>
                      </div>
                      <div id="tableheadinput">
                         <el-input  size="small" prefix-icon="el-icon-search" clearable></el-input>
                      </div>
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
                                     <el-button size="mini" type="primary" icon="el-icon-delete">清错</el-button>
                                     <el-button size="mini" type="primary" icon="el-icon-delete">删除任务</el-button>
                                     <el-button size="mini" type="primary" icon="el-icon-delete">清楚区域</el-button>
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
                         :page-size="100"
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
      datasize: 200, //数据条数
      loading: false, //数据加载动画
      activeName: "first",
      valuemoshi:true,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
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
