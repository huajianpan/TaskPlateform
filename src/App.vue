<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button>
              <el-drawer title="我是标题" :visible.sync="drawer" direction="ltr" :with-header="false">
                <span>我来啦!</span>
              </el-drawer>
            </div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <Menu/>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content bg-purple">
            <DropDownMenu/>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
        <el-aside width="200px">Aside</el-aside>
      </el-container>
      <el-footer>footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
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
    Menu, DropDownMenu
  }
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
body{
  min-width: 1000px;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
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
  background: #99a9bf;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
