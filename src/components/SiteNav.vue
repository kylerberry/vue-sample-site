<template>
<nav class="site-nav">
  <ul class="link-list">
    <li class="link-list__item"><a href="" class="link-list__item__link" title="Pools &amp; Spas">Pools &amp; Spas</a></li>
    <li class="link-list__item"><a href="" class="link-list__item__link" title="Supplies">Supplies</a></li>
    <li class="link-list__item"><a href="" class="link-list__item__link" title="Resources">Resources</a></li>
    <li class="link-list__item"><a href="" class="link-list__item__link" title="Services">Services</a></li>
    <li class="link-list__item">
      <a class="link-list__item__link primary-link">
        <i class="ss-location primary-link__icon"></i>
        Find A Pool Pro
      </a>
    </li>
  </ul>
  
</nav>
</template>

<script>
export default {
  name: 'SiteNav',
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";

.link-list {
  list-style: none;
  margin: 0;
  padding: 0;
  
  &__item {
    display: inline-block;
    margin-left: 3rem;

    &__link {
      color: $color-blue-darker;
      @include font('bold');
      text-decoration: none;
      font-size: .9rem;
    }
  }
}

.primary-link {
  border: 1px solid $color-blue;
  border-radius: $border-radius;
  color: $color-blue;
  padding: $pad/2 $pad;
  transition: all .2s ease;

  &:hover {
    background-color: $color-blue;
    color: $color-white;
  }

  &__icon {
    margin-right: $pad/2;
  }
}
</style>
