<template>
  <!-- 
    侧边栏主容器，使用Element Plus的el-menu组件
    功能: 提供侧边导航菜单容器，支持折叠、展开和路由跳转
  -->
  <el-menu class="el-menu-vertical-demo">
    <!-- 
      遍历菜单数据，为每个顶级菜单项渲染TopMenuItem组件
      v-for: 循环渲染menu数组中的每个菜单项
      :key: 使用索引作为唯一标识符（生产环境建议使用更稳定的ID）
    -->
    <TopMenuItem
      v-for="(item, index) in menu"
      :key="`'${index}'`"
      :index="index"
      :title="item.title"
      :children="item.children"
      :path="item.path"
    ></TopMenuItem>
  </el-menu>
</template>

<script setup>
/**
 * 侧边栏主组件
 * 功能: 渲染整个侧边栏菜单结构，从Pinia store获取菜单数据
 */

// 使用Pinia的状态管理库
// storeToRefs: 用于保持Pinia store的响应式特性
import { storeToRefs } from 'pinia'
// 导入顶级菜单项组件
// TopMenuItem: 处理一级菜单项及其子菜单
import TopMenuItem from './TopMenuItem.vue'
// 导入菜单状态管理store
// useMenuStore: 获取菜单数据的状态管理实例
import { useMenuStore } from '@/stores/menu.js'

// 初始化菜单store
// useMenuStore: 获取菜单状态管理实例
const menuStore = useMenuStore()

// 使用storeToRefs解构出menu数据，保持响应式
// menu: 一个ref对象，包含所有菜单项数据
const { menu } = storeToRefs(menuStore)
</script>
