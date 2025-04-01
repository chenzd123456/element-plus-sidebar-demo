import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const menu = reactive([
    { title: 'Home', path: '/' },
    {
      title: 'test',
      children: [
        {
          title: 'test',
          children: [
            { title: 'demo1', path: '/demo/demo1' },
            { title: 'demo2', path: '/demo/demo2' },
          ],
        },
      ],
    },
  ])

  return { menu }
})
