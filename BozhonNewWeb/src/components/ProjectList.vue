<template>
     <div>
    <el-row>
        <el-col :span="1" style=""><div>&nbsp;</div></el-col>
        <el-col :span="21">
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item>配置系统</el-breadcrumb-item>
                    <el-breadcrumb-item>项目管理</el-breadcrumb-item>
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
              <div id="tableheadtitle">项目列表</div>
              <div id="tableheadbutton">
                  <el-button  size="mini" icon="el-icon-search" @click="getProjectList" :loading="btnLoadingS">搜索</el-button>
                  <el-button  size="mini" @click="getCity(1)">新增</el-button>
                  <el-button  size="mini" :disabled="btnupdatedis" @click="getCity(2)">修改</el-button>
                  <el-popover
                       placement="top"
                       width="160"
                       v-model="visible2">
                       <p>确定要删除吗？</p>
                       <div style="text-align: right; margin: 0">
                       <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
                       <el-button type="primary" size="mini" @click="isDelete">确定</el-button>
                       </div>
                       <!-- <el-button slot="reference">删除</el-button> -->
                       <el-button  slot="reference"  size="mini" icon="el-icon-delete" :disabled="btndeletedis" :loading="btnLoadingD"></el-button>
                 </el-popover>
                  <el-button size="mini" icon="el-icon-refresh" @click="getflash" :loading="btnLoadingF"></el-button>
                  <el-button size="mini" icon="el-icon-upload" :disabled="btnuploaddis" @click="openUp">项目配置</el-button>
              </div>
              <div id="tableheadinput">
                  <el-input size="small" prefix-icon="el-icon-search" clearable></el-input>
              </div>
            </div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="2"><div>&nbsp;</div></el-col>
        <el-col :span="22">
            <el-table ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" 
                      border height="350px" :default-sort="{prop:'uId'}" v-loading="loading"  @selection-change="handleSelectionChange" >
                <el-table-column type="selection" ></el-table-column>
                <el-table-column prop="projectId" label="ID" sortable></el-table-column>
                <el-table-column prop="projectNation" label="国家" sortable></el-table-column>
                <el-table-column prop="projectProvince" label="一级城市" sortable></el-table-column>
                <el-table-column prop="projectCity" label="二级城市"  sortable></el-table-column>
                <el-table-column prop="projectName" label="项目名称"></el-table-column>
                <el-table-column prop="projectDesc" label="项目描述"></el-table-column>
                <el-table-column prop="projectTypeStr" label="项目类型"></el-table-column>
                <el-table-column prop="projectConfigVersion" label="当前配置版本"></el-table-column>
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
    <el-dialog title="新建项目" :visible.sync="dialogFormVisible1">
     <el-form :model="form">
       <el-form-item label="项目名称" :label-width="formLabelWidth">
          <el-input v-model="form.projectName" auto-complete="off"></el-input>
       </el-form-item>
        <el-form-item label="项目描述" :label-width="formLabelWidth">
          <el-input v-model="form.projectDesc" auto-complete="off"></el-input>
       </el-form-item>
      <el-form-item label="所在城市" :label-width="formLabelWidth">
        <el-select v-model="form.city"  placeholder="请选择所在城市" style="width:520px">
          <el-option v-for="item in citys" :key="item.cityId" :label="item.cityName" :value="item.cityId"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目类别" :label-width="formLabelWidth">
        <el-select v-model="form.projectTypeStr" placeholder="请选择项目类别" style="width:520px">
          <el-option label="机器人" value="2"></el-option>
          <el-option label="调度系统" value="1"></el-option>
        </el-select>
      </el-form-item>
     </el-form>
    <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible1 = false">取 消</el-button>
       <el-button type="primary" @click="isAdd" :loading="btnLoadingAdd">确 定</el-button>
    </div>
    </el-dialog>
    <el-dialog title="修改项目" :visible.sync="dialogFormVisible2">
     <el-form :model="form2">
       <el-form-item label="项目名称" :label-width="formLabelWidth">
          <el-input v-model="form2.projectName" auto-complete="off"></el-input>
       </el-form-item>
        <el-form-item label="项目描述" :label-width="formLabelWidth">
          <el-input v-model="form2.projectDesc" auto-complete="off"></el-input>
       </el-form-item>
      <el-form-item label="所在城市" :label-width="formLabelWidth">
        <el-select v-model="form2.city" placeholder="请选择所在城市" style="width:520px">
          <el-option v-for="item in citys" :key="item.cityId" :label="item.cityName" :value="item.cityId"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目类别" :label-width="formLabelWidth">
        <el-select v-model="form2.projectTypeStr" placeholder="请选择项目类别" style="width:520px">
          <el-option label="机器人" value="2"></el-option>
          <el-option label="调度系统" value="1"></el-option>
        </el-select>
      </el-form-item>
     </el-form>
    <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible2 = false">取 消</el-button>
       <el-button type="primary" @click="isUpdate" :loading="btnLoadingUpdate">确 定</el-button>
    </div>
    </el-dialog>
      <el-dialog title="配置文件列表" :visible.sync="outerVisible">
        <el-dialog
          width="40%"
          title="新建配置文件"
          :visible.sync="innerVisible"
          append-to-body>
           <el-form :model="form3">
             <el-form-item label="配置描述" :label-width="formLabelWidth">
               <el-input v-model="form3.configFileDesc" auto-complete="off"></el-input>
             </el-form-item>
             <el-form-item label="配置版本号" :label-width="formLabelWidth">
                 <el-input v-model="form3.configFileVersion" auto-complete="off" placeholder="必须填"></el-input>
             </el-form-item>
             <el-form-item label="上传配置文件" :label-width="formLabelWidth">
                <input type="file" multiple="multiple" @change="fileup($event)"/>
             </el-form-item>
     </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="innerVisible = false">取 消</el-button>
        <el-button type="primary"  @click="saveup" :loading="btnLoadingsave">保存</el-button>
     </div>
       </el-dialog>
       <el-table
    :data="newprojectdate"
    border
    style="width: 100%"
    height="380px"
    v-loading="newprojectloading">
    <el-table-column
      fixed
      prop="configFileId"
      label="ID"
     >
    </el-table-column>
    <el-table-column
      prop="configFileVersion"
      label="版本"
      >
    </el-table-column>
    <el-table-column
      prop="configFileDesc"
      label="描述"
      >
    </el-table-column>
    <el-table-column
      prop="configCreateTime"
      label="创建时间"
     >
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button size="small" type="primary" @click="putout(scope.row.configFileId)" :loading="btnLoadingup">发布</el-button>
      </template>
    </el-table-column>
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
        <el-button @click="outerVisible = false">取 消</el-button>
        <el-button type="primary"  @click="innerVisible = true">新建配置</el-button>
     </div>
  </el-dialog>
    </div>
