<template>
  <div id="app">
    <el-container class='container'>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="1">
            <div class="grid-content bg-purple">
              <!-- <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button>
              <el-drawer title="我是标题" :visible.sync="drawer" direction="ltr" :with-header="false">
                <span>我来啦!</span>
              </el-drawer> -->
              <top-drawer class="drawer"/>
            </div>
          </el-col>
          <el-col :span="20">
            <div class="grid-content bg-purple">
              <Menu/>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="grid-content bg-purple">
            <DropDownMenu/>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container class="middle">
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main1</el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
      <el-footer>foote1r</el-footer>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Drawer from './components/Drawer.vue'
import DropDownMenu from './components/DropDownMenu.vue'
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      })
    }
  },
  components: {
    // <TopDrawer/>或<top-drawer/>调用组件
    Menu, DropDownMenu, TopDrawer: Drawer
  }
}
</script>

<style scoped lang="less" >
:root{
  --my-height:500px;
  --my-color:pink;
}
// less-loader版本太高会报错 5.0.0可用
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");

// @middleHeight:300px;定义变量

*{
  padding: 0 !important;
  margin: 0 !important;
}
//该文件下没有html和body标签，设置无效
html,body{
  min-width: 1000px;
  height: 1000px !important;
  width: 100% !important;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  height: 100% !important;
  width: 100% !important;
  z-index: 2001 !important;
}
.el-header{
  // position: sticky ;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color:red;
  text-align: center;
  line-height: 60px;
}
//滚动时顶部导航固定在top 位置
.el-header{
  position:sticky;
  top: 0px;
}
.middle{
 height: var(--my-height);
}

// .el-footer {
//   bottom: 0;
//   left: 0;
//   right: 0;
// }

.el-aside {
  background-color: #d3dce6;
  color: rgb(122, 59, 59);
  text-align: center;
  height:100% !important;
  line-height: 200px;
  margin:10px 10px 10px 10px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
//改文件下找不到body，所以container设置无效
body > .el-container {
  // padding-bottom: 400px;
  height: 100% !important;
}
.container {
  // padding-bottom: 400px;
  height: 100% !important;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  // background: #99a9bf;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;

}

//视窗宽<900 aside清除,放最后
@media screen and (max-width: 900px) {
  .el-aside{
      height: 1000px !important;
      width: 0% !important;
  }

}
</style>
