<template>
  <el-sub-menu :index="index">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ title }}</span>
    </template>
    <template v-if="children">
      <SubMenuItem
        v-for="(child, index) in children"
        :key="`${props.index}-${subindex}`"
        :index="`${props.index}-${subindex}`"
        :title="child.title"
        :children="child.children"
      />
    </template>
  </el-sub-menu>
</template>
<script setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import SubMenuItem from './SubMenuItem.vue'
const props = defineProps(['title', 'children', 'index'])
</script>
