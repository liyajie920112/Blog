<template>
  <div class="page-bar-wrapper">
    <!-- <a class="page-btn" :href="prePageLink">上一页</a>
    <a class="page-btn" :href="nextPageLink">下一页</a> -->
    <span class="page-btn" @click="gotoPage(-1)">上一页</span>
    <span class="page-btn" @click="gotoPage(1)">下一页</span>
  </div>
</template>

<script>
export default {
  props: {
    totalPage: {
      type: Number,
      default: 0
    },
    pageIndex: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    prePageLink() {
      let nextPageIndex = this.pageIndex - 1
      if (nextPageIndex <= 0) {
        nextPageIndex = 1
      }
      return `?pageIndex=${nextPageIndex}&pageSize=${this.pageSize}`
    },
    nextPageLink() {
      let nextPageIndex = this.pageIndex + 1
      if (nextPageIndex >= this.totalPage) {
        nextPageIndex = this.totalPage
      }
      return `?pageIndex=${nextPageIndex}&pageSize=${this.pageSize}`
    }
  },
  methods: {
    gotoPage(v) {
      this.$emit('change', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-bar-wrapper {
  display: flex;
  justify-content: space-around;
  .page-btn {
    padding: 10px 20px;
    background-color: #fff;
    color: #333;
    border: 1px solid #999;
    cursor: pointer;
    transition: all .3s;
    white-space: nowrap;
    text-decoration: none;
    &:hover {
      color: #0094ff;
      border-color: #0094ff;
    }
  }
}
</style>
