<template>
  <div class="side-wrapper">
    <ul class="nav-ul">
      <li v-for="(item, index) in nav" :key="item.text + index" class="nav-li" :class="'p-' + item.depth">
        <a :href="'#' + tolower(item.text)">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  filters: {
    tolower(v) {
      return v.toLowerCase().replace(/\s/g, '-')
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      nav: 'getNav'
    })
  },
  methods: {
    tolower(v) {
      return v.toLowerCase().replace(/\s/g, '-')
    }
  }
}
</script>

<style lang="scss" scoped>
.side-wrapper {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  padding-top: 50px;
  .nav-ul {
    list-style: none;
    padding: 0 20px;
    .nav-li {
      &.p-1 {
        padding-left: 30px;
      }
      border-radius: 2px;
      cursor: pointer;
      line-height: 2;
      padding-left: 50px;
      transition: all .3s;
      &:hover {
        background-color: #ddd;
        a {
          color: #1890ff;
        }
      }
    }
  }
  a {
    color: #2c3e50;
  }
}
</style>
