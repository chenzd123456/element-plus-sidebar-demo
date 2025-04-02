<template>
  <!-- 
    顶部菜单项组件，基于Element Plus的el-sub-menu实现
    功能: 作为一级菜单项，可包含子菜单和图标
  -->
  <el-sub-menu v-if="children && children.length > 0" :index="index">
    <!-- 
      菜单标题插槽，包含图标和文本
      #title: Element Plus的具名插槽，用于自定义菜单标题
    -->
    <template #title>
      <!-- 使用Element Plus图标组件 -->
      <el-icon><location /></el-icon>
      <!-- 显示菜单项标题文本 -->
      <span>{{ props.title }}</span>
    </template>
    <!-- 
      渲染子菜单（如果有子菜单项）
      v-if: 条件渲染，确保只有当children存在时才渲染子菜单
    -->
    <!-- 
        使用SubMenuItem组件渲染每个子菜单项
        v-for: 循环遍历children数组
        :key: 组合父菜单index和当前索引确保唯一性
      -->
    <SubMenuItem
      v-for="(child, index) in children"
      :key="`${props.index}-${index}`"
      :index="`${props.index}-${index}`"
      :title="child.title"
      :children="child.children"
      :path="child.path"
    />
  </el-sub-menu>
  <LinkItem v-else :index="index" :path="path" :title="title"></LinkItem>
</template>

<script setup>
/**
 * 顶部菜单项组件
 * 功能: 作为一级菜单项，支持图标显示和子菜单嵌套
 */

// 导入Element Plus的Location图标组件
// Location: 地图定位图标，来自Element Plus图标库
import { Location } from '@element-plus/icons-vue'
// 导入子菜单项组件
// SubMenuItem: 用于渲染子菜单的递归组件
import SubMenuItem from './SubMenuItem.vue'
import LinkItem from './LinkItem.vue'

// 定义组件props：
// - title: 菜单项显示文本 (必填)
// - children: 子菜单项数组 (可选)
// - index: 菜单项唯一标识 (必填)
const props = defineProps(['title', 'children', 'index', 'path'])
</script>
