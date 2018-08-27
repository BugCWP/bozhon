<template>
    <div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>配置系统</el-breadcrumb-item>
                    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
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
              <div id="tableheadtitle">用户列表</div>
              <div id="tableheadbutton">
                  <el-button  size="mini" icon="el-icon-search" @click="getUserList" :loading="btnloadingS">搜索</el-button>
                  <el-button  size="mini" icon="el-icon-refresh" @click="getflash" :loading="btnloadingF">刷新</el-button>
              </div>
              <div id="tableheadinput">
                  <el-input  size="small" prefix-icon="el-icon-search" clearable></el-input>
              </div>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" border height="350px" :default-sort="{prop:'uId'}" v-loading="loading">
                <el-table-column type="selection" ></el-table-column>
                <el-table-column prop="uId" label="ID"  sortable></el-table-column>
                <el-table-column prop="uName" label="用户名" ></el-table-column>
                <el-table-column prop="uRole" label="用户角色" ></el-table-column>
                <el-table-column prop="uLastLoginTime" label="上次登录时间"  sortable></el-table-column>
                <el-table-column prop="uLoginCount" label="登录次数统计"  sortable></el-table-column>
            </el-table>
        </el-col>
    </el-row>
    <el-row>
         <el-col :span="2"><div>&nbsp;</div></el-col>
         <el-col :span="22">
             <div class="block">
                 <el-pagination 
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page="currentPage"
                   :page-sizes="[10, 20, 30, 40]"
                   :page-size="10"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="datasize">
                 </el-pagination>
             </div>
         </el-col>
    </el-row>
    </div>
</template>
<script>
//配置中心用户管理模块
import $ from 'jquery'
export default {
    data(){
        return{
            listdata:[],
            currentPage:1,//当前页面
            datasize:0,//数据条数
            loading:false,//数据加载动画
            btnloadingS:false,
            btnloadingF:false,
            req:{
              page: 1,
              size: 10,
            },
        }
    },
    mounted:function(){
        this.getUserList();
    },
    methods: {
      handleSizeChange(val) {
        this.req.size=val;
        this.getUserList();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.req.page=val;
        this.getUserList();
        console.log(`当前页: ${val}`);
      },
      //刷新
      getflash(){
         this.btnloadingF=true;
         this.req.uName='';
         this.req.page=1;
         this.getUserList();
      },
      //获取用户信息列表
      getUserList(){
        //开启加载动画
        this.loading=true;
        var host=location.hostname;
        var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
        var _select=this;
        $.ajax({
                url: ipAddress + 'api/getUsersByPage',
                type: 'post',
                data: JSON.stringify(_select.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("用户信息列表取到");
                    if ("0" == json.result.size) {
                        alert("当前无符合条件的记录!");
                        _select.items = [];
                    } else {
                        //关闭加载动画
                        _select.loading = false;
                        //清空数据
                        _select.listdata = [];
                        //获取数据
                        _select.listdata = json.result.result.list;
                        //获取数量
                        _select.datasize = json.result.result.totalItems;
                        
                        _select.openmessageSuccess("访问用户列表成功");
                        _select.btnloadingF=false;
                    }
                },
                error: function (data) {
                   
                    _select.openmessageErr("访问用户列表失败");
                    _select.listdata = []; 
                    _select.btnloadingF=false;
                }
        })
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
