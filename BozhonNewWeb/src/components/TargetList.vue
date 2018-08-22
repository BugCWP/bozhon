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
                  <el-button  size="mini" @click="outerVisible1=true">新增</el-button>
                  <el-button  size="mini" :disabled="btnupdatedis">修改</el-button>
                   <el-popover
                       placement="top"
                       width="160"
                       v-model="visible2">
                       <p>确定要删除吗？</p>
                       <div style="text-align: right; margin: 0">
                       <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                       <el-button type="primary" size="mini" @click="isDelete">确定</el-button>
                       </div> 
                       <el-button slot="reference" size="mini" icon="el-icon-delete" :loading="btnLoadingD" :disabled="btndeledis"></el-button>
                 </el-popover>
                 
                  <el-button  size="mini" icon="el-icon-refresh" @click="getflash" :loading="btnLoadingF"></el-button>
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
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark"
                  style="width: 100%" border height="350"
                   :default-sort="{prop:'uId'}" v-loading="loading" @selection-change="handleSelectionChange">
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
    <el-dialog title="新建配置目标" :visible.sync="outerVisible1">
      <el-dialog
        width="40%"
        title="项目列表"
        :visible.sync="innerVisible1"
         append-to-body>
          <el-table :data="adddatelist" height="300px" v-loading="selectloading1" @selection-change="handleSelectionChange1">
              <el-table-column type="selection"></el-table-column>
              <el-table-column property="projectId" label="ID" width="150"></el-table-column>
             <el-table-column property="projectName" label="项目名称" width="200"></el-table-column>
             <el-table-column property="projectDesc" label="项目描述"></el-table-column>
          </el-table>
          <div class="block">
                 <el-pagination 
                   @size-change="handleSizeChange1"
                   @current-change="handleCurrentChange1"
                   :current-page="currentPage"
                   :page-sizes="[10, 20, 30, 40]"
                   :page-size="10"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="datasize1">
                 </el-pagination>
             </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="innerVisible1 = false">取 消</el-button>
             <el-button type="primary" :disabled="butnOK1" @click="addselectproject">确定</el-button>
          </div>
      </el-dialog>
      <el-form :model="form">
       <el-form-item label="目标UUID" :label-width="formLabelWidth">
          <el-input v-model="form.targetUUID" auto-complete="off"></el-input>
       </el-form-item>
        <el-form-item label="目标描述" :label-width="formLabelWidth">
          <el-input v-model="form.targetDesc" auto-complete="off"></el-input>
       </el-form-item>
        <el-form-item label="所属项目" :label-width="formLabelWidth">
          <el-input v-model="form.targetProject" auto-complete="off">
              <el-button slot="append" @click="openaddproject">选择</el-button>
          </el-input>
       </el-form-item>
     </el-form>
     <div slot="footer" class="dialog-footer">
       <el-button @click="outerVisible1 = false">取 消</el-button>
       <el-button type="primary" @click="isadd" :loading="btnLoadingAdd">保存</el-button>
     </div>
   </el-dialog>
    </div>
