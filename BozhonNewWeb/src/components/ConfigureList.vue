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
                  <!-- <el-button  size="mini" icon="el-icon-search">查询</el-button> -->
                  <el-button  size="mini" @click="dialogFormVisible1=true">新增</el-button>
                  <el-button  size="mini" :disabled="btnupdatedis"  @click="openupdate">修改</el-button>
                  <el-popover
                       placement="top"
                       width="160"
                       v-model="visible2">
                       <p>确定要删除吗？</p>
                       <div style="text-align: right; margin: 0">
                       <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                       <el-button type="primary" size="mini" @click="isDelete">确定</el-button>
                       </div>
                       <el-button slot="reference" size="mini" icon="el-icon-delete" :loading="btnLoadingD" :disabled="btndeletedis"></el-button>
                 </el-popover>
                 
                  <el-button  size="mini" icon="el-icon-refresh" @click="getflash" :loading="btnLoadingF"></el-button>
              </div>
              <!-- <div id="tableheadinput">
                  <el-input  size="small" prefix-icon="el-icon-search" clearable></el-input>
              </div> -->
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" 
                      style="width: 100%" border height="350" 
                      :default-sort="{prop:'uId'}" v-loading="loading"
                      @selection-change="handleSelectionChange">
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
                   :page-size="10"
                   layout="total, sizes, prev, pager, next, jumper"
                   :total="datasize">
                 </el-pagination>
             </div>
         </el-col>
    </el-row>
    <el-dialog title="新建配置" :visible.sync="dialogFormVisible1">
     <el-form :model="form">
       <el-form-item label="配置文件" :label-width="formLabelWidth">
          <el-input v-model="form.confFileName" auto-complete="off"></el-input>
       </el-form-item>
        <el-form-item label="配置路径" :label-width="formLabelWidth">
          <el-input v-model="form.confFilePath" auto-complete="off"></el-input>
       </el-form-item>
      <el-form-item label="是否通配" :label-width="formLabelWidth">
        <el-select v-model="form.isWildcard" placeholder="请选择是否通配" style="width:520px">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
      </el-form-item>
     </el-form>
    <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible1 = false">取 消</el-button>
       <el-button type="primary" @click="isAdd" :loading="btnLoadingAdd">确 定</el-button>
    </div>
    </el-dialog>
    <el-dialog title="修改配置" :visible.sync="dialogFormVisible2">
     <el-form :model="form2">
       <el-form-item label="配置文件" :label-width="formLabelWidth">
          <el-input v-model="form2.confFileName" auto-complete="off"></el-input>
       </el-form-item>
        <el-form-item label="配置路径" :label-width="formLabelWidth">
          <el-input v-model="form2.confFilePath" auto-complete="off"></el-input>
       </el-form-item>
      <el-form-item label="是否通配" :label-width="formLabelWidth">
        <el-select v-model="form2.isWildcard" placeholder="请选择是否通配" style="width:520px">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="2"></el-option>
        </el-select>
      </el-form-item>
     </el-form>
    <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible2 = false">取 消</el-button>
       <el-button type="primary" @click="isupdate" :loading="btnLoadingUpdate">确 定</el-button>
    </div>
    </el-dialog>
    </div>
