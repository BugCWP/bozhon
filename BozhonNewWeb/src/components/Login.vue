<template>
  <el-container>
      <el-main>
          <vue-particles 
        color="#dedede"
        :particleOpacity="0.9"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="8"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.9"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push" style="height:470px;"></vue-particles>
         <div class="formbody">
                <el-form :model="form" style="z-index:100">
                    <el-form-item  :label-width="formLabelWidth" >
                       <span id='title'>BOHHOM</span>
                   </el-form-item><br/>
                   <el-form-item label="用户名:" :label-width="formLabelWidth" >
                       <el-input v-model="form.userName" auto-complete="off"></el-input>
                  </el-form-item><br/>
                  <el-form-item label="密码:" :label-width="formLabelWidth">
                        <el-input v-model="form.userPassword" auto-complete="off"></el-input>
                 </el-form-item><br/>
                <el-form-item label="" :label-width="formLabelWidth">
                      <el-button type="primary" style="width:350px" @click="btnlogin" :loading="btnloadinglogin">登录</el-button>
                 </el-form-item>
                </el-form>       
         </div>
      </el-main>
  </el-container>
</template>

<script>
export default {
     data(){
         return{
             btnloadinglogin:false,
              form: {
               userName:'',
               userPassword: '',
               date1: '',
               date2: '',
               delivery: false,
               type: [],
               resource: '',
              desc: ''
             },
              formLabelWidth: '120px',
              user:{
                  uName:'',
                  uPassword:'',
              }
         }
     },
     mounted(){
     },
     methods:{
        btnlogin(){
            this.btnloadinglogin=true;
            var host = location.hostname;
            var ipAddress = "http://" + host + ":8080/bzdiamond-server/";
            var _select = this;
            this.user.uName = this.form.userName;
            this.user.uPassword = this.form.userPassword;
            $.ajax({
                url: ipAddress + "api/session",
                type: "get",
                contentType: "application/json",
                success: function (data) {

                },
                error: function (data) {

                },
            }),
                $.ajax({
                    url: ipAddress + "api/authenticate",
                    type: "get",
                    contentType: "application/json",
                    success: function (data) {

                    },
                    error: function (data) {

                    },
                }),
                $.ajax({
                    url: ipAddress + "api/login",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(_select.user),
                    success: function (data) {
                        _select.btnloadinglogin=false;
                        _select.$store.commit('getName',_select.user.uName);
                          $.ajax({
                            url: ipAddress + "api/getrole",
                            type: "get",
                            dataType: "json",
                            contentType: "application/json",
                             data: '',
                            success: function (data) {
                                _select.btnloadinglogin=false;
                                 _select.$store.commit('getroles',data.result.roleNameList);
                                _select.$store.commit('loginin');
                                console.log(data.result.roleNameList);
                            },
                             error: function (data) {
                                //  _select.openmessageErr("管理员账号或密码错误!");
                                //  _select.btnloadinglogin=false;
                                 console.log(222222);
                            }
                    })
                       
                    },
                    error: function (data) {
                        _select.openmessageErr("管理员账号或密码错误!");
                        _select.btnloadinglogin=false;
                    }
                })
                // _select.$store.commit('getroles',["admin","user"]);
            // this.$store.commit('loginin');//这句要注释
            console.log(this.$store.state.Denglu);
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
#title{
    font-size: 50px;
    margin-left: 50px;
    font-weight: 900;
    color: #409eff;
}
.formbody{
    position: absolute;
    width: 500px;
    left: 400px;
    top: 180px;
}
</style>
