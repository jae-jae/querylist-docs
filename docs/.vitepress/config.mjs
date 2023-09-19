import { defineConfig } from 'vitepress'
import v4SideBar from './sidebar/v4.js'
import v3SideBar from './sidebar/v3.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QueryList",
  description: "QueryList",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '📕入门指南', link: '/v4/guide/overview' },
      { text: 'API手册', link: '/v4/api/overview' },
      {
        text: '历史版本(v3)',
        items: [
          { text: '入门指南', link: '/v3/guide/overview', activeMatch: '/v3/guide/' },
          { text: 'API手册', link: '/v3/api/overview', activeMatch: '/v3/api/' }
        ]
      }
    ],

    sidebar: {
      ...v4SideBar,
      ...v3SideBar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    editLink: {
      pattern: 'https://github.com/jae-jae/querylist-docs/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    }
  },
  lastUpdated: true
})
