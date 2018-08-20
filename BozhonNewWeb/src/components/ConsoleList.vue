<template>
     <div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>调度系统</el-breadcrumb-item>
                    <el-breadcrumb-item>控制台</el-breadcrumb-item>
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
            </div>
        </el-col>
    </el-row>
    <el-row> 
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
           <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="实时状态" name="1">
                
                </el-collapse-item>
                <el-collapse-item title="机器人种类" name="2">
              
                </el-collapse-item>
                <el-collapse-item title="统计数据" name="3">
               
                </el-collapse-item>
           </el-collapse>
        </el-col> 
    </el-row>
    <el-row>

    </el-row>
    </div>
</template>
<script>
//调度系统控制台模块
export default {
    data(){
        return{
            listdata:[],
            loading:false,//数据加载动画
        }
    },
    methods: {
         handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
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
