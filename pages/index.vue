<template>
  <div class="container">
    <div v-for="item in blog.list" :key="item.id" class="blog-post">
      <nuxt-link no-prefetch :to="'/posts/' + item.unionTitle">
        <h1 class="title">{{ item.title }}</h1>
      </nuxt-link>
      <div class="desc">{{ item.desc }}</div>
      <div class="blog-info">
        <a-icon type="tags" theme="filled" />
        <span
          v-for="tag in item.tags.split(',')"
          :key="tag"
          class="tag"
          v-text="tag.toUpperCase()"
        />
      </div>
    </div>
    <page-bar v-if="blog.totalPage > 1" :total-page="blog.totalPage" :page-index="blog.pageIndex" :page-size="blog.pageSize" @change="pageChange" />
  </div>
</template>

<script>
import PageBar from '@/components/PageBar'
export default {
  components: {
    PageBar
  },
  async asyncData({ app, route }) {
    const { $api } = app
    const { query } = route
    const r = await $api.getBlogList({
      pageIndex: query.pageIndex || 1,
      pageSize: query.pageSize || 10
    })
    return {
      blog: r.data
    }
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 10
    }
  },
  methods: {
    async getBlogList() {
      const r = await this.$api.getBlogList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize
      })
      this.blog = r.data
    },
    pageChange(v) {
      const nextPageIndex = this.pageIndex + v
      if (nextPageIndex < 1 || nextPageIndex > this.blog.totalPage) {
        return
      }
      this.pageIndex = nextPageIndex
      this.getBlogList()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 0 150px;
  .blog-post {
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 4px;
    transition: all 0.3s;
    cursor: pointer;
    border-bottom: 2px solid #eee;
    box-sizing: border-box;
    .title {
      font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
        BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
        sans-serif;
      display: block;
      font-weight: 300;
      font-size: 20px;
      color: #35495e;
      letter-spacing: 1px;
      padding: 10px 0;
      transition: all 0.3s;
    }
    .desc {
      text-indent: 2em;
    }
    &:hover {
      box-shadow: 0 1px 6px 0 #eee;
      border-color: #0094ff;
      border-width: 2px;
      .title {
        color: #0094ff;
      }
    }
    .blog-info {
      padding: 5px 0;
      .tag {
        padding: 3px 5px;
        margin-right: 10px;
        color: #ccc;
        font-size: 12px;
        border-radius: 2px;
      }
    }
  }
}
</style>
