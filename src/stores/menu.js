/**
 * 菜单状态管理store
 * 功能: 管理侧边栏菜单数据，支持无限级嵌套菜单结构
 */

// 使用Pinia的状态管理库创建菜单store
// defineStore: Pinia的核心API，用于创建store
import { defineStore } from 'pinia'
// 使用Vue的reactive API创建响应式数据
// reactive: 创建深度响应式对象
import { reactive } from 'vue'

/**
 * 定义菜单store
 * @param {string} 'menu' - store的唯一标识
 * @returns {Object} 包含响应式菜单数据的store
 */
export const useMenuStore = defineStore('menu', () => {
  /**
   * 响应式菜单数据
   * 数据结构说明:
   * - title: 菜单项显示文本 (必填)
   * - path: 路由路径 (可选)
   * - children: 子菜单数组 (可选，支持无限级嵌套)
   * - icon: 菜单图标 (可选)
   */
  const menu = reactive([
    {
      title: 'Home', // 首页菜单项
      path: '/', // 对应路由路径
    },
    {
      title: 'test', // 测试菜单项（有子菜单）
      children: [
        // 子菜单数组
        {
          title: 'test', // 二级菜单项
          children: [
            // 三级菜单数组
            {
              title: 'demo1', // 三级菜单项1
              path: '/demo/demo1', // 对应路由路径
            },
            {
              title: 'demo2', // 三级菜单项2
              path: '/demo/demo2', // 对应路由路径
            },
          ],
        },
      ],
    },
  ])

  // 返回store的状态
  // menu: 响应式菜单数据，可在组件中使用
  return { menu }
})
