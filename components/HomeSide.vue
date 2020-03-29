<template>
  <div class="lyj-home-side">
    <div class="lyj-logo">
      <img src="../assets/imgs/Logo.jpg" alt="">
      <span class="lyj-author">LiYajie</span>
    </div>
    <div class="lyj-blog-title">
      <h1>LiYajie技术小栈</h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.lyj-home-side {
  padding-top: 100px;
  .lyj-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .lyj-author {
      margin-top: 10px;
      font-size: 18px;
    }
  }
  .lyj-blog-title {
    text-align: center;
    padding: 20px 10px;
  }
}
</style>
