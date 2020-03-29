<template>
  <div class="layout-box">
    <header class="lyj-header">
      <nuxt-link class="logo" to="/">
        <img src="../assets/imgs/Logo.jpg">
        LiYajie
      </nuxt-link>
      <div class="header-menu">
        <span class="menu">JS</span>
        <span class="menu">CSS</span>
      </div>
    </header>
    <div class="lyj-side">
      <home-side v-if="$route.path === '/'" />
      <side v-if="$route.path !== '/'" />
    </div>
    <div class="lyj-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import Side from '../components/Side'
import HomeSide from '../components/HomeSide'
export default {
  components: {
    Side,
    HomeSide
  }
}
</script>
