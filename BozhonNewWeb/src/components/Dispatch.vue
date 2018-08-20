<template>
    <el-container>
        <el-aside :style="{width:asidewidth}">
          <el-menu :collapse="isCollapse" id="menubody" background-color="#545c64" text-color="#fff" active-text-color="#409eff">
              <el-menu-item @click="showMenu">
                  <i class="el-icon-more"></i>
              </el-menu-item>
              <el-menu-item @click="showList(1)">
                <i class="el-icon-menu"></i>
                <span>控制台</span>
              </el-menu-item>
              <el-menu-item @click="showList(2)">
                <i class="el-icon-service"></i>
                <span>机器人列表</span>
              </el-menu-item>
              <el-menu-item @click="showList(3)">
                 <i class="el-icon-printer"></i>
                 <span>执行中任务</span>
              </el-menu-item>
              <el-menu-item @click="showList(4)">
                 <i class="el-icon-document"></i>
                 <span>等待中任务</span>
              </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
            <el-main id="mainbody" :class="{mainbodyleft:isCollapse}">
                <component :is="tabView"></component>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
//调度系统模块
import List1 from "./ConsoleList.vue";
import List2 from "./RobotList.vue";
import List3 from "./Executionlist.vue";
import List4 from "./WaitList.vue";

export default {
    data(){
        return{
            isCollapse:true,
            asidewidth:'180px',
            tabView:"List1",
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
        List1,List2,List3,List4
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
