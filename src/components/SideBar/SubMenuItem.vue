<template>
  <!-- 
    子菜单项组件，使用Element Plus的el-sub-menu组件实现
    功能: 支持无限级嵌套的子菜单渲染
  -->
  <el-sub-menu :index="props.index">
    <!-- 
      菜单标题插槽，显示菜单项标题
      #title: Element Plus的具名插槽，用于自定义菜单标题
    -->
    <template #title>{{ props.title }}</template>

    <!-- 
      递归渲染子菜单（如果有子菜单项）
      v-if: 确保只有当children存在时才渲染子菜单
      递归逻辑: 组件可以调用自身实现无限级菜单嵌套
    -->
    <template v-if="children">
      <!-- 
        递归调用SubMenuItem组件自身
        v-for: 循环渲染每个子菜单项
        :key: 组合父菜单index和当前索引确保唯一性
      -->
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
/**
 * 子菜单项组件
 * 功能: 实现递归渲染无限级子菜单结构
 */

// 导入自身组件用于递归调用
// 注意: 需要显式导入自身才能实现递归
import SubMenuItem from './SubMenuItem.vue'

// 定义组件props：
// - title: 菜单项显示文本 (必填)
// - children: 子菜单项数组 (可选)
// - index: 菜单项唯一标识 (必填)
const props = defineProps(['title', 'children', 'index'])
</script>
