<template>
<nav class="site-nav">
  <div class="desktop-nav">
    <ul class="link-list">
      <li class="link-list__item"><a href="" class="link-list__item__link" title="Pools &amp; Spas">Pools &amp; Spas</a></li>
      <li class="link-list__item"><a href="" class="link-list__item__link" title="Supplies">Supplies</a></li>
      <li class="link-list__item"><a href="" class="link-list__item__link" title="Resources">Resources</a></li>
      <li class="link-list__item"><a href="" class="link-list__item__link" title="Services">Services</a></li>
      <li class="link-list__item">
        <a class="link-list__item__link primary-link" href="">
          <i class="ss-location primary-link__icon"></i>
          Find A Pool Pro
        </a>
      </li>
    </ul>
  </div>

  <div class="mobile-nav">
    <a class="primary-link" href="">
      <i class="ss-location primary-link__icon"></i>
      Find A Pro
    </a>
    <a href="" class="menu-trigger" @click.prevent="showMobileMenu = true">
    </a>
    <div class="mobile-menu" :class="{'mobile-menu--open' : showMobileMenu}">
      <p class="mobile-menu__title">Menu</p>
      <a href="" class="mobile-menu__close" @click.prevent="showMobileMenu = false"><i class="ss-delete"></i></a>
      <ul class="mobile-menu__list">
        <li class="mobile-menu__list__item">
          <a href="" class="mobile-menu__list__item__link" title="Pools &amp; Spas" >
            Pools &amp; Spas
            <i class="ss-navigateright mobile-menu__list__item__link__icon"></i>
          </a>
        </li>
        <li class="mobile-menu__list__item">
          <a href="" class="mobile-menu__list__item__link" title="Supplies">
            Supplies
            <i class="ss-navigateright mobile-menu__list__item__link__icon"></i>
          </a>
        </li>
        <li class="mobile-menu__list__item">
          <a href="" class="mobile-menu__list__item__link" title="Resources">
            Resources
            <i class="ss-navigateright mobile-menu__list__item__link__icon"></i>
          </a>
        </li>
        <li class="mobile-menu__list__item">
          <a href="" class="mobile-menu__list__item__link" title="Services">
            Services
            <i class="ss-navigateright mobile-menu__list__item__link__icon"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'SiteNav',
  data: function () {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/variables";
@import "../sass/mixins";
@import "../sass/media-queries";

.desktop-nav {
  display: none;

  @include for-tablet-landscape-up() {
    display: inherit;
  }
}

.mobile-nav {
  display: block;

  @include for-tablet-landscape-up() {
    display: none;
  }
}

.link-list {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item {
    display: inline-block;

    @include for-tablet-landscape-up() {
      margin-left: 1.8rem;
    }

    @include for-desktop-up() {
      margin-left: 3rem;
    }

    &__link {
      color: $color-blue-darker;
      @include font('bold');
      text-decoration: none;
      font-size: .9rem;
    }
  }
}

.menu-trigger {
  background: url('../assets/images/menu-icon-mobile.png') 0 0 no-repeat;
  cursor: pointer;
  background-size: contain;
  width: 4rem;
  height: 4rem;
  display: inline-block;
  vertical-align: middle;
  margin-left: $pad;
  margin-bottom: -.75rem;
}

.primary-link {
  border: 1px solid $color-blue;
  border-radius: $border-radius;
  color: $color-blue;
  padding: $pad/2 $pad;
  transition: all .2s ease;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;

  // custom media-query
  @media (max-width: 480px) {
    display: none;
  }

  &:hover {
    background-color: $color-blue;
    color: $color-white;
  }

  &__icon {
    margin-right: $pad/2;
  }
}

.mobile-menu {
  position: fixed;
  top: -$pad;
  left: 0;
  right: 0;
  background: $color-white;
  border-top: 4px solid $color-teal-darker;
  border-bottom: 4px solid $color-teal-darker;
  box-shadow: 0 1px 8px $color-gray-darker;

  max-height: 0;
  transition: max-height .3s;
  overflow: hidden;

  &--open {
    top: 0;
    max-height: 1000px;
  }

  &__close {
    color: $color-teal-darker;
    position: absolute;
    top: $pad;
    right: $pad;
    text-decoration: none;
  }

  &__title {
    text-align: center;
    color: $color-blue-darker;
    @include font('bold');
    padding: $pad*2 0;
    margin-bottom: 0;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;

    &__item {

      &__link {
        padding: $pad*2 $pad;
        background: $color-gray-lighter;
        display: block;
        border-top: 2px solid $color-white;
        color: $color-black;
        text-decoration: none;

        &__icon {
          float: right;
          color: $color-teal-darker;
        }
      }
    }
  }
}
</style>
