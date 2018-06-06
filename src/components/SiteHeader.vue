<template>
<header class="site-header">
  <div class="header-top">
    <div class="container">
      <ul class="header-top__link-list link-list">
        <li class="link-list__item"><a class="link-list__link" href="" title="Dealers &amp; Distributors">Dealers &amp; Distributors</a></li>
        <li class="link-list__item"><a class="link-list__link" href="" title="Commercial Service">Commercial Service</a></li>
      </ul>
    </div>
  </div>
  <div class="header-main">
    <div class="container flex-container">
      <SiteLogo />
      <SiteNav />
    </div>
  </div>
</header>
</template>

<script>
import SiteLogo from './SiteLogo'
import SiteNav from './SiteNav'

export default {
  name: 'SiteHeader',
  components: {
    SiteLogo, SiteNav
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";

.header-top {
  background-color: $color-blue-darker;
  overflow: hidden;
}

.header-main {
  box-shadow: 0 2px 6px -2px $color-black;
  padding: .75rem 0;
}

.link-list {
  list-style: none;
  display: flex;
  justify-content: flex-end;

  &__item {
    display: inline-block;
    margin-right: $pad;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    color: $color-white;
  }
}

.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
