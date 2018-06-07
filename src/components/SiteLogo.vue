<template>
<h1 class="site-logo">
  <a href="/" title="Pool Pros" tile="PoolPros">
    <span class="site-logo__name">PoolPros</span>
    <img class="site-logo__image" src="../assets/images/pool-pros-logo.png" alt="PoolPros" />
  </a>
</h1>
</template>

<script>
export default {
  name: 'SiteLogo'
}
</script>

<style lang="scss" scoped>
@import "../sass/media-queries";

.site-logo {
  float: left;
  margin: 0;
  
  @include for-tablet-landscape-up() {
    margin: .67rem 0;
  }

  &__name {
    text-indent: -9999px;
    float: left;
  }

  &__image {
    width: 13rem;
  }
}
</style>
