<template>
    <el-container>
        <el-aside :style="{width:asidewidth}">
          <el-menu :collapse="isCollapse" id="menubody" @open="handleOpen" @close="handleClose">
              <el-menu-item @click="showMenu">
                  <i class="el-icon-more"></i>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-menu"></i>
                <span>控制台</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-service"></i>
                <span>机器人列表</span>
              </el-menu-item>
              <el-menu-item>
                 <i class="el-icon-printer"></i>
                 <span>执行中任务</span>
              </el-menu-item>
              <el-menu-item>
                 <i class="el-icon-document"></i>
                 <span>等待中任务</span>
              </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data(){
        return{
            isCollapse:true,
            asidewidth:'180px',
        }
    },
    methods:{
       handleOpen(key,keyPath){
            this.asidewidth='180px';
       },
       handleClose(key,keyPath){
            this.asidewidth='65px';
       },
       showMenu(){
           this.isCollapse=!this.isCollapse;
       },
    },
}
</script>

<style>
#menubody{
    height: 550px;
}
</style>
