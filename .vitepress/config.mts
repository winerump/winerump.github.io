import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WineRump",
  description: "Une soirée de rumps sur Bordeaux",
  appearance: "force-dark",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '2025', link: '/editions/2025/' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/winerump' },
      { icon: 'linkedin', link: 'https://linkedin.com/winerump' }
    ]
  }
})
