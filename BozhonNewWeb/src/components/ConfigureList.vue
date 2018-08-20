<template>
     <div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>配置系统</el-breadcrumb-item>
                    <el-breadcrumb-item>配置管理</el-breadcrumb-item>
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
              <div id="tableheadtitle">配置列表</div>
              <div id="tableheadbutton">
                  <el-button  size="mini" icon="el-icon-search">查询</el-button>
                  <el-button  size="mini" >新增</el-button>
                  <el-button  size="mini" >修改</el-button>
                  <el-button  size="mini" icon="el-icon-delete"></el-button>
                  <el-button  size="mini" icon="el-icon-refresh"></el-button>
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
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" border height="350" :default-sort="{prop:'uId'}" v-loading="loading">
                <el-table-column type="selection" width="40"></el-table-column>
                <el-table-column prop="confId" label="ID" width="200" sortable></el-table-column>
                <el-table-column prop="confFileName" label="配置文件名" width="315"></el-table-column>
                <el-table-column prop="confFilePath" label="配置路径" width="300"></el-table-column>
                <el-table-column prop="isWildcard" label="是否通配类型" width="120" ></el-table-column>
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
                   :page-size="100"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="datasize">
                 </el-pagination>
             </div>
         </el-col>
    </el-row>
    </div>
</template>
<script>
//配置中心配置管理模块
export default {
     data(){
        return{
            listdata:[],
            currentPage:1,//当前页面
            datasize:200,//数据条数
            loading:false,//数据加载动画
        }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
