<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <el-container class="container-body">
      <el-header class="header-body">
         <span id="bozhonlogo">BOHHOM</span>
         <div id="bozhonUser" v-show="$store.state.Denglu">
           <span>{{$store.state.uName}}</span>|<span @click="btnout">注销</span>
         </div>
         <div id="bozhonproject">
            <el-select filterable placeholder="请选择Project"  v-show="$store.state.Denglu" @change="getproject">
                <el-option value="bozhon" key="bozhon" label="bozhon">bozhon</el-option>
                <el-option value="bozhoning" key="bozhoning" label="bozhoning">bozhoning</el-option>
            </el-select>
         </div>
      </el-header>
      <el-container v-if="$store.state.Denglu">
        <el-aside class="aside-body" style="width:65px">
          <el-menu class="firstmenu">
            <el-menu-item @click="showmune(1)">
               <el-tooltip class="item" effect="dark" content="调度系统" placement="right-start">
                 <i class="el-icon-share"></i>
                </el-tooltip>
            </el-menu-item>
            <el-menu-item @click="showmune(2)" >
               <el-tooltip class="item" effect="dark" content="配置中心" placement="right-start">
                 <i class="el-icon-setting"></i>
               </el-tooltip>
            </el-menu-item>
          </el-menu>
        </el-aside>
       <el-container>
         <el-main class="main-body">
            <component :is="tabView"></component>
         </el-main>
       </el-container>
      </el-container>
    <el-container v-else>
      <el-main>
         <component :is="login"></component>
      </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>
//cd VsCode/Bozhon/bozhon/BozhonNewWeb
import simple1 from "./components/Dispatch.vue";
import simple2 from "./components/Configuration.vue";
import Login from "./components/Login.vue";
export default {
  name: "App",
  data(){
    return{
      tabView:'simple1',
      login:'Login',
    }
  },
  mounted(){
    console.log(this.$store.state.Denglu);
  },
  methods:{
      showmune(index){
        this.tabView=`simple${index}`;
      },
       btnout(){
            this.$store.commit('loginout');
        },
        getproject(val){
            this.$store.commit('getproject',val);
        },
  },
  components:{
    simple1,
    simple2,
    Login,
  }
};
</script>

<style>
.container-body {
  height: 610px;
}
.header-body {
  height: 60px;
  background-color: #409eff;
}
.aside-body {
  width: 60px;
}
.firstmenu{
  width: 60px;
  height: 540px;
}
.main-body {
  padding: 0px;
}
#bozhonlogo {
  height: 40px;
  width: 230px;
  color: white;
  font-size: 25px;
  font-weight: 700;
  position: relative;
  top: 10px;
}
#bozhonproject {
 float: right;
 position: relative;
 top: 10px;
 right: 100px;
}
#bozhonUser{
    color: white;
    float: right;
    font-size: 15px;
    font-weight: 600px;
    position: relative;
    top: 18px;
}
#bozhonUser{
  cursor: pointer;
}
</style>
