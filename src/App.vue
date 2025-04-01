<script setup>
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar/SideBar.vue'
</script>

<template>
  <el-container class="layout">
    <el-aside>
      <SideBar />
    </el-aside>
    <el-container>
      <RouterView />
    </el-container>
  </el-container>
</template>

<style scoped>
.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
