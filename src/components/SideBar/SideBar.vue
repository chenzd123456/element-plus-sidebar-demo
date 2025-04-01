<template>
  <el-menu class="el-menu-vertical-demo">
    <TopMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :title="item.title"
      :children="item.children"
    ></TopMenuItem>
  </el-menu>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import TopMenuItem from './TopMenuItem.vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { useMenuStore } from '@/stores/menu.js'

const menuStore = useMenuStore()

const { menu } = storeToRefs(menuStore)
</script>
