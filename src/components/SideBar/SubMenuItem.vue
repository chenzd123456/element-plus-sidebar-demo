<template>
  <el-sub-menu :index="props.index">
    <template #title>{{ props.title }}</template>
    <template v-if="children">
      <SubMenuItem
        v-for="(child, index) in children"
        :key="`${props.index}-${index}`"
        :index="`${props.index}-${index}`"
        :title="child.title"
        :children="child.children"
      />
    </template>
  </el-sub-menu>
</template>
<script setup>
import SubMenuItem from './SubMenuItem.vue'
const props = defineProps(['title', 'children', 'index'])
</script>
