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
                  <el-button  size="mini" icon="el-icon-refresh">刷新</el-button>
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
                <el-table-column label="操作" width="240" fixed="right">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" icon="el-icon-upload2"></el-button>
                        <el-button size="mini" type="primary" icon="el-icon-download"></el-button>
                        <el-button size="mini" icon="" type="primary" style="width:40px;paddingLeft:7px">置顶</el-button>
                        <el-button size="mini" icon="el-icon-delete" type="danger"></el-button>
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
//调度系统等待中任务模块
export default {
 data(){
        return{
            listdata:[{stamp:'1',uuid:'2',opcode:'3',status:'4',level:'5'}],
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
