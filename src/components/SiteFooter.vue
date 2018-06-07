<template>
<div class="site-footer">
  <div class="footer-main">
    <img class="footer-logo" src="../assets/images/pool-pros-logo-footer.png" alt="PoolPros" />
    <div class="social-media">
      <p class="social-media__title">Connect with us</p>
      <ul class="social-media__list">
        <li class="social-media__list__item" ><a class="social-link social-link-twitter" href="" ></a></li>
        <li class="social-media__list__item" ><a class="social-link social-link-facebook" href="" ></a></li>
        <li class="social-media__list__item" ><a class="social-link social-link-youtube" href="" ></a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <ul class="footer-links">
        <li class="footer-links__item">&copy; {{year}} Pool Pros</li>
        <li class="footer-links__item hide-for-desktop-up"><a class="footer-links__link" href="" title="Dealers &amp; Distributors">Dealers &amp; Distributors</a></li>
        <li class="footer-links__item hide-for-desktop-up"><a class="footer-links__link" href="" title="Commercial Service">Commercial Service</a></li>
        <li class="footer-links__item"><a class="footer-links__link" href="" title="Privacy Policy">Privacy Policy</a></li>
        <li class="footer-links__item"><a class="footer-links__link" href="" title="Terms and Conditions">Terms and Conditions</a></li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SiteFooter',
  data: function () {
    let date = new Date()
    return {
      year: date.getFullYear()
    }
  }
}
</script>

<style lang="scss">
@import "../sass/variables";
@import "../sass/media-queries";
@import "../sass/mixins";

.footer-bottom {
  background-color: $color-blue;
  overflow: hidden;
  font-size: 14px;

  * {
    font-size: 1em;
  }
}

.hide-for-desktop-up {

  @include for-desktop-up {
    display: none;
  }
}

.footer-main {
  background: $color-blue-darker;
  text-align: center;
  padding: $pad*2 $pad;
}

.social-media {

  &__title {
    color: $color-white;
    display: inline-block;
    text-transform: uppercase;
    @include font('bold');
    margin-bottom: 0;
    vertical-align: middle;
    margin-right: 1rem;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-block;

    &__item {
      display: inline-block;
    }
  }
}

.social-link {
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  vertical-align: middle;
  margin-right: .75rem;
}

.social-link-facebook {
  background-image: url('../assets/images/facebook-icon.png');
}

.social-link-twitter {
  background-image: url('../assets/images/twitter-icon.png');
}

.social-link-youtube {
  background-image: url('../assets/images/youtube-icon.png');
}

.footer-logo {
  width: 13rem;
  margin-bottom: $pad;
}

.footer-links {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  flex-wrap: wrap;

  &__item {
    padding: 0 $pad;
    border-right: 1px solid $color-white;
    color: $color-white;
    margin-bottom: .75rem;

    &:last-child {
      border-right: 0;
    }
  }

  &__link {
    color: $color-white;
  }
}
</style>
