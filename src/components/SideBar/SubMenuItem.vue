<template>
  <el-sub-menu>
    <template #title>{{ title }}</template>
    <template v-if="children">
      <SubMenuItem
        v-for="(child, index) in children"
        :key="index"
        :index="index"
        :title="child.title"
        :children="child.children"
      />
    </template>
  </el-sub-menu>
</template>
<script setup>
import SubMenuItem from './SubMenuItem.vue'
const { title, children } = defineProps(['title', 'children'])
</script>
