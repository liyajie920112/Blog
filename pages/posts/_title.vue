<template>
  <div class="blog-content markdown" v-html="blog.html" />
</template>

<script>
import { parseMarkdown, parseHNav } from '../../utils/markdown'
import Prism from '@/plugins/prism'
export default {
  async asyncData({ params, app, store }) {
    const { $api } = app
    const { title } = params
    const r = await $api.getBlog({ unionTitle: title })
    // 解析博客为html
    const blogHtml = parseMarkdown(r.data.blogContent)
    const nav = parseHNav(r.data.blogContent)
    store.commit('setNav', nav)
    return {
      blog: {
        html: blogHtml,
        blogNav: nav
      }
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
.blog-content {
  padding: 0 150px 30px 150px;
}
</style>
