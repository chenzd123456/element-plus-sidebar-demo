<template>
  <el-sub-menu :index="index">
    <template #title>{{ title }}</template>
    <template v-if="children">
      <SubMenuItem
        v-for="(child, index:subindex) in children"
        :key="`${index}-${subindex}`"
        :index="`${index}-${subindex}`"
        :title="child.title"
        :children="child.children"
      />
    </template>
  </el-sub-menu>
</template>
<script setup>
import SubMenuItem from './SubMenuItem.vue'
const { title, children, index } = defineProps(['title', 'children', 'index'])
</script>
