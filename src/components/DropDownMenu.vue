<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <i class="el-icon-setting"></i>个人中心
      <i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item>设置</el-dropdown-item>
      <el-dropdown-item>收藏夹</el-dropdown-item>
      <el-dropdown-item>螺蛳粉</el-dropdown-item>
      <el-dropdown-item disabled>双皮奶</el-dropdown-item>
      <el-dropdown-item divided>退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<style>
.el-dropdown-link {
  font-size: 18px;
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