</template>
<script>
import $ from 'jquery'
//配置中心配置管理模块
export default {
     data(){
        return{
            listdata:[{confId:1,confFileName:2,confFilePath:3,isWildcard:4}],
            currentPage:1,//当前页面
            datasize:0,//数据条数
            loading:false,//数据加载动画
            btnLoadingF:false,
            btnLoadingD:false,
            btnLoadingAdd:false,
            btnLoadingUpdate:false,
            btnupdatedis:true,
            btndeletedis:true,
            visible2:false,
            dialogFormVisible1:false,
            dialogFormVisible2:false,
            checklist:[],
            req: {
               page: 1,
               size: 10,
            },
            delereq: {
                ids: '',
            },
             form: {
               confFileName:'',
               confFilePath: '',
               isWildcard: '',
               date1: '',
               date2: '',
               delivery: false,
               type: [],
               resource: '',
              desc: ''
             },
            form2: {
               confFileName:'',
               confFilePath: '',
               isWildcard: '',
               date1: '',
               date2: '',
               delivery: false,
               type: [],
               resource: '',
               desc: ''
             },
             formLabelWidth: '120px',
             addreq: {
                confFileName: '',
                confFilePath: '',
                 isWildcard: '',
             },
             updatereq: {
               confFileName: '',
               confFilePath: '',
               isWildcard: '',
            },
        }
    },
    mounted:function(){
        this.getConfigureList();
    },
    methods: {
      handleSizeChange(val) {
        this.req.size=val;
        this.getConfigureList();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.req.page=val;
          this.getConfigureList();
        console.log(`当前页: ${val}`);
      },
      //刷新
      getflash(){
          this.btnLoadingF=true;
        this.req.page=1;
        this.getConfigureList();
      },
      //获取配置管理列表的数据
      getConfigureList(){
         //开启加载动画
        this.loading=true;
        var host=location.hostname;
        var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
        var _select=this;
        $.ajax({
                url:ipAddress + 'api/getConfigsByPage',
                type: 'post',
                data: JSON.stringify(this.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("获取管理配置成功");
                    if ("0" == json.result.result.size) {
                        alert("当前无符合条件的记录!");
                    } else {
                        _select.loading = false;
                        _select.listdata = [];
                        _select.listdata = json.result.result.list;
                        _select.datasize = json.result.result.totalItems;
                        _select.openmessageSuccess("获取管理配置成功");
                        _select.btnLoadingF=false;
                    }
                },
                error: function (data) {
                    _select.openmessageErr("获取管理配置失败");
                    _select.listdata = [];
                   _select.btnLoadingF=false;
                },
            })
      },
      //删除功能
      isDelete(){
          this.visible2=false;
            this.btnLoadingD=true;
            this.delereq.ids=new Array();
            for(var i in this.checklist){
                this.delereq.ids.push(this.checklist[i].confId);
            }
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
                    $.ajax({
                        url: ipAddress + 'api/delConfigs',
                        type: 'post',
                        data: JSON.stringify(_select.delereq),
                        dataType: "json",
                        contentType: "application/json",
                        success: function (json) {
                            _select.getProjectList();
                            _select.openmessageSuccess("删除成功");
                            _select.btnLoadingD=false;
                        },
                        error: function (msg) {
                            _select.openmessageErr("删除失败");
                            _select.btnLoadingD=false;
                        }
                    })
      },
      //新增功能
      isAdd(){
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            this.delereq.confFileName=this.form.confFileName;
            this.delereq.confFilePath=this.form.confFilePath;
            this.delereq.isWildcard=this.form.isWildcard;
            if (this.delereq.confFileName == '' || this.delereq.confFileName == null) {
                _select.openmessageErr("请输入配置文件！");
            } else if (this.delereq.confFilePath == '' || this.delereq.confFilePath == null) {
                _select.openmessageErr("请输入配置路径！");
            } else if (this.delereq.isWildcard == '' || this.delereq.isWildcard == null) {
                _select.openmessageErr("请选择是否通配！");
            } else {
                this.btnLoadingAdd=true;
                $.ajax({
                    url: ipAddress + 'api/config',
                    type: 'post',
                    data: JSON.stringify(_select.setdataconf),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _select.getConfigureList();
                        _select.openmessageSuccess("添加成功");
                        _select.btnLoadingAdd=false;
                        _select.dialogFormVisible1=false;
                    },
                    error: function (data) {
                        _select.openmessageErr("添加失败");
                        _select.btnLoadingAdd=false;
                    }
                })
            }
      },
      //打开修改功能的界面
      openupdate(){
          this.dialogFormVisible2=true;
          this.form2.confFileName=this.checklist[0].confFileName;
          this.form2.confFilePath=this.checklist[0].confFilePath;
          this.form2.isWildcard=this.checklist[0].isWildcard;
      },
      //修改功能
      isupdate(){
           var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            // localStorage.setItem("Url", ipAddress);
            var _select = this;
            console.log(this.form2);
            this.updatereq.confFileName = this.form2.confFileName;
            this.updatereq.confFilePath = this.form2.confFilePath;
            this.updatereq.isWildcard = this.form2.isWildcard;
            console.log(this.updatereq);
            if (this.updatereq.confFileName == '' || this.updatereq.confFileName == null) {
                _select.openmessageErr("请输入配置文件！");
            } else if (this.updatereq.confFilePath == '' || this.updatereq.confFilePath == null) {
                _select.openmessageErr("请输入配置路径！");
            } else if (this.updatereq.isWildcard == '' || this.updatereq.isWildcard == null) {
                _select.openmessageErr("请选择是否通配！");
            } else {
                _select.btnLoadingUpdate=true;
                $.ajax({
                    url: ipAddress + 'api/config',
                    type: 'post',
                    data: JSON.stringify(_select.updatereq),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _select.getConfigureList();
                        _select.openmessageSuccess("修改成功");
                        _select.btnLoadingUpdate=false;
                        _select.dialogFormVisible2=false;
                    },
                    error: function (data) {
                        _select.openmessageErr("修改失败");
                        _select.btnLoadingUpdate=false;
                    }
                })
            }
      },
      //选中功能
      handleSelectionChange(val){
          this.checklist=val;
             console.log(this.checklist);
             if(this.getjsonlength(this.checklist)<1){
                  this.btnupdatedis=true;
                 this.btndeletedis=true;
             }
             if(this.getjsonlength(this.checklist)>0){
                 this.btnupdatedis=false;
                 this.btndeletedis=false;
             } 
             if(this.getjsonlength(this.checklist)>1){
                 this.btnupdatedis=true;
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
