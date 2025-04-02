<template>
  <el-menu-item :index="index">
    <span>
      <RouterLink :to="path">{{ props.title }}</RouterLink>
    </span>
  </el-menu-item>
</template>
<script setup>
const props = defineProps(['title', 'index', 'path'])
</script>
