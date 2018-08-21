<template>
     <div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>配置系统</el-breadcrumb-item>
                    <el-breadcrumb-item>地区管理</el-breadcrumb-item>
                    <el-breadcrumb-item>国家</el-breadcrumb-item>
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
              <div id="tableheadtitle">国家列表</div>
              <div id="tableheadbutton">
                  <el-button  size="mini" icon="el-icon-search" @click="getNationList">搜索</el-button>
                  <el-button  size="mini" icon="el-icon-refresh" @click="getflash" :loading="btnloading">刷新</el-button>
              </div>
              <div id="tableheadinput">
                  <el-input  size="small" prefix-icon="el-icon-search" clearable v-model="req.nationName"></el-input>
              </div>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" border height="350" :default-sort="{prop:'uId'}" v-loading="loading">
                <el-table-column type="selection" width="40"></el-table-column>
                <el-table-column prop="nationId" label="ID" width="465" sortable></el-table-column>
                <el-table-column prop="nationName" label="国家" width="470"></el-table-column>
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
//配置中心地区管理国家模块
export default {
     data(){
        return{
            listdata:[],
            currentPage:1,//当前页面
            datasize:0,//数据条数
            loading:false,//数据加载动画
            btnloading:false,
            req: {
               page: 1,
               size: 10,
               nationName: '',
            },
        }
    },
    mounted:function(){
        this.getNationList();
    },
    methods: {
      handleSizeChange(val) {
        this.req.size=val;
        this.getNationList();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.req.page=val;
        this.getNationList();
        console.log(`当前页: ${val}`);
      },
      //刷新
      getflash(){
          this.btnloading=true;
         this.req.page=1;
         this.req.nationName='';
         this.getNationList();
      },
      //获取国家列表信息
      getNationList(){
        //开启加载动画
        this.loading=true;
        var host=location.hostname;
        var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
        var _select=this;
         $.ajax({
                    url: ipAddress + 'api/getNationByPage',
                    type: 'post',
                    data: JSON.stringify(_select.req),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        console.log("获取到国家");
                        if ("0" == json.result.result.size) {
                            alert("当前无符合条件的记录!");
                            _select.listdata = [];
                        } else {
                            _select.loading = false;
                            _select.listdata = [];
                            _select.listdata = json.result.result.list;
                            _select.datasize = json.result.result.totalItems;
                            _select.openmessageSuccess("获取国家成功");
                            _select.btnloading=false;
                        }
                    },
                    error: function (data) {
                        _select.openmessageErr("获取国家失败");
                        _select.listdata = [];
                        _select.btnloading=false;
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