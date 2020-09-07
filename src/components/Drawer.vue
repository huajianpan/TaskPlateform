<template>
  <div>
    <!-- <i class=""></i> -->
    <el-button
      @click="drawer = true"
      icon="el-icon-menu"
      type="primary"
      style="margin-left: -30px;"
    >菜单</el-button>
    <el-drawer title="我是标题" :visible.sync="drawer" direction="ltr" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>
<style >

.el-button {
  font-size: 18px;
}
</style>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>