</template>
<script>
import $ from 'jquery'
//配置中心项目管理模块
export default {
     data(){
        return{
            listdata:[{projectId:1,projectNation:2,projectProvince:3,projectCity:4,projectName:5,projectDesc:6,projectTypeStr:7,projectConfigVersion:8},{projectId:1,projectNation:2,projectProvince:3,projectCity:4,projectName:5,projectDesc:6,projectTypeStr:7,projectConfigVersion:8},{projectId:1,projectNation:2,projectProvince:3,projectCity:4,projectName:5,projectDesc:6,projectTypeStr:7,projectConfigVersion:8}],
            currentPage:1,//当前页面
            datasize:0,//数据条数
            datasize1:0,
            loading:false,//数据加载动画
            btnLoadingF:false,
            btnLoadingS:false,
            btnLoadingD:false,
            btnLoadingAdd:false,
            btnLoadingUpdate:false,
            btnLoadingsave:false,
            btnLoadingup:false,
            btnupdatedis:true,
            btndeletedis:true,
            btnuploaddis:true,
            visible2:false,
            dialogFormVisible1:false,
            dialogFormVisible2:false,
            innerVisible:false,
            outerVisible:false,
            newprojectloading:false,
            checklist:[],
            citys:[],
            newprojectdate:[{configFileId:1,configFileVersion:2,configFileDesc:3,configCreateTime:4}],
            deletereq:{
                ids:[],
            },
            req: {
               page: 1,
               size: 10,
               projectName: '',
            },
            cityreq: {
               page: 1,
               size: 300,
               cityName: '',
            },
            addreq:{
               cityId: '',
               projectName:'',
               projectDesc: '',
               projectCity: '',
               projectType:'',
            },
            form: {
               projectName:'',
               projectDesc: '',
               city:'',
               projectType:'',
               projectTypeStr:'',
               date1: '',
               date2: '',
               delivery: false,
               type: [],
               resource: '',
              desc: ''
             },
             form2: {
               projectName:'',
               projectDesc: '',
               city: '',
               projectType:'',
               projectTypeStr:'',
               date1: '',
               date2: '',
               delivery: false,
               type: [],
               resource: '',
              desc: ''
             },
             form3: {
               configFileDesc: '',
               configFileVersion: '',
               file:'',
               date1: '',
               date2: '',
               delivery: false,
               type: [],
               resource: '',
              desc: ''
             },
             formLabelWidth: '120px',
             updatereq: {
                 cityId: '',
                 nationId: '',
                 projectConfVersion: '',
                 projectId: '',
                 projectNation: '',
                 projectProvince: '',
                 projectTypeStr: '',
                 projectName: '',
                 projectDesc: '',
                 projectType: '',
                 projectCity: '',
                 provinceId: '',
              },
              confreq: {
                 configProjectId: '',
                 configFileVersion: '',
                 configFileDesc:'',
              },
              upreq: {
                 page: 1,
                 size: 10,
                 projectId: '',
             },
             formdata:'',
        }
    },
    //界面加载的数据获取
    mounted:function(){
        this.getProjectList();
    },
    methods: {
      handleSizeChange(val) {
        this.req.size=val;
        this.getProjectList();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.req.page=val;
          this.getProjectList();
        console.log(`当前页: ${val}`);
      },
      handleSizeChange1(val) {
        this.upreq.size=val;
        this.getUp();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange1(val) {
          this.upreq.page=val;
          this.getUp();
        console.log(`当前页: ${val}`);
      },
      //刷新
      getflash(){
         this.btnLoadingF=true;
         this.req.page=1;
         this.req.projectName='';
         this.getProjectList();
      },
      //搜索
      getfind(){
         this.btnLoadingS=true;
         this.getProjectList();
      },
      //获取项目列表信息
      getProjectList(){
          //开启加载动画
        this.loading=true;
        var host=location.hostname;
        var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
        var _select=this;
         $.ajax({
                url: ipAddress + 'api/listProjectByPage',
                type: 'post',
                data: JSON.stringify(this.req),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    console.log("项目管理列表取到");
                    if ("0" == json.result.result.size) {
                        alert("当前无符合条件的记录!");
                        _select.items = [];
                    } else {
                        _select.loading = false;
                        _select.listdata = [];
                        _select.listdata = json.result.result.list;
                        _select.datasize = json.result.result.totalItems;
                        _select.openmessageSuccess("获取项目列表成功");
                        _select.btnLoadingF=false;
                        _select.btnLoadingS=false;
                    }

                },
                error: function (data) {
                    _select.openmessageErr("获取项目列表失败");
                    _select.listdata = [];
                    _select.btnLoadingF=false;
                    _select.btnLoadingS=false;
                }
            })
      },
      //获取城市信息
      getCity(i){
          if(i==1){
               this.dialogFormVisible1=true;
          }else if(i==2){
              this.dialogFormVisible2=true;
              this.form2.projectName=this.checklist[0].projectName;
              this.form2.projectDesc=this.checklist[0].projectDesc;
              this.form2.city=this.checklist[0].cityId;
              this.form2.projectType=this.checklist[0].projectType;
              this.form2.projectTypeStr=this.checklist[0].projectTypeStr;
          }
           var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/getCityByPage',
                type: 'post',
                data: JSON.stringify(_select.cityreq),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.citys = json.result.result.list;
                },
                error: function (data) {
                    console.log("查询城市失败");
                }
            })
      },
      //获取配置列表
      getUp(){
            this.newprojectloading = true;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/getConfigFileByPage',//todo
                type: 'post',
                data: JSON.stringify(_select.upreq),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                    _select.newprojectloading=false;
                    _select.newprojectdate = [];
                    _select.newprojectdate = json.result.result.list;
                    _select.datasize1 = json.result.result.totalItems;
                    _select.openmessageSuccess("获取项目列表成功");
                },
                error: function (data) {
                    _select.openmessageErr("未取到项目列表");
                    _select.items = [];
                }
            })
      },
      //发布
      putout(id){
          this.btnLoadingup=true;
           var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            $.ajax({
                url: ipAddress + 'api/updateProjectConfVersion',
                type: 'post',
                data: JSON.stringify(id),
                dataType: "json",
                contentType: "application/json",
                success: function (json) {
                   _select.getProjectList();
                    _select.openmessageSuccess("发布成功");
                    _select.btnLoadingup=false;
                },
                error: function (data) {
                    _select.openmessageErr("发布失败");
                    _select.btnLoadingup=false;
                }
            })
      },
      //保存新建的配置
      saveup(){
          console.log("热部署");
          this.btnLoadingsave=true;
           var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            this.formdata = new FormData();
            this.confreq.configFileDesc=this.form3.configFileDesc;
            this.confreq.configFileVersion=this.form3.configFileVersion;
            this.confreq.configProjectId=this.checklist[0].projectId;
            if (this.confreq.configFileVersion == null || this.confreq.configFileVersion == "") {
                alert("请输入版本配置！");
            } else {
                formdata.append('conf', JSON.stringify(this.confreq));
                formdata.append('file', this.form3.file);
                $.ajax({
                    url: ipAddress + 'api/saveConfigFile',
                    type: 'post',
                    data:_select.formdata,
                    dataType: "json",
                    contentType: false,
                    processData: false,
                    cache:false,
                    success: function (json) {
                        _select.innerVisible=false;
                        _select.getUp();
                        _select.openmessageSuccess("保存成功");
                        _select.btnLoadingsave=false;
                    },
                    error: function (data) {
                        _select.openmessageErr("保存失败");
                        _select.btnLoadingsave=false;
                    }
                })
            }
      },
      //打开配置文件列表
      openUp(){
           this.outerVisible=true;
           this.upreq.projectId=this.checklist[0].projectId;
           this.getUp();
      },
      fileup: function (event) {
          var file=event.target.files;
          console.log(file);
          this.form3.file = file;
            // console.log(this.form3.file);
        },
      //新增功能
      isAdd(){
           var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            this.addreq.projectName = this.form.projectName;
            this.addreq.projectDesc = this.form.projectDesc;
            console.log(this.form.projectTypeStr);
            if(this.form.projectTypeStr=="1"){
                this.addreq.projectType=1;

            }else if(this.form.projectTypeStr=="2"){
                this.addreq.projectType=2;
            }
            // this.addreq.projectCity = this.form.city.cityName;
            this.addreq.cityId=this.form.city;
            if (this.addreq.projectName == "" || this.addreq.projectName == null) {
                _select.openmessageErr("请输入项目名称");
            }
            else if (this.addreq.projectDesc == "" || this.addreq.projectDesc == null) {
                _select.openmessageErr("请输入项目描述");
            }
            else if (this.addreq.projectType == "" || this.addreq.projectType == null) {
                _select.openmessageErr("请选择项目类别");
            }
            else if (this.addreq.cityId == "" || this.addreq.cityId == null) {
                _select.openmessageErr("请选择所在城市");
            } else {
                this.btnLoadingAdd=true;
                console.log(this.addreq);
                $.ajax({
                    url: ipAddress + 'api/project',
                    type: 'post',
                    data: JSON.stringify(_select.addreq),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _select.getProjectList();
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
      //删除功能
      isDelete(){
            this.visible2=false;
            this.btnLoadingD=true;
            this.deletereq.ids=new Array();
            for(var i in this.checklist){
                this.deletereq.ids.push(this.checklist[i].projectId);
            }
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
                    $.ajax({
                        url: ipAddress + 'api/delProjects',
                        type: 'post',
                        data: JSON.stringify(_select.deletereq),
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
      //修改功能
      isUpdate(){
            this.updatereq.cityId=this.form2.city;
            this.updatereq.projectConfVersion=this.checklist[0].projectConfigVersion;
            this.updatereq.projectId=this.checklist[0].projectId;
            this.updatereq.projectNation=this.checklist[0].projectNation;
            this.updatereq.projectProvince=this.checklist[0].projectProvince;
            if(this.form2.projectTypeStr=="1"){
                this.updatereq.projectType=1;
            }else if(this.form2.projectTypeStr=="2"){
                this.updatereq.projectType=2;
            }
            this.updatereq.projectName=this.form2.projectName;
            this.updatereq.projectDesc=this.form2.projectDesc;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            if (this.updatereq.projectName == "" || this.updatereq.projectName == null) {
                _select.openmessageErr("请输入项目名称");
            }
            else if (this.updatereq.projectDesc == "" || this.updatereq.projectDesc == null) {
                _select.openmessageErr("请输入项目描述");
            }
            else if (this.updatereq.projectType == "" || this.updatereq.projectType == null) {
                _select.openmessageErr("请选择项目类别");
            }
            else if (this.updatereq.cityId == "" || this.updatereq.cityId == null) {
                _select.openmessageErr("请选择所在城市");
            } else {
                this.btnLoadingUpdate=true;
                $.ajax({
                    url: ipAddress + 'api/project',
                    type: 'put',
                    data: JSON.stringify(_select.updatereq),
                    dataType: "json",
                    contentType: "application/json",
                    success: function (json) {
                        _select.getProjectList();
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
                 this.btnuploaddis=true;
             }
             if(this.getjsonlength(this.checklist)>0){
                 this.btnupdatedis=false;
                 this.btndeletedis=false;
                 this.btnuploaddis=false;
             } 
             if(this.getjsonlength(this.checklist)>1){
                 this.btnupdatedis=true;
                 this.btnuploaddis=true;
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
}
</style>