</template>
<script>
//配置中心目标管理模块
export default {
      data(){
        return{
            listdata:[{targetId:1,targetUUID:2,targetDesc:3,targetProject:4,targetTypeStr:5}],
            currentPage:1,//当前页面
            datasize:0,//数据条数
            datasize1:0,
            loading:false,//数据加载动画
            btnLoadingF:false,
            btnLoadingD:false,
            btnLoadingAdd:false,
            btnLoadingUpdate:false,
            btnupdatedis:true,
            btndeledis:true,
            visible2:false,
            outerVisible1:false,
            innerVisible1:false,
            selectloading1:false,
            butnOK1:true,
            checklist:[],
            checklist1:[],
            adddatelist:[],
            req: {
              page: 1,
              size: 10,
              targetDesc: '',
            },
            delereq: {
                ids: [],
            },
             form: {
               targetUUID:'',
               targetDesc: '',
               targetProject: '',
               date1: '',
               date2: '',
               delivery: false,
               type: [],
               resource: '',
              desc: ''
             },
             formLabelWidth: '120px',
             addreq: {
                 targetUUID: '',
                 targetDesc: '',
                 targetProject: '',
                 targetProjectId: '',
                 targetType: '',
            },
            projectreq: {
              page: 1,
              size: 10,
              projectName: '',
            },
        }
    },
    mounted:function(){
        //   this.getTargetList();
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
      handleSizeChange1(val){
          this.projectreq.size=val;
          this.getproject();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange1(val){
          this.projectreq.page=val;
          this.getproject();
        console.log(`当前页: ${val}`);
      },
      //刷新
      getflash(){
          this.btnLoadingF=true;
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
                       _select.openmessageSuccess("目标管理获取成功");
                        _select.btnLoadingF=false;
                    }
                },
                error: function (data) {
                    _select.openmessageErr("目标管理无法获取");
                    _select.listdata = [];
                    _select.btnLoadingF=false;
                },
            })
      },
      //获取项目列表信息
      getproject(){
           var host=location.hostname;
           var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
           var _select=this;
            $.ajax({
                url: ipAddress + 'api/listProjectByPage',
                type: 'post',
                data: JSON.stringify(_select.projectreq),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.selectloading1=false,
                    _select.adddatelist = [];
                    _select.adddatelist = json.result.result.list;
                    _select.datasize1 = json.result.result.totalItems;
                    _select.selectloading1=false;
                    _select.openmessageSuccess("成功取到项目列表");
                },
                error: function (data) {
                    _select.openmessageErr("未取到项目列表");
                    _select.items = [];
                }
            })
      },
      //打开添加功能的项目列表
      openaddproject(){
          this.innerVisible1 = true;
          this.selectloading1=true;
          this.getproject();
      },
      //删除功能
      isDelete(){
          this.visible2=false;
            this.btnLoadingD=true;
             var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            this.delereq.ids=new Array();
            for(var i in this.checklist){
                this.delereq.ids.push(this.checklist[i].targetId);
            }
                    $.ajax({
                        url: ipAddress + 'api/delTargets',
                        type: 'post',
                        data: JSON.stringify(_select.delereq),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (json) {
                            _select.getTargetList();
                            _select.openmessageSuccess("删除成功");
                            _select.btnLoadingD=false;
                        },
                        error: function (msg) {
                            _select.openmessageErr("删除失败");
                            _select.btnLoadingD=false;
                        }
                    })
      },
      //添加
      isadd(){
             var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            this.addreq.targetUUID = this.form.targetUUID;
            this.addreq.targetDesc = this.form.targetDesc;
            if (this.addreq.targetUUID == null || this.addreq.targetUUID == "") {
                this.openmessageErr("请输入配置目标UUID！");
            } else if (this.addreq.targetProject == null || this.addreq.targetProject == "") {
                this.openmessageErr("请输入配置目标所属项目！");
            } else {
                this.btnLoadingAdd=true;
                $.ajax({
                    url: ipAddress + 'api/target',
                    type: 'post',
                    data: JSON.stringify(_select.addreq),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _select.getTargetList();
                       _select.openmessageSuccess("添加成功");
                       _select.btnLoadingAdd=false;
                       _select.outerVisible1=false;
                    },
                    error: function (data) {
                        _select.openmessageErr("添加失败");
                        _select.btnLoadingAdd=false;
                    }
                })
            }
      },
      //添加功能的选中一个project
      addselectproject(){
          this.form.targetProject=this.checklist1.projectName;
          this.addreq.targetProject=this.checklist1.projectName;
          this.addreq.targetProjectId=this.checklist1.projectId;
          this.addreq.targetType=this.checklist1.projectDesc;
           this.innerVisible1=false;
      },
        //选中功能
      handleSelectionChange(val){
          this.checklist=val;
             console.log(this.checklist);
             if(this.getjsonlength(this.checklist)<1){
                  this.btnupdatedis=true;
                 this.btndeledis=true;
             }
             if(this.getjsonlength(this.checklist)>0){
                 this.btnupdatedis=false;
                 this.btndeledis=false;
             } 
             if(this.getjsonlength(this.checklist)>1){
                 this.btnupdatedis=true;
             }
      },
      handleSelectionChange1(val){
           this.checklist1=val;
            if(this.getjsonlength(this.checklist1)<1){
                  this.butnOK1=true;
             }
             if(this.getjsonlength(this.checklist1)>0){
                 this.butnOK1=false;
             } 
             if(this.getjsonlength(this.checklist1)>1){
                 this.butnOK1=true;
             }
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
