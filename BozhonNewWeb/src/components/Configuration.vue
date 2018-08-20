<template>
    <el-container>
        <el-aside :style="{width:asidewidth}">
          <el-menu :collapse="isCollapse" id="menubody"  background-color="#545c64" text-color="#fff" active-text-color="#409eff">
              <el-menu-item @click="showMenu">
                  <i class="el-icon-more"></i>
              </el-menu-item>
              <el-menu-item @click="showList(1)">
                <i class="el-icon-star-on"></i>
                <span>用户管理</span>
              </el-menu-item>
              <el-menu-item @click="showList(2)">
                <i class="el-icon-tickets"></i>
                <span>项目管理</span>
              </el-menu-item>
              <el-menu-item @click="showList(3)">
                 <i class="el-icon-refresh"></i>
                 <span>更新事件</span>
              </el-menu-item>
              <el-submenu>
                  <template slot="title">
                      <i class="el-icon-location"></i>
                     <span slot="title">地区管理</span>
                  </template>
                  <el-menu-item-group>
                      <el-menu-item @click="showList(4)">
                          <i class="el-icon-location-outline"></i>
                          <span>国家</span>
                      </el-menu-item>
                      <el-menu-item @click="showList(5)">
                          <i class="el-icon-picture"></i>
                          <span>一级城市</span>
                      </el-menu-item>
                      <el-menu-item @click="showList(6)">
                          <i class="el-icon-picture-outline"></i>
                          <span>二级城市</span>
                      </el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-menu-item @click="showList(7)">
                 <i class="el-icon-edit"></i>
                 <span>配置管理</span>
              </el-menu-item>
              <el-menu-item @click="showList(8)">
                 <i class="el-icon-edit-outline"></i>
                 <span>目标管理</span>
              </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container >
            <el-main id="mainbody" :class="{mainbodyleft:isCollapse}">
                <component :is="tabView"></component>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
//配置中心模块
import List1 from "./UserList.vue";
import List2 from "./ProjectList.vue";
import List3 from "./UpdateList.vue";
import List4 from "./NationList.vue";
import List5 from "./ProvinceList.vue";
import List6 from "./CityList.vue";
import List7 from "./ConfigureList.vue";
import List8 from "./TargetList.vue";

export default {
     data(){
        return{
            isCollapse:true,
            asidewidth:'200px',
            tabView:'List1',
        }
    },
    methods:{
       showList(index){
             this.tabView=`List${index}`;
       },
       showMenu(){
           this.isCollapse=!this.isCollapse;
       },
    },
    components:{
        List1,List2,List3,List4,List5,List6,List7,List8
    }
}
</script>

<style>
#menubody{
    height: 550px;
}
#mainbody{
    padding-left: 0;
    position: relative;
}
.mainbodyleft{
    left: -100px;
}
</style>