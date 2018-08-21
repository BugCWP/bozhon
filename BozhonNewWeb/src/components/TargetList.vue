<template>
     <div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>配置系统</el-breadcrumb-item>
                    <el-breadcrumb-item>目标管理</el-breadcrumb-item>
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
              <div id="tableheadtitle">目标列表</div>
              <div id="tableheadbutton">
                 <el-button  size="mini" icon="el-icon-search" @click="getTargetList">查询</el-button>
                  <el-button  size="mini" >新增</el-button>
                  <el-button  size="mini" >修改</el-button>
                  <el-button  size="mini" icon="el-icon-delete"></el-button>
                  <el-button  size="mini" icon="el-icon-refresh" @click="getflash"></el-button>
              </div>
              <div id="tableheadinput">
                  <el-input  size="small" prefix-icon="el-icon-search" clearable v-model="req.targetDesc"></el-input>
              </div>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" border height="350" :default-sort="{prop:'uId'}" v-loading="loading">
                <el-table-column type="selection" width="40"></el-table-column>
                <el-table-column prop="targetId" label="ID" width="105" sortable></el-table-column>
                <el-table-column prop="targetUUID" label="目标UUID" width="190"></el-table-column>
                <el-table-column prop="targetDesc" label="目标描述" width="190"></el-table-column>
                <el-table-column prop="targetProject" label="所属项目" width="250" ></el-table-column>
                <el-table-column prop="targetTypeStr" label="目标类型" width="200" ></el-table-column>
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
//配置中心目标管理模块
export default {
      data(){
        return{
            listdata:[],
            currentPage:1,//当前页面
            datasize:0,//数据条数
            loading:false,//数据加载动画
            req: {
              page: 1,
              size: 10,
              targetDesc: '',
            },
        }
    },
    mounted:function(){
          this.getTargetList();
    },
    methods: {
      handleSizeChange(val) {
          this.req.size=val;
          this.getTargetList();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.req.page=val;
          this.getTargetList();
        console.log(`当前页: ${val}`);
      },
      //刷新
      getflash(){
        this.req.page=1;
        this.req.targetDesc='';
        this.getTargetList();
      },
      //获取目标
      getTargetList(){
        //开启加载动画
        this.loading=true;
        var host=location.hostname;
        var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
        var _select=this;
        $.ajax({
                url: ipAddress + 'api/listTargetByPage',
                type: 'post',
                data: JSON.stringify(this.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("获取目标管理成功");
                    if ("0" == json.result.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.schdisplaytxt = "none";
                        _select.listdata = [];
                        _select.listdata = json.result.result.list;
                        _select.datasize = json.result.result.totalItems;
                    }
                },
                error: function (data) {
                    console.log("目标管理无法获取");
                    _select.listdata = [];
                },
            })
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
